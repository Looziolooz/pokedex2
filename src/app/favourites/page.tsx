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
          
          <div className="bg-gray-50 rounded-lg p-8 max-w-lg mx-auto mb-8">
            <h3 className="font-bold text-gray-800 mb-4">Coming Soon Features:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-red-500">❤️</span>
                <span>Add to Favourites</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500">📱</span>
                <span>Sync Across Devices</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">📊</span>
                <span>Favourite Stats</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🏷️</span>
                <span>Custom Tags</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pokedex" className="btn-primary">
              🔍 Explore Pokédex
            </Link>
            <Link href="/types" className="btn-primary">
              🔥 Browse by Type
            </Link>
            <Link href="/" className="btn-primary">
              🎲 Try Random Pokémon
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}