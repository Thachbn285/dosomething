'use client';

import { useState } from 'react';
import ReviewCard from '@/components/book/ReviewCard';

interface Review {
  reviewer: string;
  avatar: string;
  rating: number;
  title: string;
  text: string;
  date: string;
  helpful: number;
  verified: boolean;
}

interface BookReviewSectionProps {
  reviews: Review[];
}

export default function BookReviewSection({ reviews }: BookReviewSectionProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);

  return (
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
  );
}
