type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
};

export default function Card({
  children,
  className = '',
  onClick,
  hoverable = false,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md border border-gray-200 p-6 ${
        hoverable
          ? 'cursor-pointer hover:shadow-lg hover:border-indigo-300 transform hover:-translate-y-1 transition-all'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
