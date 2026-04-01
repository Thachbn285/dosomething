'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import BookFilters, {
  type FilterState,
} from '../../components/book/BookFilters';
import BookList from '../../components/book/BookList';

function BooksContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: initialCategory,
    rating: 0,
    priceRange: [0, 100],
    sortBy: 'popular',
  });

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setFilters((prev) => ({ ...prev, category }));
    }
  }, [searchParams]);

  return (
    <div className="bg-gray-50 min-h-screen pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Explore Our Library
          </h1>
          <p className="text-gray-600">
            Discover thousands of books in our collection
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <BookFilters onFilterChange={setFilters} />
          </div>

          {/* Books Grid */}
          <div className="lg:col-span-3">
            <BookList filter={filters} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BooksPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BooksContent />
    </Suspense>
  );
}
