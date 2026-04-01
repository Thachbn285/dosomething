'use client';

import Link from 'next/link';

type Props = {
  id?: string | number;
  title: string;
  author: string;
  cover?: string;
  rating?: number;
  reviews?: number;
  genre?: string;
  price?: number;
  description?: string;
};

export default function BookCard({
  id = '1',
  title,
  author,
  cover,
  rating = 4.5,
  reviews = 128,
  genre = 'Fiction',
  price,
  description,
}: Props) {
  return (
    <Link href={`/books/${id}`}>
      <div className="group cursor-pointer h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        {/* Card Container */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col">
          {/* Book Cover */}
          <div className="relative w-full h-64 bg-gradient-to-br from-indigo-100 to-purple-100 overflow-hidden">
            {cover ? (
              <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-6xl opacity-20">📖</div>
              </div>
            )}
            {/* Badge */}
            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {genre}
            </div>
          </div>

          {/* Content */}
          <div className="p-4 flex-1 flex flex-col">
            {/* Title and Author */}
            <div className="mb-3 flex-1">
              <h3 className="font-bold text-base text-gray-900 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{author}</p>
            </div>

            {/* Description */}
            {description && (
              <p className="text-xs text-gray-500 line-clamp-2 mb-3">
                {description}
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center justify-between mb-4 py-3 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < Math.floor(rating) ? '⭐' : '☆'}
                    ></span>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">
                  {rating}
                </span>
              </div>
              <span className="text-xs text-gray-500">({reviews})</span>
            </div>

            {/* Price and Action */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              {price && (
                <span className="text-lg font-bold text-indigo-600">
                  ${price}
                </span>
              )}
              <button className="ml-auto px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
