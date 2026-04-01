import BookCard from '@/components/book/BookCard';
import Link from 'next/link';

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Fiction',
      icon: '📖',
      description: 'Immerse yourself in compelling stories and worlds',
      bookCount: 1250,
      books: [
        {
          id: '1',
          title: 'The Midnight Library',
          author: 'Matt Haig',
          genre: 'Fiction',
          rating: 4.6,
          reviews: 3120,
          price: 13.99,
        },
        {
          id: '2',
          title: 'The Seven Husbands of Evelyn Hugo',
          author: 'Taylor Jenkins Reid',
          genre: 'Fiction',
          rating: 4.8,
          reviews: 4521,
          price: 14.99,
        },
      ],
    },
    {
      name: 'Non-Fiction',
      icon: '📚',
      description: 'Learn and grow with real stories and facts',
      bookCount: 890,
      books: [
        {
          id: '3',
          title: 'Atomic Habits',
          author: 'James Clear',
          genre: 'Non-Fiction',
          rating: 4.8,
          reviews: 2450,
          price: 12.99,
        },
        {
          id: '4',
          title: 'Deep Work',
          author: 'Cal Newport',
          genre: 'Non-Fiction',
          rating: 4.7,
          reviews: 1823,
          price: 14.99,
        },
      ],
    },
    {
      name: 'Mystery',
      icon: '🔍',
      description: 'Solve puzzles and uncover secrets',
      bookCount: 567,
      books: [
        {
          id: '8',
          title: 'The Silent Patient',
          author: 'Alex Michaelides',
          genre: 'Mystery',
          rating: 4.6,
          reviews: 2476,
          price: 13.99,
        },
      ],
    },
    {
      name: 'Romance',
      icon: '💕',
      description: 'Experience love stories that touch the heart',
      bookCount: 423,
      books: [],
    },
    {
      name: 'Science Fiction',
      icon: '🚀',
      description: 'Explore futuristic worlds and ideas',
      bookCount: 678,
      books: [
        {
          id: '5',
          title: 'Dune',
          author: 'Frank Herbert',
          genre: 'Science Fiction',
          rating: 4.7,
          reviews: 1956,
          price: 16.99,
        },
      ],
    },
    {
      name: 'Biography',
      icon: '👤',
      description: 'Learn from remarkable lives',
      bookCount: 345,
      books: [],
    },
    {
      name: 'Self-Help',
      icon: '🌟',
      description: 'Transform your life with practical wisdom',
      bookCount: 512,
      books: [],
    },
    {
      name: 'History',
      icon: '📜',
      description: 'Discover stories from the past',
      bookCount: 289,
      books: [],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Browse by Category</h1>
          <p className="text-xl text-indigo-100">
            Find your next favorite read by exploring our curated categories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-20">
          {categories.map((category) => (
            <section key={category.name}>
              {/* Category Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-5xl mb-3">{category.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 text-lg">
                    {category.description}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {category.bookCount} books available
                  </p>
                </div>
                <Link
                  href={`/books?category=${category.name.toLowerCase()}`}
                  className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors whitespace-nowrap"
                >
                  View All →
                </Link>
              </div>

              {/* Books Grid */}
              {category.books.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {category.books.map((book) => (
                    <BookCard key={book.id} {...book} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-12 text-center mb-12">
                  <p className="text-gray-600 text-lg">
                    More books in this category coming soon
                  </p>
                  <Link
                    href={`/books?category=${category.name.toLowerCase()}`}
                    className="inline-block mt-4 px-6 py-2 text-indigo-600 font-semibold hover:text-indigo-700"
                  >
                    Browse {category.name} →
                  </Link>
                </div>
              )}

              {/* Divider */}
              <div className="border-b-2 border-gray-200"></div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
