import Image from "next/image";
import Link from "next/link";
import { Pokemon } from "@/lib/types/pokemon";
import { TYPE_COLORS } from "@/lib/data/constants";

interface PokemonCardProps {
  pokemon: Pokemon;
  showLink?: boolean;
}

export default function PokemonCard({ pokemon, showLink = false }: PokemonCardProps) {
  const hp = pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat || 0;
  const attack = pokemon.stats.find(stat => stat.stat.name === "attack")?.base_stat || 0;
  const defense = pokemon.stats.find(stat => stat.stat.name === "defense")?.base_stat || 0;

  const cardContent = (
    <div className="bg-white rounded-lg border-4 border-blue-400 p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105 cursor-pointer">
      {/* Pokemon Image */}
      <div className="flex justify-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-400 flex items-center justify-center border-4 border-yellow-500">
          <Image
            src={pokemon.sprites.front_default || "/placeholder-pokemon.png"}
            width={80}
            height={80}
            alt={pokemon.name}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Pokemon Number */}
      <div className="text-center text-sm font-bold text-orange-500 mb-2">
        #{pokemon.id.toString().padStart(3, '0')}
      </div>

      {/* Pokemon Name */}
      <h3 className="text-xl font-bold text-center mb-4 capitalize">
        {pokemon.name}
      </h3>

      {/* Types */}
      <div className="flex justify-center gap-2 mb-4">
        {pokemon.types.map((type, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-white text-sm font-semibold ${
              TYPE_COLORS[type.type.name] || "bg-gray-400"
            }`}
          >
            {type.type.name}
          </span>
        ))}
      </div>

      {/* Stats */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="font-semibold">HP</span>
          <span className="font-bold">{hp}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Attack</span>
          <span className="font-bold">{attack}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Defense</span>
          <span className="font-bold">{defense}</span>
        </div>
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href={`/pokedex/${pokemon.id}`}>
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}