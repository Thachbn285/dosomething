'use client';

import { useState } from 'react';

interface VenueFiltersProps {
  onFilterChange: (filters: any) => void;
}

export default function VenueFilters({ onFilterChange }: VenueFiltersProps) {
  const [filters, setFilters] = useState({
    sport: 'all',
    priceRange: 'all',
    rating: 'all',
    availability: 'all',
  });

  const handleChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="font-bold text-lg mb-6">Filters</h3>

      {/* Sport Filter */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-3">
          Sport Type
        </label>
        <select
          value={filters.sport}
          onChange={(e) => handleChange('sport', e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
        >
          <option value="all">All Sports</option>
          <option value="basketball">Basketball</option>
          <option value="tennis">Tennis</option>
          <option value="badminton">Badminton</option>
          <option value="football">Football</option>
          <option value="volleyball">Volleyball</option>
          <option value="swimming">Swimming</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-3">
          Price Range
        </label>
        <select
          value={filters.priceRange}
          onChange={(e) => handleChange('priceRange', e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
        >
          <option value="all">All Prices</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200+">$200+</option>
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-3">
          Minimum Rating
        </label>
        <select
          value={filters.rating}
          onChange={(e) => handleChange('rating', e.target.value)}
          className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
        >
          <option value="all">All Ratings</option>
          <option value="4">4+ Stars</option>
          <option value="3.5">3.5+ Stars</option>
          <option value="3">3+ Stars</option>
        </select>
      </div>

      {/* Availability Filter */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-3">
          Availability
        </label>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="availability"
              value="all"
              checked={filters.availability === 'all'}
              onChange={(e) => handleChange('availability', e.target.value)}
              className="mr-2"
            />
            <span>All Venues</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="availability"
              value="available"
              checked={filters.availability === 'available'}
              onChange={(e) => handleChange('availability', e.target.value)}
              className="mr-2"
            />
            <span>Available Only</span>
          </label>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => {
          const newFilters = {
            sport: 'all',
            priceRange: 'all',
            rating: 'all',
            availability: 'all',
          };
          setFilters(newFilters);
          onFilterChange(newFilters);
        }}
        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition"
      >
        Reset Filters
      </button>
    </div>
  );
}
