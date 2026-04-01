import VenueCard from './VenueCard';

interface VenueListProps {
  venues: any[];
  isLoading?: boolean;
}

export default function VenueList({
  venues,
  isLoading = false,
}: VenueListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-200 rounded-lg h-96 animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {venues.map((venue) => (
        <VenueCard key={venue.id} {...venue} />
      ))}
    </div>
  );
}
