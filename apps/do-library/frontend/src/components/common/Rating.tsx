type RatingProps = {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
  className?: string;
};

export default function Rating({
  value,
  max = 5,
  size = 'md',
  showLabel = false,
  className = '',
}: RatingProps) {
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`flex gap-0.5 ${sizeMap[size]}`}>
        {[...Array(max)].map((_, i) => (
          <span
            key={i}
            className={
              i < Math.floor(value) ? 'text-yellow-400' : 'text-gray-300'
            }
          >
            ★
          </span>
        ))}
      </div>
      {showLabel && (
        <span className={`font-semibold text-gray-700 ${sizeMap[size]}`}>
          {value}
        </span>
      )}
    </div>
  );
}
