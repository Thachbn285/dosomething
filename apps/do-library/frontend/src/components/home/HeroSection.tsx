import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-gray-900 text-white overflow-hidden pt-20 pb-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-4 py-2 bg-indigo-500 bg-opacity-20 border border-indigo-400 rounded-full mb-4">
                <span className="text-indigo-200 text-sm font-semibold">
                  📚 Welcome to DoLibrary
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Discover, Read & Review Amazing Books
              </h1>
              <p className="text-xl text-indigo-100 leading-relaxed">
                Join thousands of book lovers in our vibrant community. Find
                your next favorite, share your thoughts, and connect with
                readers who share your passion.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/books"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-2xl transform hover:scale-105 transition-all text-center"
              >
                Start Exploring
              </Link>
              <Link
                href="/community"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-all text-center"
              >
                Join Community
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-indigo-400 border-opacity-20">
              <div>
                <div className="text-3xl font-bold">50K+</div>
                <p className="text-indigo-200 text-sm">Books Catalog</p>
              </div>
              <div>
                <div className="text-3xl font-bold">100K+</div>
                <p className="text-indigo-200 text-sm">Active Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold">500K+</div>
                <p className="text-indigo-200 text-sm">Reviews</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-96 h-96">
              {/* Book Stack Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="transform -rotate-12 absolute w-48 h-64 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl flex items-center justify-center text-6xl">
                  <span>📖</span>
                </div>
                <div className="transform rotate-6 absolute w-48 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl flex items-center justify-center text-6xl -ml-8">
                  <span>📚</span>
                </div>
                <div className="transform absolute w-48 h-64 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-2xl flex items-center justify-center text-6xl ml-8">
                  <span>📕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
