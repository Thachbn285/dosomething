import Button from '../common/Button';

export default function FeaturedVenuesSection() {
  const venues = [
    {
      name: 'Premier Basketball Court',
      sport: '🏀',
      rating: 4.8,
      price: '$50/hr',
    },
    {
      name: 'Olympic Tennis Complex',
      sport: '🎾',
      rating: 4.9,
      price: '$65/hr',
    },
    {
      name: 'Badminton Hall',
      sport: '🏸',
      rating: 4.6,
      price: '$40/hr',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Venues
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{venue.sport}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {venue.name}
              </h3>
              <div className="flex justify-between items-center mb-6">
                <span className="text-yellow-500 font-bold">
                  ⭐ {venue.rating}
                </span>
                <span className="text-2xl font-bold text-primary">
                  {venue.price}
                </span>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Venues
          </Button>
        </div>
      </div>
    </section>
  );
}
