'use client';

import BookCard from '../book/BookCard';
import Link from 'next/link';

export default function FeaturedBooksSection() {
  const featuredBooks = [
    {
      id: '1',
      title: 'Atomic Habits',
      author: 'James Clear',
      genre: 'Self-Development',
      rating: 4.8,
      reviews: 2450,
      price: 12.99,
      description: 'Transform your life through the power of tiny changes',
    },
    {
      id: '2',
      title: 'Deep Work',
      author: 'Cal Newport',
      genre: 'Business',
      rating: 4.7,
      reviews: 1823,
      price: 14.99,
      description: 'Rules for focused success in a distracted world',
    },
    {
      id: '3',
      title: 'The Midnight Library',
      author: 'Matt Haig',
      genre: 'Fiction',
      rating: 4.6,
      reviews: 3120,
      price: 13.99,
      description: 'A dazzling novel about all the choices that go into a life',
    },
    {
      id: '4',
      title: 'Educated',
      author: 'Tara Westover',
      genre: 'Memoir',
      rating: 4.9,
      reviews: 2890,
      price: 15.99,
      description:
        'A book about a young woman who leaves her survivalist family',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              Featured Books
            </h2>
            <p className="text-gray-600">
              Handpicked selections from our community favorites
            </p>
          </div>
          <Link
            href="/books"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 hover:shadow-lg transition-all"
          >
            View All →
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
      </div>
    </section>
  );
}
