interface RatingProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function Rating({
  score,
  maxScore = 5,
  size = 'md',
}: RatingProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[...Array(maxScore)].map((_, i) => (
          <span key={i} className={`${sizeMap[size]} text-yellow-400`}>
            {i < Math.floor(score) ? '★' : i < score ? '⯨' : '☆'}
          </span>
        ))}
      </div>
      <span className="text-sm font-semibold text-gray-700">
        {score.toFixed(1)}
      </span>
    </div>
  );
}
