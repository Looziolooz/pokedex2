import HeroSection from "../app/components/server/HeroSection";
import SearchForm from "../app/components/ui/SearchForm";
import FeaturedList from "../app/components/server/FeaturedList";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section with Random Button */}
      <HeroSection />

      {/* Search Section */}
      <section className="content-grid py-8">
        <SearchForm redirectTo="pokedex" />
      </section>

      {/* Featured Pokémon Section */}
      <section className="content-grid py-8">
        <Suspense fallback={
          <div className="text-center">
            <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading featured Pokémon...</p>
          </div>
        }>
          <FeaturedList />
        </Suspense>
      </section>
    </div>
  );
}