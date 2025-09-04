import Link from "next/link";
import { POKEMON_TYPES } from "@/lib/data/constants";
import { PokemonTypeName } from "@/lib/types/pokemon";

interface TypeBadgeProps {
  type: PokemonTypeName;
  size?: 'sm' | 'md' | 'lg';
  clickable?: boolean;
}

export default function TypeBadge({ type, size = 'md', clickable = false }: TypeBadgeProps) {
  const typeInfo = POKEMON_TYPES.find((t) => t.name === type);
  if (!typeInfo) return null;

  const sizeClasses = {
    sm: 'p-4 text-sm',
    md: 'p-6 text-base',
    lg: 'p-8 text-lg'
  };

  const content = (
    <div className={`${typeInfo.bgColor} text-white rounded-lg text-center hover:scale-105 transition-transform shadow-lg ${sizeClasses[size]} ${clickable ? 'cursor-pointer' : ''}`}>
      <div className="text-3xl mb-2">{typeInfo.emoji}</div>
      <div className="font-bold capitalize">{typeInfo.name}</div>
    </div>
  );

  if (clickable) {
    return (
      <Link href={`/types/${type}`}>
        {content}
      </Link>
    );
  }

  return content;
}