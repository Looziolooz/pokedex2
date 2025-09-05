"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PokemonCard from "./PokemonCard";
import { searchPokemonByName } from "@/lib/data/search";
import { Pokemon } from "@/lib/types/pokemon";

interface SearchFormProps {
  placeholder?: string;
  redirectTo?: 'pokedex' | 'search-results';
  showResultsBelow?: boolean;
}

export default function SearchForm({ 
  placeholder = "Search for a Pokémon...", 
  redirectTo = 'search-results',
  showResultsBelow = false
}: SearchFormProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [searchResults, setSearchResults] = useState<Pokemon[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [hasSearched, setHasSearched] = useState(false);
  
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Autocomplete search con debounce
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchTerm.length >= 2) {
        setIsLoading(true);
        try {
          const results = await searchPokemonByName(searchTerm);
          setSuggestions(results.slice(0, 5)); // Limita dropdown a 5
          setShowDropdown(true);
          
          // Se showResultsBelow è true, mostra anche i risultati sotto
          if (showResultsBelow) {
            setSearchResults(results);
            setHasSearched(true);
          }
        } catch (error) {
          console.error('Search error:', error);
          setSuggestions([]);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setSuggestions([]);
        setShowDropdown(false);
        if (showResultsBelow) {
          setSearchResults([]);
          setHasSearched(false);
        }
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, showResultsBelow]);

  // Chiudi dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Gestione tastiera
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!showDropdown || suggestions.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          selectPokemon(suggestions[selectedIndex]);
        } else if (searchTerm.trim()) {
          handleDirectSubmit();
        }
        break;
      case 'Escape':
        setShowDropdown(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handleDirectSubmit();
  };

  const handleDirectSubmit = async () => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    const cleanTerm = searchTerm.toLowerCase().trim();
    
    try {
      if (redirectTo === 'pokedex') {
        router.push(`/pokedex/${cleanTerm}`);
      } else {
        router.push(`/search-results?pokemon=${cleanTerm}`);
      }
      setShowDropdown(false);
    } finally {
      setIsLoading(false);
    }
  };

  const selectPokemon = (pokemon: Pokemon) => {
    router.push(`/pokedex/${pokemon.id}`);
    setShowDropdown(false);
    setSearchTerm('');
  };

  const handleInputFocus = () => {
    if (searchTerm.length >= 2 && suggestions.length > 0) {
      setShowDropdown(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setSelectedIndex(-1);
  };

  return (
    <div className="w-full">
      {/* Search Input */}
      <div ref={containerRef} className="relative w-full max-w-md mx-auto mb-8">
        <form onSubmit={handleSubmit} className="flex justify-center w-full">
          <div className="relative w-full">
            <input
              type="text"
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onKeyDown={handleKeyDown}
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

        {/* Suggestions Dropdown */}
        {showDropdown && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
            <div className="p-2">
              {suggestions.map((pokemon, index) => (
                <div
                  key={pokemon.id}
                  onClick={() => selectPokemon(pokemon)}
                  className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition-colors ${
                    index === selectedIndex 
                      ? 'bg-purple-100 border border-purple-300' 
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center border-2 border-yellow-500 flex-shrink-0">
                    <Image
                      src={pokemon.sprites.front_default || "/placeholder-pokemon.png"}
                      width={24}
                      height={24}
                      alt={pokemon.name}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm capitalize truncate">
                      {pokemon.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      #{pokemon.id.toString().padStart(3, '0')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Section Below Search */}
      {showResultsBelow && (
        <div className="w-full">
          {hasSearched && searchTerm.length >= 2 && (
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-center mb-6 text-gradient">
                Search Results for `{searchTerm}`
              </h3>
              
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Array.from({ length: 4 }, (_, index) => (
                    <div key={index} className="bg-white rounded-lg border-4 border-gray-200 p-6 shadow-lg">
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse"></div>
                      </div>
                      <div className="text-center mb-2">
                        <div className="w-12 h-4 bg-gray-200 rounded mx-auto animate-pulse"></div>
                      </div>
                      <div className="text-center mb-4">
                        <div className="w-20 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
                      </div>
                      <div className="flex justify-center gap-2 mb-4">
                        <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                      </div>
                      <div className="space-y-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="flex justify-between">
                            <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {searchResults.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} showLink={true} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">😵</div>
                  <p className="text-xl text-gray-600 mb-4">
                    No Pokémon found matching &quot;{searchTerm}&quot;
                  </p>
                  <p className="text-gray-500 mb-6">
                    Try searching with a different name or ID number
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 max-w-md mx-auto">
                    <p className="font-semibold mb-2 text-gray-700">Search suggestions:</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">pikachu</span>
                      <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">charizard</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">25</span>
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">bulbasaur</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!hasSearched && showResultsBelow && (
            <div className="text-center text-gray-500 py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-lg mb-2">Start typing to search for Pokémon!</p>
              <p className="text-sm text-gray-400">
                Results will appear here as you type (minimum 2 characters)
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}