import TypeBadge from "../components/ui/TypeBadge";
import { POKEMON_TYPES } from "@/lib/data/constants";


export const metadata = {
  title: 'Pokémon Types - Pokédx',
  description: 'Browse Pokémon by their types. Discover Fire, Water, Grass, Electric, and more types.',
};

export default function TypesPage() {
  return (
    <div className="content-grid py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-gradient">Pokémon Types</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore Pokémon organized by their elemental types. 
          Click on any type to discover all Pokémon of that category.
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {POKEMON_TYPES.map((type) => (
          <TypeBadge 
            key={type.name} 
            type={type.name} 
            size="md" 
            clickable={true} 
          />
        ))}
      </div>

      <div className="mt-12 text-center text-gray-600">
        <div className="bg-gray-50 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-sm mb-3">
            <strong>Did you know?</strong> Each type has unique strengths and weaknesses in battle.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs">
            <span className="px-2 py-1 bg-red-100 text-red-700 rounded">🔥 Fire beats Grass</span>
            <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded">💧 Water beats Fire</span>
            <span className="px-2 py-1 bg-green-100 text-green-700 rounded">🌱 Grass beats Water</span>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded">⚡ Electric beats Water</span>
          </div>
        </div>
      </div>
    </div>
  );
}