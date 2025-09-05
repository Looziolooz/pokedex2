export default function SearchSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={index}
          className="p-2 rounded-lg border border-gray-100"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse flex-shrink-0"></div>
            <div className="flex-1 min-w-0">
              <div className="w-20 h-4 bg-gray-200 rounded animate-pulse mb-1"></div>
              <div className="w-12 h-3 bg-gray-200 rounded animate-pulse mb-2"></div>
              <div className="flex gap-1">
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
                <div className="w-12 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}