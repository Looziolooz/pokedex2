export default function PokedexLoading() {
  return (
    <div className="content-grid py-16 text-center">
      <div className="flex flex-col items-center gap-6">
        {/* Pokeball Loading Animation */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-200 to-purple-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-600 border-2 border-white"></div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Searching Pokédx...
          </h2>
          <p className="text-gray-600">
            Preparing your Pokémon database 📖
          </p>
        </div>
      </div>
    </div>
  );
}