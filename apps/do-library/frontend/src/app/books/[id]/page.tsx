'use client';

import { useState } from 'react';
import ReviewCard from '@/components/book/ReviewCard';
import Link from 'next/link';

export default function BookDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Sample book data - in a real app, this would come from an API
  const book = {
    id: params.id,
    title: 'Atomic Habits',
    author: 'James Clear',
    genre: 'Self-Development',
    rating: 4.8,
    reviews: 2450,
    price: 12.99,
    image: '📖',
    description:
      'No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master tiny behaviors that lead to remarkable results.',
    publisher: 'Avery',
    publicationDate: '2018-10-16',
    pages: 320,
    language: 'English',
    isbn: '978-0735211292',
    format: 'Hardcover',
  };

  const reviews = [
    {
      reviewer: 'Sarah Johnson',
      avatar: '👩‍💼',
      rating: 5,
      title: 'Life-changing book!',
      text: 'This book has genuinely transformed my habits and routines. The science-backed approach and practical examples make it easy to implement. Highly recommended!',
      date: '2 weeks ago',
      helpful: 234,
      verified: true,
    },
    {
      reviewer: 'Michael Chen',
      avatar: '👨‍💻',
      rating: 4,
      title: 'Great insights, slightly repetitive',
      text: 'Clear provides excellent insights about habit formation. Some concepts could have been more concise, but overall a powerful and motivating read.',
      date: '1 month ago',
      helpful: 156,
      verified: true,
    },
    {
      reviewer: 'Emma Williams',
      avatar: '👩‍🏫',
      rating: 5,
      title: 'Perfect for everyone',
      text: "Whether you're looking to build better habits or break bad ones, this book has something for you. The examples are relatable and the advice is actionable.",
      date: '2 months ago',
      helpful: 312,
      verified: true,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <div className="flex gap-2 mb-8 text-sm text-gray-600">
          <Link href="/" className="hover:text-indigo-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/books" className="hover:text-indigo-600">
            Books
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-semibold">{book.title}</span>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Left Column - Book Cover & Info */}
          <div className="lg:col-span-1">
            {/* Cover */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl p-8 flex items-center justify-center mb-6 h-96">
              <div className="text-9xl">{book.image}</div>
            </div>

            {/* Price & Action */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div className="text-3xl font-bold text-indigo-600">
                ${book.price}
              </div>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all">
                Add to Cart
              </button>
              <button className="w-full px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
                Add to Wishlist 💕
              </button>
            </div>

            {/* Book Info */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 mt-6 space-y-4">
              <div>
                <p className="text-sm text-gray-600">Publisher</p>
                <p className="font-semibold text-gray-900">{book.publisher}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Publication Date</p>
                <p className="font-semibold text-gray-900">
                  {book.publicationDate}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Pages</p>
                <p className="font-semibold text-gray-900">{book.pages}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Language</p>
                <p className="font-semibold text-gray-900">{book.language}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Format</p>
                <p className="font-semibold text-gray-900">{book.format}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">ISBN</p>
                <p className="font-semibold text-gray-900 font-mono text-sm">
                  {book.isbn}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Description & Details */}
          <div className="lg:col-span-2">
            {/* Title & Author */}
            <div className="mb-6">
              <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-3">
                {book.genre}
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-xl text-gray-600 mb-4">by {book.author}</p>

              {/* Rating Summary */}
              <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={i < Math.floor(book.rating) ? '⭐' : '☆'}
                      ></span>
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    {book.rating}
                  </span>
                </div>
                <span className="text-gray-600">
                  Based on {book.reviews.toLocaleString()} reviews
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Book
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {book.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                Why Readers Love This Book
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-gray-700">
                    Practical, science-backed strategies for habit formation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">📈</span>
                  <span className="text-gray-700">
                    Real-world examples and case studies
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700">
                    Actionable advice you can implement immediately
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-2xl">💡</span>
                  <span className="text-gray-700">
                    Comprehensive and well-researched content
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="border-t-2 border-gray-200 pt-12">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Reviews from Our Community
              </h2>
              <p className="text-gray-600">
                See what readers are saying about this book
              </p>
            </div>
            {!showReviewForm && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Write a Review
              </button>
            )}
          </div>

          {/* Review Form */}
          {showReviewForm && (
            <div className="bg-gray-50 rounded-lg p-8 mb-10 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Share Your Review
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Rating
                  </label>
                  <div className="flex gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className="text-4xl hover:scale-110 transition-transform"
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Review Title
                  </label>
                  <input
                    id="title"
                    type="text"
                    placeholder="Sum up your thoughts in a few words..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="review"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Review
                  </label>
                  <textarea
                    id="review"
                    placeholder="Share your thoughts about this book..."
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Post Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <ReviewCard key={idx} {...review} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors">
              Load More Reviews
            </button>
          </div>
        </div>

        {/* Related Books Section */}
        <div className="border-t-2 border-gray-200 mt-16 pt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Readers Also Enjoyed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="bg-gradient-to-br from-indigo-100 to-purple-100 h-48 flex items-center justify-center text-6xl">
                  📖
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 line-clamp-2">
                    Related Book Title
                  </h3>
                  <p className="text-sm text-gray-600">Related Author</p>
                  <div className="mt-3 flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span>
                    <span className="font-semibold text-gray-900">4.7</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
