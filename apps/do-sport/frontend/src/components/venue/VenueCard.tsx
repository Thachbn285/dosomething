import Card from '../common/Card';
import Badge from '../common/Badge';
import Rating from '../common/Rating';
import Button from '../common/Button';
import Link from 'next/link';

interface VenueCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  sport: string;
  rating: number;
  reviews: number;
  price: number;
  capacity: number;
  available: boolean;
}

export default function VenueCard({
  id,
  name,
  image,
  location,
  sport,
  rating,
  reviews,
  price,
  capacity,
  available,
}: VenueCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="relative h-48 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
          {image}
        </div>
        <Badge
          variant={available ? 'success' : 'error'}
          className="absolute top-3 right-3"
        >
          {available ? 'Available' : 'Booked'}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-gray-600">📍 {location}</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary">{sport}</Badge>
          <Rating score={rating} />
        </div>

        <p className="text-sm text-gray-600 mb-3">
          {reviews} reviews • Capacity: {capacity}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-2xl font-bold text-primary">${price}</span>
            <span className="text-gray-500">/hour</span>
          </div>
        </div>

        <Link href={`/venues/${id}`} className="block">
          <Button size="md" className="w-full">
            View details
          </Button>
        </Link>
      </div>
    </Card>
  );
}
