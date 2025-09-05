import { notFound } from "next/navigation";
import Link from "next/link";
import PokemonCard from "../../components/ui/PokemonCard";
import { fetchPokemon, fetchPokemonSpecies } from "@/lib/data/pokemon";


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
        </div>
      </div>
    </div>
  );
}