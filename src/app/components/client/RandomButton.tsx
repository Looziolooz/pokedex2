"use client";

import { useState } from "react";
import Image from "next/image";
import PokemonCard from "../ui/PokemonCard";
import { fetchRandomPokemon } from "../../../lib/data/pokemon";
import { Pokemon } from "@/lib/types/pokemon";

export default function RandomButton() {
  const [randomPokemon, setRandomPokemon] = useState<Pokemon | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleRandomPokemon = async () => {
    setIsLoading(true);
    try {
      const pokemon = await fetchRandomPokemon();
      setRandomPokemon(pokemon);
    } catch (error) {
      console.error("Failed to fetch random Pokémon:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button 
        onClick={handleRandomPokemon}
        disabled={isLoading}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image
          src="/Dice.svg"
          width={25}
          height={25}
          alt="Dice"
        />
        {isLoading ? "Loading..." : "Random Pokémon"}
      </button>
      
      {randomPokemon && !isLoading && (
        <div className="mt-8 max-w-sm animate-in slide-in-from-bottom-4 duration-500">
          <PokemonCard pokemon={randomPokemon} showLink={true} />
        </div>
      )}
    </div>
  );
}