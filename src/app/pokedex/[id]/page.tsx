import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PokemonCard from "../../components/ui/PokemonCard";
import { fetchPokemon, fetchPokemonSpecies } from "@/lib/data/pokemon";
import { TYPE_COLORS } from "@/lib/data/constants";

interface PokemonDetailPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: PokemonDetailPageProps) {
  const pokemon = await fetchPokemon(params.id);
  
  if (!pokemon) {
    return {
      title: 'Pokémon Not Found',
    };
  }

  return {
    title: `${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} - Pokédx`,
    description: `Learn about ${pokemon.name}, including stats, types, and abilities.`,
  };
}

export default async function PokemonDetailPage({ params }: PokemonDetailPageProps) {
  const [pokemon, species] = await Promise.all([
    fetchPokemon(params.id),
    fetchPokemonSpecies(params.id),
  ]);

  if (!pokemon) {
    notFound();
  }

  // Get English flavor text
  const flavorText = species?.flavor_text_entries
    .find(entry => entry.language.name === 'en')
    ?.flavor_text.replace(/\f/g, ' ') || 'No description available.';

  return (
    <div className="content-grid py-8">
      {/* Navigation */}
      <div className="mb-8">
        <Link 
          href="/pokedex" 
          className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
        >
          ← Back to Pokédex
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Pokemon Card */}
        <div className="flex justify-center">
          <div className="max-w-sm w-full">
            <PokemonCard pokemon={pokemon} />
          </div>
        </div>

        {/* Right Column - Detailed Info */}
        <div className="space-y-8">
          {/* Basic Info */}
          <div>
            <h1 className="text-4xl font-bold capitalize mb-2">{pokemon.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{flavorText}</p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-semibold">Height:</span> {pokemon.height / 10}m
              </div>
              <div>
                <span className="font-semibold">Weight:</span> {pokemon.weight / 10}kg
              </div>
              <div>
                <span className="font-semibold">Base Experience:</span> {pokemon.base_experience}
              </div>
              <div>
                <span className="font-semibold">ID:</span> #{pokemon.id.toString().padStart(3, '0')}
              </div>
            </div>
          </div>

          {/* Types */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Types</h3>
            <div className="flex gap-3">
              {pokemon.types.map((type, index) => (
                <Link
                  key={index}
                  href={`/types/${type.type.name}`}
                  className={`px-4 py-2 rounded-full text-white font-semibold hover:scale-105 transition-transform ${
                    TYPE_COLORS[type.type.name] || "bg-gray-400"
                  }`}
                >
                  {type.type.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Base Stats</h3>
            <div className="space-y-3">
              {pokemon.stats.map((stat) => (
                <div key={stat.stat.name} className="flex items-center gap-4">
                  <div className="w-24 text-sm font-medium capitalize">
                    {stat.stat.name.replace('-', ' ')}
                  </div>
                  <div className="w-12 text-right font-bold">
                    {stat.base_stat}
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${Math.min((stat.base_stat / 255) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total Stats */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-purple-600">
                  {pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Abilities */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Abilities</h3>
            <div className="flex flex-wrap gap-2">
              {pokemon.abilities.map((ability, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    ability.is_hidden
                      ? "bg-yellow-100 text-yellow-800 border border-yellow-300"
                      : "bg-blue-100 text-blue-800 border border-blue-300"
                  }`}
                >
                  {ability.ability.name.replace('-', ' ')}
                  {ability.is_hidden && " (Hidden)"}
                </span>
              ))}
            </div>
          </div>

          {/* Official Artwork */}
          {pokemon.sprites.other?.['official-artwork']?.front_default && (
            <div>
              <h3 className="text-2xl font-bold mb-4">Official Artwork</h3>
              <div className="flex justify-center">
                <Image
                  src={pokemon.sprites.other['official-artwork'].front_default}
                  width={300}
                  height={300}
                  alt={`${pokemon.name} official artwork`}
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}