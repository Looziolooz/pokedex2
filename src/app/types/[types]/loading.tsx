export default function TypeDetailLoading() {
  return (
    <div className="content-grid py-16">
      {/* Navigation skeleton */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
        <div className="w-24 h-16 bg-gray-200 rounded-lg animate-pulse"></div>
      </div>
      
      {/* Header skeleton */}
      <div className="text-center mb-12">
        <div className="w-80 h-12 bg-gray-200 rounded mx-auto mb-4 animate-pulse"></div>
        <div className="w-48 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
      </div>
      
      {/* Pokemon Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 12 }, (_, i) => (
          <div key={i} className="bg-white rounded-lg border-4 border-gray-200 p-6 shadow-lg">
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
              <div className="w-20 h-6 bg-gray-200 rounded mx-auto animate-pulse"></div>
            </div>

            {/* Types Skeleton */}
            <div className="flex justify-center gap-2 mb-4">
              <div className="w-16 h-6 bg-gray-200 rounded-full animate-pulse"></div>
            </div>

            {/* Stats Skeleton */}
            <div className="space-y-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="flex justify-between">
                  <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="w-8 h-4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Loading Message */}
      <div className="text-center mt-12">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 rounded-full border-4 border-orange-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-orange-200 to-red-200"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-orange-600 border-2 border-white"></div>
        </div>
        <p className="text-lg text-gray-600">Loading type-specific Pokémon...</p>
      </div>
    </div>
  );
}