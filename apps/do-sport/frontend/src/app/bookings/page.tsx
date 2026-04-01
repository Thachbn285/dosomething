'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BookingCard from '@/components/booking/BookingCard';
import BookingForm from '@/components/booking/BookingForm';

const SAMPLE_BOOKINGS = [
  {
    id: 'b1',
    venueName: 'Premier Basketball Court',
    date: 'Apr 05, 2026',
    time: '19:00',
    endTime: '21:00',
    status: 'upcoming' as const,
    sport: 'Basketball',
    price: 105,
    guests: 10,
  },
  {
    id: 'b2',
    venueName: 'Olympic Tennis Complex',
    date: 'Mar 23, 2026',
    time: '08:00',
    endTime: '09:00',
    status: 'completed' as const,
    sport: 'Tennis',
    price: 70,
    guests: 2,
  },
  {
    id: 'b3',
    venueName: 'Football Stadium',
    date: 'Mar 10, 2026',
    time: '18:00',
    endTime: '20:00',
    status: 'cancelled' as const,
    sport: 'Football',
    price: 155,
    guests: 20,
  },
];

export default function BookingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              My Bookings
            </h1>
            <p className="text-gray-600">
              View upcoming bookings and manage your schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <section className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SAMPLE_BOOKINGS.map((b) => (
                  <BookingCard key={b.id} {...b} />
                ))}
              </div>
            </section>

            <aside className="lg:col-span-1">
              <BookingForm
                onSubmit={() => {
                  // placeholder
                }}
              />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

