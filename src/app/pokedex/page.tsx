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
          Start typing to see suggestions and results!
        </p>
      </div>
      <div className="mb-8">
        <SearchForm 
          placeholder="Search Pokémon by name or ID..." 
          redirectTo="pokedex"
          showResultsBelow={true}
        />
      </div>
    </div>
  );
}
      