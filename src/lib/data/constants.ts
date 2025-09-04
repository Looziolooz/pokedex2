import { PokemonTypeName } from '../types/pokemon';

export const POKEMON_TYPES: Array<{
  name: PokemonTypeName;
  color: string;
  emoji: string;
  bgColor: string;
}> = [
  { name: 'fire', color: 'text-red-600', bgColor: 'bg-red-500', emoji: '🔥' },
  { name: 'water', color: 'text-blue-600', bgColor: 'bg-blue-500', emoji: '💧' },
  { name: 'grass', color: 'text-green-600', bgColor: 'bg-green-500', emoji: '🌱' },
  { name: 'electric', color: 'text-yellow-600', bgColor: 'bg-yellow-500', emoji: '⚡' },
  { name: 'psychic', color: 'text-purple-600', bgColor: 'bg-purple-500', emoji: '🔮' },
  { name: 'ice', color: 'text-blue-400', bgColor: 'bg-blue-300', emoji: '❄️' },
  { name: 'dragon', color: 'text-purple-800', bgColor: 'bg-purple-700', emoji: '🐉' },
  { name: 'dark', color: 'text-gray-800', bgColor: 'bg-gray-800', emoji: '🌚' },
  { name: 'fairy', color: 'text-pink-600', bgColor: 'bg-pink-500', emoji: '🧚' },
  { name: 'normal', color: 'text-gray-600', bgColor: 'bg-gray-400', emoji: '⚪' },
  { name: 'fighting', color: 'text-red-800', bgColor: 'bg-red-700', emoji: '👊' },
  { name: 'poison', color: 'text-purple-700', bgColor: 'bg-purple-600', emoji: '☠️' },
  { name: 'ground', color: 'text-yellow-800', bgColor: 'bg-yellow-600', emoji: '🌍' },
  { name: 'flying', color: 'text-blue-500', bgColor: 'bg-blue-400', emoji: '🪶' },
  { name: 'bug', color: 'text-green-500', bgColor: 'bg-green-400', emoji: '🐛' },
  { name: 'rock', color: 'text-yellow-900', bgColor: 'bg-yellow-800', emoji: '🗿' },
  { name: 'ghost', color: 'text-purple-900', bgColor: 'bg-purple-800', emoji: '👻' },
  { name: 'steel', color: 'text-gray-600', bgColor: 'bg-gray-500', emoji: '⚙️' },
];

export const TYPE_COLORS: Record<string, string> = {
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-500',
  psychic: 'bg-purple-500',
  ice: 'bg-blue-300',
  dragon: 'bg-purple-700',
  dark: 'bg-gray-800',
  fairy: 'bg-pink-500',
  normal: 'bg-gray-400',
  fighting: 'bg-red-700',
  poison: 'bg-purple-600',
  ground: 'bg-yellow-600',
  flying: 'bg-blue-400',
  bug: 'bg-green-400',
  rock: 'bg-yellow-800',
  ghost: 'bg-purple-800',
  steel: 'bg-gray-500',
};