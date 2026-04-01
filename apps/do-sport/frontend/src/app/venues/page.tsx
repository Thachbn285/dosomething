'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import VenueFilters from '@/components/venue/VenueFilters';
import VenueList from '@/components/venue/VenueList';

const SAMPLE_VENUES = [
  {
    id: '1',
    name: 'Premier Basketball Court',
    image: '🏀',
    location: 'Downtown Sports Center',
    sport: 'Basketball',
    rating: 4.8,
    reviews: 156,
    price: 50,
    capacity: 20,
    available: true,
  },
  {
    id: '2',
    name: 'Olympic Tennis Complex',
    image: '🎾',
    location: 'Westside Tennis Club',
    sport: 'Tennis',
    rating: 4.9,
    reviews: 203,
    price: 65,
    capacity: 4,
    available: true,
  },
  {
    id: '3',
    name: 'Badminton Hall',
    image: '🏸',
    location: 'Central Community Hub',
    sport: 'Badminton',
    rating: 4.6,
    reviews: 98,
    price: 40,
    capacity: 8,
    available: true,
  },
  {
    id: '4',
    name: 'Football Stadium',
    image: '⚽',
    location: 'North Sports Complex',
    sport: 'Football',
    rating: 4.7,
    reviews: 245,
    price: 150,
    capacity: 75,
    available: false,
  },
  {
    id: '5',
    name: 'Volleyball Arena',
    image: '🏐',
    location: 'East Recreation Center',
    sport: 'Volleyball',
    rating: 4.5,
    reviews: 122,
    price: 55,
    capacity: 12,
    available: true,
  },
  {
    id: '6',
    name: 'Swimming Pool',
    image: '🏊',
    location: 'Riverside Aquatic Center',
    sport: 'Swimming',
    rating: 4.8,
    reviews: 189,
    price: 30,
    capacity: 50,
    available: true,
  },
];

export default function VenuesPage() {
  const [filteredVenues, setFilteredVenues] = useState(SAMPLE_VENUES);

  const handleFilterChange = (filters: any) => {
    let filtered = SAMPLE_VENUES;

    if (filters.sport !== 'all') {
      filtered = filtered.filter(
        (v) => v.sport.toLowerCase() === filters.sport.toLowerCase()
      );
    }

    if (filters.availability === 'available') {
      filtered = filtered.filter((v) => v.available);
    }

    setFilteredVenues(filtered);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Browse Venues
            </h1>
            <p className="text-gray-600">
              Discover and book premium sports venues near you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <VenueFilters onFilterChange={handleFilterChange} />
            </div>

            {/* Venues Grid */}
            <div className="lg:col-span-3">
              <VenueList venues={filteredVenues} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
