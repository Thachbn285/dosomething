'use client';

import { useState } from 'react';
import BookCard from './BookCard';
import type { FilterState } from './BookFilters';

export default function BookList() {
  const [filter] = useState<FilterState>({
    search: '',
    category: '',
    rating: 0,
    priceRange: [0, 100],
    sortBy: 'popular',
  });

  // Sample books data
  const allBooks = [
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
    {
      id: '5',
      title: 'Dune',
      author: 'Frank Herbert',
      genre: 'Science Fiction',
      rating: 4.7,
      reviews: 1956,
      price: 16.99,
      description: 'An epic science fiction novel of politics and ecology',
    },
    {
      id: '6',
      title: 'The Seven Husbands of Evelyn Hugo',
      author: 'Taylor Jenkins Reid',
      genre: 'Fiction',
      rating: 4.8,
      reviews: 4521,
      price: 14.99,
      description: 'A captivating tale of old Hollywood and hidden secrets',
    },
    {
      id: '7',
      title: 'Thinking, Fast and Slow',
      author: 'Daniel Kahneman',
      genre: 'Non-Fiction',
      rating: 4.5,
      reviews: 1834,
      price: 17.99,
      description: 'Explore the power and biases of our minds',
    },
    {
      id: '8',
      title: 'The Silent Patient',
      author: 'Alex Michaelides',
      genre: 'Mystery',
      rating: 4.6,
      reviews: 2476,
      price: 13.99,
      description: 'A shocking thriller about a woman who stops talking',
    },
  ];

  // Filter books based on current filters
  const filteredBooks = allBooks.filter((book) => {
    if (
      filter.search &&
      !book.title.toLowerCase().includes(filter.search.toLowerCase()) &&
      !book.author.toLowerCase().includes(filter.search.toLowerCase())
    ) {
      return false;
    }
    if (
      filter.category &&
      book.genre.toLowerCase() !== filter.category.toLowerCase()
    ) {
      return false;
    }
    if (book.rating < filter.rating) {
      return false;
    }
    if (
      book.price < filter.priceRange[0] ||
      book.price > filter.priceRange[1]
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => <BookCard key={book.id} {...book} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-600 text-lg">
            No books found matching your filters
          </p>
        </div>
      )}
    </div>
  );
}
