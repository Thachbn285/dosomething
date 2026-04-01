'use client';

import { useMemo, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Button from '@/components/common/Button';
import Badge from '@/components/common/Badge';
import Rating from '@/components/common/Rating';
import ReviewCard from '@/components/venue/ReviewCard';

export default function VenueDetailsPage() {
  const params = useParams<{ id: string }>();
  const [isBooking, setIsBooking] = useState(false);

  const venue = useMemo(() => {
    const id = params?.id ?? '1';
    return {
      id,
      name: 'Premier Basketball Court',
      location: 'Downtown Sports Center, Main Street',
      rating: 4.8,
      reviews: 156,
      price: 50,
      capacity: 20,
      description:
        'State-of-the-art basketball court with professional equipment. Perfect for casual games, training sessions, or tournaments.',
      amenities: [
        'Air Conditioning',
        'Parking',
        'Locker Rooms',
        'Equipment Rental',
        'WiFi',
      ],
      hours: '6:00 AM - 11:00 PM',
      images: ['🏀', '🏀', '🏀'],
    };
  }, [params?.id]);

  const reviews = [
    {
      id: '1',
      author: 'John Smith',
      avatar: '🏀',
      rating: 5,
      date: '2 weeks ago',
      text: 'Excellent court! Great condition, friendly staff, and flexible booking times. Highly recommended!',
      helpful: 24,
    },
    {
      id: '2',
      author: 'Maria Garcia',
      avatar: '🎾',
      rating: 4,
      date: '1 month ago',
      text: 'Good facility overall. Could use some maintenance on the flooring. Staff is helpful.',
      helpful: 15,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {venue.images.map((img, i) => (
              <div
                key={i}
                className="h-72 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-6xl shadow-md"
              >
                {img}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Details */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4 gap-4">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                      {venue.name}
                    </h1>
                    <p className="text-gray-600 mb-4">📍 {venue.location}</p>
                  </div>
                  <Badge variant="success">Available</Badge>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Rating score={venue.rating} size="lg" />
                    <span className="text-gray-600">
                      ({venue.reviews} reviews)
                    </span>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-primary">
                      ${venue.price}
                    </p>
                    <p className="text-gray-600">per hour</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About</h2>
                <p className="text-gray-700 mb-6">{venue.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 font-semibold">Hours</p>
                    <p className="text-gray-800">{venue.hours}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 font-semibold">Capacity</p>
                    <p className="text-gray-800">
                      Up to {venue.capacity} people
                    </p>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Amenities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {venue.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Reviews
                </h2>
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  See All Reviews
                </Button>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-20">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Make a Booking
                </h3>

                {!isBooking ? (
                  <Button
                    className="w-full mb-4"
                    size="lg"
                    onClick={() => setIsBooking(true)}
                  >
                    Book Now
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Date
                      </label>
                      <input
                        type="date"
                        className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          From
                        </label>
                        <input
                          type="time"
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          To
                        </label>
                        <input
                          type="time"
                          className="w-full border-2 border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>
                    <Button className="w-full">Continue to Payment</Button>
                    <button
                      onClick={() => setIsBooking(false)}
                      className="w-full px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                  </div>
                )}

                <div className="border-t mt-6 pt-6">
                  <h4 className="font-semibold text-gray-800 mb-4">
                    Price Breakdown
                  </h4>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex justify-between">
                      <span>1 hour × ${venue.price}</span>
                      <span>${venue.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Service fee</span>
                      <span>$5</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${venue.price + 5}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

