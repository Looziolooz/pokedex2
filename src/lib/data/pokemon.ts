import { Pokemon, PokemonType, PokemonSpecies } from '../types/pokemon';

const BASE_URL = 'https://pokeapi.co/api/v2';

export async function fetchPokemon(id: number | string): Promise<Pokemon | null> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${id}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon:', error);
    return null;
  }
}

export async function fetchPokemonSpecies(id: number | string): Promise<PokemonSpecies | null> {
  try {
    const response = await fetch(`${BASE_URL}/pokemon-species/${id}`);
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon species:', error);
    return null;
  }
}

export async function fetchPokemonByType(typeName: string): Promise<Pokemon[]> {
  try {
    const response = await fetch(`${BASE_URL}/type/${typeName}`);
    if (!response.ok) return [];
    
    const typeData: PokemonType = await response.json();
    
    // Get first 20 Pokemon of this type
    const pokemonUrls = typeData.pokemon
      .slice(0, 20)
      .map(p => p.pokemon.url);
    
    const pokemonPromises = pokemonUrls.map(async (url: string) => {
      const response = await fetch(url);
      if (!response.ok) return null;
      return response.json();
    });
    
    const results = await Promise.all(pokemonPromises);
    return results.filter((pokemon): pokemon is Pokemon => pokemon !== null);
  } catch (error) {
    console.error('Error fetching Pokemon by type:', error);
    return [];
  }
}

export async function fetchRandomPokemon(): Promise<Pokemon | null> {
  const randomId = Math.floor(Math.random() * 1010) + 1;
  return fetchPokemon(randomId);
}

export async function fetchFeaturedPokemon(count: number = 4): Promise<Pokemon[]> {
  const randomIds = Array.from({ length: count }, () => Math.floor(Math.random() * 1010) + 1);
  const promises = randomIds.map(id => fetchPokemon(id));
  const results = await Promise.all(promises);
  return results.filter((pokemon): pokemon is Pokemon => pokemon !== null);
}

export async function searchPokemon(query: string): Promise<Pokemon | null> {
  const searchTerm = query.toLowerCase().trim();
  return fetchPokemon(searchTerm);
}