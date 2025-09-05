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

export const getTypeColor = (type: string): string => {
  const typeColors: { [key: string]: string } = {
    fire: '#FF6B6B',
    water: '#4ECDC4',
    electric: '#FFD93D',
    grass: '#6BCF7F',
    ice: '#74C0FC',
    fighting: '#FF8787',
    poison: '#DA77F2',
    ground: '#FECA57',
    flying: '#74C0FC',
    psychic: '#FDA7DF',
    bug: '#82ca9d',
    rock: '#FDCB6E',
    ghost: '#A29BFE',
    dragon: '#6C5CE7',
    dark: '#636e72',
    steel: '#ddd',
    fairy: '#FD79A8',
    normal: '#A8A8A8'
  };
  return typeColors[type] || '#A8A8A8';
};

// Funzione per ottenere colori border (versione scura)
export  const getTypeColorBorder = (type: string): string => {
  const typeColors: { [key: string]: string } = {
    fire: '#FF5722',
    water: '#2196F3',
    electric: '#FFC107',
    grass: '#4CAF50',
    ice: '#03A9F4',
    fighting: '#F44336',
    poison: '#9C27B0',
    ground: '#795548',
    flying: '#607D8B',
    psychic: '#E91E63',
    bug: '#8BC34A',
    rock: '#FF9800',
    ghost: '#673AB7',
    dragon: '#3F51B5',
    dark: '#424242',
    steel: '#9E9E9E',
    fairy: '#E91E63',
    normal: '#9E9E9E'
  };
  return typeColors[type] || '#9E9E9E';
};
