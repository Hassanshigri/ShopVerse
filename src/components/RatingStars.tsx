import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  reviews?: number;
  size?: 'sm' | 'md' | 'lg';
}

export function RatingStars({ rating, reviews, size = 'md' }: RatingStarsProps) {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      <span className={`${textSizeClasses[size]} text-muted-foreground ml-1`}>
        {rating}
      </span>
      {reviews && (
        <span className={`${textSizeClasses[size]} text-muted-foreground`}>
          ({reviews})
        </span>
      )}
    </div>
  );
}