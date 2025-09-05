"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import PokemonCard from "../components/ui/PokemonCard";
import { Pokemon } from "@/lib/types/pokemon";

export default function FavouritesPage() {
  const [favourites] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading favourites (implement localStorage later)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="content-grid py-16">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>Loading your favourite Pokémon...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-grid py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">My Favourites</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your personal collection of favourite Pokémon will appear here.
        </p>
      </div>

      {favourites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favourites.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} showLink={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-8xl mb-6">💝</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            No Favourites Yet!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Start exploring Pokémon and add them to your favourites collection.
            Your favourite Pokémon will be saved here.
          </p>
          
          <Link 
            href="/pokedex" 
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 mb-8"
          >
            Explore Pokédex
          </Link>      
        </div>
      )}
    </div>
  );
}