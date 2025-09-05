import { notFound } from "next/navigation";
import Link from "next/link";
import PokemonCard from "../../components/ui/PokemonCard";
import TypeBadge from "../../components/ui/TypeBadge";
import { fetchPokemonByType } from "@/lib/data/pokemon";
import { POKEMON_TYPES } from "@/lib/data/constants";
import { PokemonTypeName } from "@/lib/types/pokemon";

interface TypePageProps {
  params: { type: string };
}

export async function generateStaticParams() {
  return POKEMON_TYPES.map((type) => ({
    type: type.name,
  }));
}

export async function generateMetadata({ params }: TypePageProps) {
  const typeInfo = POKEMON_TYPES.find(t => t.name === params.type);
  
  if (!typeInfo) {
    return { title: 'Type Not Found' };
  }

  return {
    title: `${typeInfo.name.charAt(0).toUpperCase() + typeInfo.name.slice(1)} Type Pokémon - Pokédex`,
    description: `Discover all ${typeInfo.name} type Pokémon. Learn about their stats, abilities, and characteristics.`,
  };
}

export default async function TypePage({ params }: TypePageProps) {
  const typeInfo = POKEMON_TYPES.find(t => t.name === params.type);
  
  if (!typeInfo) {
    notFound();
  }

  const pokemonList = await fetchPokemonByType(params.type);

  return (
    <div className="content-grid py-16">
      {/* Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Link 
          href="/types" 
          className="text-purple-600 hover:text-purple-800 flex items-center gap-2"
        >
          ← Back to Types
        </Link>
        
        <div className="max-w-32">
          <TypeBadge type={params.type as PokemonTypeName} size="sm" />
        </div>
      </div>
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 capitalize">
          {typeInfo.emoji} {params.type} Type Pokémon
        </h1>
        <p className="text-xl text-gray-600">
          Showing {pokemonList.length} Pokémon of {params.type} type
        </p>
      </div>
      
      {/* Pokemon Grid */}
      {pokemonList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pokemonList.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} showLink={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 mb-4">
            No Pokémon found for {params.type} type.
          </p>
          <Link href="/types" className="btn-primary inline-flex items-center">
            Browse Other Types
          </Link>
        </div>
      )}

      {/* Load More Button (for future implementation) */}
      {pokemonList.length >= 20 && (
        <div className="text-center mt-12">
          <button className="btn-primary" disabled>
            Load More (Coming Soon)
          </button>
          <p className="text-sm text-gray-500 mt-2">
            Currently showing first 20 Pokémon of this type
          </p>
        </div>
      )}
    </div>
  );
}