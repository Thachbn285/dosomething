interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export default function Card({ className = '', children }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
