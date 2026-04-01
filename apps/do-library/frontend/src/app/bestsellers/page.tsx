import Link from 'next/link';

export default function BestsellersPage() {
  const bestsellers = [
    {
      id: '1',
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Development',
      rating: 4.8,
      reviews: 2450,
      price: 12.99,
      sales: 5234,
    },
    {
      id: '2',
      title: 'Deep Work',
      author: 'Cal Newport',
      genre: 'Business',
      rating: 4.7,
      reviews: 1823,
      price: 14.99,
      sales: 4156,
    },
    {
      id: '3',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      genre: 'Fiction',
      rating: 4.6,
      reviews: 3120,
      price: 13.99,
      sales: 3987,
    },
    {
      id: '4',
      title: 'Educated',
      author: 'Tara Westover',
      genre: 'Memoir',
      rating: 4.9,
      reviews: 2890,
      price: 15.99,
      sales: 3845,
    },
    {
      id: '5',
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      rating: 4.7,
      reviews: 1956,
      price: 16.99,
      sales: 3612,
    },
    {
      id: '6',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      genre: 'Fiction',
      rating: 4.8,
      reviews: 4521,
      price: 14.99,
      sales: 3489,
    },
    {
      id: '7',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      genre: 'Non-Fiction',
      rating: 4.5,
      reviews: 1834,
      price: 17.99,
      sales: 3234,
    },
    {
      id: '8',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Mystery',
      rating: 4.6,
      reviews: 2476,
      price: 13.99,
      sales: 3021,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-4">Bestselling Books</h1>
          <p className="text-xl text-indigo-100">
            Discover the most popular and highly-rated books in our collection
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
            <p className="text-gray-600">Books Sold This Month</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">4.7★</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">100K+</div>
            <p className="text-gray-600">Happy Readers</p>
          </div>
        </div>

        {/* Books List with Rankings */}
        <div className="space-y-6">
          {bestsellers.map((book, idx) => (
            <div
              key={book.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg border border-gray-200 overflow-hidden transition-all flex items-start"
            >
              {/* Ranking Badge */}
              <div className="flex-shrink-0 w-20 bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center text-4xl font-bold">
                #{idx + 1}
              </div>

              {/* Book Cover Area */}
              <div className="flex-shrink-0 w-32 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-5xl">
                📖
              </div>

              {/* Book Info */}
              <div className="flex-grow px-8 py-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-4">by {book.author}</p>

                {/* Rating and Sales */}
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1 text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={i < Math.floor(book.rating) ? '⭐' : '☆'}
                        ></span>
                      ))}
                    </div>
                    <span className="font-semibold text-gray-900">
                      {book.rating}
                    </span>
                    <span className="text-gray-600">({book.reviews})</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    📈 {book.sales.toLocaleString()} copies sold
                  </div>
                </div>

                {/* Tags */}
                <div className="flex items-center gap-3">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                    {book.genre}
                  </span>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-semibold">
                    Bestseller
                  </span>
                </div>
              </div>

              {/* Price and Action */}
              <div className="flex-shrink-0 flex flex-col items-end justify-center px-8 py-6">
                <div className="text-3xl font-bold text-indigo-600 mb-4">
                  ${book.price}
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all mb-3">
                  Buy Now
                </button>
                <button className="px-6 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl text-white p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Didn&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-lg text-indigo-100 mb-8">
            Browse our full collection and discover thousands of books across
            all categories
          </p>
          <Link
            href="/books"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:shadow-lg transition-all"
          >
            Explore All Books →
          </Link>
        </div>
      </div>
    </div>
  );
}
