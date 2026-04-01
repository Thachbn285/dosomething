import Link from 'next/link';

export default function CategoriesSection() {
  const categories = [
    {
      name: 'Fiction',
      icon: '📖',
      color: 'from-blue-500 to-blue-600',
      count: 1250,
    },
    {
      name: 'Non-Fiction',
      icon: '📚',
      color: 'from-purple-500 to-purple-600',
      count: 890,
    },
    {
      name: 'Mystery',
      icon: '🔍',
      color: 'from-gray-700 to-gray-800',
      count: 567,
    },
    {
      name: 'Romance',
      icon: '💕',
      color: 'from-pink-500 to-pink-600',
      count: 423,
    },
    {
      name: 'Science Fiction',
      icon: '🚀',
      color: 'from-indigo-500 to-indigo-600',
      count: 678,
    },
    {
      name: 'Biography',
      icon: '👤',
      color: 'from-amber-500 to-amber-600',
      count: 345,
    },
    {
      name: 'Self-Help',
      icon: '🌟',
      color: 'from-green-500 to-green-600',
      count: 512,
    },
    {
      name: 'History',
      icon: '📜',
      color: 'from-red-500 to-red-600',
      count: 289,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Explore by Category
          </h2>
          <p className="text-gray-600 text-lg">
            Find your next favorite read by browsing our popular categories
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/books?category=${category.name.toLowerCase()}`}
            >
              <div
                className={`group bg-gradient-to-br ${category.color} rounded-xl p-6 text-white cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-lg font-bold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} books</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-semibold">Explore →</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
