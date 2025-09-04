import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="content-grid">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/Logo.png"
              width={32}
              height={32}
              alt="Pokédex Logo"
            />
            <span className="text-xl font-bold">Pokédx</span>
          </div>
          <p className="mb-6 text-gray-300">Explore the world of Pokémon</p>
          
          {/* Quick Links */}
          <div className="flex justify-center gap-8 mb-6">
            <Link href="/pokedex" className="text-gray-300 hover:text-white transition-colors">
              Pokédex
            </Link>
            <Link href="/types" className="text-gray-300 hover:text-white transition-colors">
              Types
            </Link>
            <Link href="/favourites" className="text-gray-300 hover:text-white transition-colors">
              Favourites
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Image
              src="/facebook.svg"
              width={24}
              height={24}
              alt="Facebook"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
            <Image
              src="/instagram.svg"
              width={24}
              height={24}
              alt="Instagram"
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            <p>© 2025 Pokédex. Built with Next.js and PokeAPI.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}