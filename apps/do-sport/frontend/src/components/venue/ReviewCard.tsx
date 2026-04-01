import Card from '../common/Card';
import Rating from '../common/Rating';
import Badge from '../common/Badge';

interface ReviewCardProps {
  author: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  helpful: number;
}

export default function ReviewCard({
  author,
  avatar,
  rating,
  date,
  text,
  helpful,
}: ReviewCardProps) {
  return (
    <Card className="p-6 border-l-4 border-primary">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white text-lg">
            {avatar}
          </div>
          <div>
            <p className="font-bold text-gray-800">{author}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <Rating score={rating} size="sm" />
      </div>

      {/* Review Text */}
      <p className="text-gray-700 mb-4">{text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t">
        <Badge variant="info">Verified Booking</Badge>
        <button className="text-sm text-gray-600 hover:text-primary transition">
          👍 Helpful ({helpful})
        </button>
      </div>
    </Card>
  );
}
