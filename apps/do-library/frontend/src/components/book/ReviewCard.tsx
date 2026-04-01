'use client';

type Props = {
  reviewer: string;
  avatar?: string;
  rating: number;
  title: string;
  text: string;
  date?: string;
  helpful?: number;
  verified?: boolean;
};

export default function ReviewCard({
  reviewer,
  avatar = '👤',
  rating,
  title,
  text,
  date,
  helpful = 0,
  verified = false,
}: Props) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl">{avatar}</div>
          <div>
            <p className="font-semibold text-gray-900">{reviewer}</p>
            {verified && (
              <span className="text-xs text-green-600 font-semibold">
                ✓ Verified Purchase
              </span>
            )}
            {date && <p className="text-xs text-gray-500">{date}</p>}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
          >
            ⭐
          </span>
        ))}
      </div>

      {/* Review Title */}
      <h4 className="font-bold text-gray-900 mb-2">{title}</h4>

      {/* Review Text */}
      <p className="text-gray-700 line-clamp-4 mb-4">{text}</p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <button className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
          👍 Helpful ({helpful})
        </button>
        <button className="text-sm text-gray-600 hover:text-red-600 transition-colors">
          Report
        </button>
      </div>
    </div>
  );
}
