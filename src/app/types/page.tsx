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
    </div>
  );
}