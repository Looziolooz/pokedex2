import SearchForm from "../components/ui/SearchForm";

export const metadata = {
  title: 'Pokédx - Search Pokémon',
  description: 'Search and discover detailed information about any Pokémon. Enter a name or ID to get started.',
};

export default function PokedexPage() {
  return (
    <div className="content-grid py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">Pokédex</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Search and discover detailed information about any Pokémon. 
          Enter a name or ID to get started!
        </p>
      </div>

      <div className="mb-16">
        <SearchForm 
          placeholder="Search Pokémon by name or ID..." 
          redirectTo="pokedex" 
        />
      </div>

      <div className="text-center text-gray-500">
        <div className="mb-8">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-lg">Enter a Pokémon name or ID in the search bar above to begin exploring!</p>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto">
          <p className="font-semibold mb-3 text-gray-700">Try searching for:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">pikachu</span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">charizard</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">25</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">bulbasaur</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">150</span>
          </div>
        </div>
      </div>
    </div>
  );
}