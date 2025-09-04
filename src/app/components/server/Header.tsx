import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/pokedex", label: "Pokédex" },
    { href: "/types", label: "Types" },
    { href: "/favourites", label: "Favourites" },
  ];

  return (
    <header className="content-grid bg-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            width={40}
            height={40}
            alt="Pokédex Logo"
          />
          <span className="text-2xl font-bold text-purple-600">Pokédx</span>
        </Link>
        
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - you can implement mobile menu later */}
        <button className="md:hidden p-2">
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className="w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-600 mb-1"></span>
            <span className="w-6 h-0.5 bg-gray-600"></span>
          </div>
        </button>
      </nav>
    </header>
  );
}