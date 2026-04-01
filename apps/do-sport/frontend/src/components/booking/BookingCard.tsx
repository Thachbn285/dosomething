import Card from '../common/Card';
import Badge from '../common/Badge';
import Button from '../common/Button';

interface BookingCardProps {
  id: string;
  venueName: string;
  date: string;
  time: string;
  endTime: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  sport: string;
  price: number;
  guests?: number;
}

export default function BookingCard({
  id: _id,
  venueName,
  date,
  time,
  endTime,
  status,
  sport,
  price,
  guests,
}: BookingCardProps) {
  const statusColors = {
    upcoming: 'success',
    completed: 'info',
    cancelled: 'error',
  } as const;

  return (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{venueName}</h3>
          <p className="text-sm text-gray-600 mt-1">📅 {date}</p>
        </div>
        <Badge variant={statusColors[status]}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-gray-500 uppercase">Time</p>
          <p className="font-bold text-gray-800">
            {time} - {endTime}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 uppercase">Sport</p>
          <p className="font-bold text-gray-800">{sport}</p>
        </div>
      </div>

      {guests && (
        <div className="mb-4 pb-4 border-b">
          <p className="text-xs text-gray-500 uppercase">Participants</p>
          <p className="font-bold text-gray-800">{guests} people</p>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <span className="text-2xl font-bold text-primary">${price}</span>
        <span className="text-sm text-gray-600">Total cost</span>
      </div>

      <div className="flex gap-2">
        {status === 'upcoming' && (
          <>
            <Button variant="outline" size="sm" className="flex-1">
              Modify
            </Button>
            <Button variant="secondary" size="sm" className="flex-1">
              Cancel
            </Button>
          </>
        )}
        {status === 'completed' && (
          <Button variant="outline" size="sm" className="w-full">
            Leave Review
          </Button>
        )}
      </div>
    </Card>
  );
}
