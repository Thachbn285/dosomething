'use client';

import { useState } from 'react';

type Props = {
  onFilterChange: (filters: FilterState) => void;
};

export type FilterState = {
  search: string;
  category: string;
  rating: number;
  priceRange: [number, number];
  sortBy: string;
};

export default function BookFilters({ onFilterChange }: Props) {
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    category: '',
    rating: 0,
    priceRange: [0, 100],
    sortBy: 'popular',
  });

  const handleChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const categories = [
    'Fiction',
    'Non-Fiction',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Biography',
    'Self-Help',
    'History',
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Filter Books</h3>

      {/* Search */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Search
        </label>
        <input
          type="text"
          placeholder="Book title or author..."
          value={filters.search}
          onChange={(e) => handleChange('search', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Category
        </label>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={filters.category === cat}
                onChange={(e) => handleChange('category', e.target.value)}
                className="w-4 h-4 text-indigo-600"
              />
              <span className="text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Minimum Rating
        </label>
        <div className="space-y-2">
          {[0, 3, 4, 4.5].map((r) => (
            <label key={r} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="rating"
                value={r}
                checked={filters.rating === r}
                onChange={(e) =>
                  handleChange('rating', parseFloat(e.target.value))
                }
                className="w-4 h-4 text-indigo-600"
              />
              <span className="text-gray-700">
                {r === 0 ? 'All' : `${r}+ Stars`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-3">
          Price Range
        </label>
        <div className="space-y-2">
          {[
            { label: 'All Prices', value: [0, 100] },
            { label: 'Under $10', value: [0, 10] },
            { label: '$10 - $20', value: [10, 20] },
            { label: 'Over $20', value: [20, 100] },
          ].map((option) => (
            <label
              key={option.label}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="price"
                checked={
                  JSON.stringify(filters.priceRange) ===
                  JSON.stringify(option.value)
                }
                onChange={() => handleChange('priceRange', option.value)}
                className="w-4 h-4 text-indigo-600"
              />
              <span className="text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sort */}
      <div className="mb-6">
        <label
          htmlFor="sort"
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          Sort By
        </label>
        <select
          id="sort"
          value={filters.sortBy}
          onChange={(e) => handleChange('sortBy', e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="rating-high">Highest Rated</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
        </select>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          const resetFilters: FilterState = {
            search: '',
            category: '',
            rating: 0,
            priceRange: [0, 100],
            sortBy: 'popular',
          };
          setFilters(resetFilters);
          onFilterChange(resetFilters);
        }}
        className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
      >
        Reset Filters
      </button>
    </div>
  );
}
