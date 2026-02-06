const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Main Story Skeleton */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-40 bg-linear-to-r from-gray-200 to-gray-300 rounded-full animate-pulse"></div>
            <div className="flex-1 h-1 bg-linear-to-r from-gray-200 to-transparent rounded-full"></div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="h-96 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
            <div className="p-6 space-y-4">
              <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Latest News Skeleton */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-100">
            <div className="flex items-center gap-3">
              <div className="h-11 w-48 bg-linear-to-r from-gray-200 to-gray-300 rounded-xl animate-pulse"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md"
              >
                <div className="h-48 bg-linear-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
                <div className="p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Loading indicator */}
          <div className="flex flex-col items-center space-y-4 py-12">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-linear-to-r from-orange-500 to-red-500 rounded-full animate-bounce shadow-lg"></div>
              <div
                className="w-3 h-3 bg-linear-to-r from-orange-500 to-red-500 rounded-full animate-bounce shadow-lg"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-3 h-3 bg-linear-to-r from-orange-500 to-red-500 rounded-full animate-bounce shadow-lg"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 font-medium">
              Xəbərlər yüklənir...
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
