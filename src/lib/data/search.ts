import { Pokemon } from '../types/pokemon';

// Cache per i risultati di ricerca
const searchCache = new Map<string, Pokemon[]>();

// Lista di nomi Pokémon comuni per autocomplete
const commonPokemonNames = [
  'pikachu', 'charizard', 'blastoise', 'venusaur', 'alakazam', 'machamp',
  'gengar', 'dragonite', 'mewtwo', 'mew', 'typhlosion', 'feraligatr',
  'meganium', 'lugia', 'ho-oh', 'celebi', 'blaziken', 'swampert',
  'sceptile', 'rayquaza', 'kyogre', 'groudon', 'dialga', 'palkia',
  'giratina', 'arceus', 'lucario', 'garchomp', 'rotom', 'darkrai',
  'reshiram', 'zekrom', 'kyurem', 'keldeo', 'genesect', 'greninja',
  'talonflame', 'sylveon', 'xerneas', 'yveltal', 'zygarde', 'decidueye',
  'incineroar', 'primarina', 'solgaleo', 'lunala', 'necrozma', 'zeraora'
];

// Funzione per cercare Pokémon per nome (include)
export async function searchPokemonByName(query: string): Promise<Pokemon[]> {
  if (query.length < 2) return [];

  const cacheKey = query.toLowerCase();
  
  // Controlla cache prima
  if (searchCache.has(cacheKey)) {
    return searchCache.get(cacheKey)!;
  }

  try {
    // Prima cerca nei nomi comuni che includono la query
    const matchingNames = commonPokemonNames.filter(name => 
      name.toLowerCase().includes(cacheKey)
    );

    // Aggiungi anche ricerca per ID se la query è numerica
    if (!isNaN(Number(query))) {
      matchingNames.push(query);
    }

    // Limita a 12 risultati per performance
    const searchTargets = matchingNames.slice(0, 12);

    // Fetch dettagli per ogni Pokémon trovato
    const pokemonPromises = searchTargets.map(async (target) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${target}`);
        if (!response.ok) return null;
        return await response.json();
      } catch {
        return null;
      }
    });

    const fetchResults = await Promise.all(pokemonPromises);
    const validResults = fetchResults.filter((pokemon): pokemon is Pokemon => pokemon !== null);

    // Salva in cache per 5 minuti
    searchCache.set(cacheKey, validResults);
    setTimeout(() => searchCache.delete(cacheKey), 5 * 60 * 1000);

    return validResults;
  } catch (error) {
    console.error('Error searching Pokemon:', error);
    return [];
  }
}

// Funzione per ottenere Pokémon popolari
export async function getPopularPokemon(): Promise<Pokemon[]> {
  const popularIds = [25, 6, 9, 3, 150, 144, 145, 146, 249, 250]; // IDs di Pokémon famosi
  
  try {
    const promises = popularIds.map(async (id) => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) return null;
        return await response.json();
      } catch {
        return null;
      }
    });

    const results = await Promise.all(promises);
    return results.filter((pokemon): pokemon is Pokemon => pokemon !== null);
  } catch (error) {
    console.error('Error fetching popular Pokemon:', error);
    return [];
  }
}

// Funzione helper per pulire cache (se necessario)
export function clearSearchCache() {
  searchCache.clear();
}