export default function PokemonDetailLoading() {
  return (
    <div className="content-grid py-8">
      {/* Navigation skeleton */}
      <div className="mb-8">
        <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column - Pokemon Card Skeleton */}
        <div className="flex justify-center">
          <div className="max-w-sm w-full">
            <div className="bg-white rounded-lg border-4 border-gray-200 p-6 shadow-lg">
              {/* Pokemon Image Skeleton */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse"></div>
              </div>

              {/* Pokemon Number Skeleton */}
              <div className="text-center mb-2">
                <div className="w-12 h-4 bg-gray-200 rounded mx-auto animate-pulse"></div>
              </div>

              {/* Pokemon Name Skeleton */}
              <div className="text-center mb-4">
                <div className="w-24 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
              </div>

              {/* Types Skeleton */}
              <div className="flex justify-center gap-2 mb-4">
                <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
              </div>

              {/* Stats Skeleton */}
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between">
                    <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Info Skeleton */}
        <div className="space-y-8">
          {/* Title Skeleton */}
          <div>
            <div className="w-48 h-10 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="w-full h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
            <div className="w-3/4 h-4 bg-gray-200 rounded mb-4 animate-pulse"></div>
          </div>

          {/* Stats Section Skeleton */}
          <div>
            <div className="w-32 h-8 bg-gray-200 rounded mb-4 animate-pulse"></div>
            <div className="space-y-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex-1 h-2 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loading Message */}
      <div className="text-center mt-8">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full bg-white"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-600 border-2 border-white"></div>
        </div>
        <p className="text-lg text-gray-600">Loading Pokémon details...</p>
      </div>
    </div>
  );
}