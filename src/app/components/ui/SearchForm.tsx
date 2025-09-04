"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SearchFormProps {
  placeholder?: string;
  redirectTo?: 'pokedex' | 'search-results';
}

export default function SearchForm({ 
  placeholder = "Search for a Pokémon...", 
  redirectTo = 'search-results' 
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    const cleanTerm = searchTerm.toLowerCase().trim();
    
    try {
      if (redirectTo === 'pokedex') {
        router.push(`/pokedex/${cleanTerm}`);
      } else {
        router.push(`/search-results?pokemon=${cleanTerm}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          disabled={isLoading}
          className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isLoading || !searchTerm.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-purple-500 rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Image
              src="/Search.svg"
              width={20}
              height={20}
              alt="Search"
              className="text-white"
            />
          )}
        </button>
      </div>
    </form>
  );
}