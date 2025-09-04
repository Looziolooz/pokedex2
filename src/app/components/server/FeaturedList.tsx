import PokemonCard from "../ui/PokemonCard";
import { fetchFeaturedPokemon } from "../../../lib/data/pokemon";

export default async function FeaturedList() {
  const pokemonList = await fetchFeaturedPokemon(4);

  if (pokemonList.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Unable to load featured Pokémon at the moment.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-8">Featured Pokémon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} showLink={true} />
        ))}
      </div>
    </div>
  );
}