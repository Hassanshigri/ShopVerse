import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { RatingStars } from '@/components/RatingStars';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Review {
  id: string;
  userName: string;
  rating: number;
  text: string;
  date: string;
}

interface ProductReviewsProps {
  productId: string;
}

// Mock reviews data
const mockReviews: Review[] = [
  {
    id: '1',
    userName: 'Sarah Johnson',
    rating: 5,
    text: 'Absolutely love this product! The quality exceeded my expectations and it arrived quickly.',
    date: '2024-01-15'
  },
  {
    id: '2',
    userName: 'Mike Chen',
    rating: 4,
    text: 'Great value for money. Works exactly as described and the build quality is solid.',
    date: '2024-01-10'
  },
  {
    id: '3',
    userName: 'Emily Davis',
    rating: 5,
    text: 'Perfect! This has become one of my favorite purchases. Highly recommended.',
    date: '2024-01-08'
  }
];

export function ProductReviews({ productId }: ProductReviewsProps) {
  const { user } = useUser();
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(mockReviews);
  const [newReview, setNewReview] = useState({ rating: 0, text: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRatingClick = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        title: "Please sign in",
        description: "You need to be signed in to leave a review.",
        variant: "destructive"
      });
      return;
    }

    if (newReview.rating === 0 || !newReview.text.trim()) {
      toast({
        title: "Please complete your review",
        description: "Both rating and review text are required.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const review: Review = {
        id: Date.now().toString(),
        userName: user.firstName ? `${user.firstName} ${user.lastName || ''}`.trim() : user.emailAddresses[0]?.emailAddress || 'Anonymous',
        rating: newReview.rating,
        text: newReview.text,
        date: new Date().toISOString().split('T')[0]
      };

      setReviews(prev => [review, ...prev]);
      setNewReview({ rating: 0, text: '' });
      setIsSubmitting(false);

      toast({
        title: "Review submitted",
        description: "Thank you for your review!"
      });
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Customer Reviews</h2>
      
      {/* Review Form */}
      {user && (
        <Card>
          <CardHeader>
            <CardTitle>Write a Review</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      className="hover:scale-110 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= newReview.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="reviewText" className="block text-sm font-medium mb-2">
                  Your Review
                </label>
                <Textarea
                  id="reviewText"
                  placeholder="Share your thoughts about this product..."
                  value={newReview.text}
                  onChange={(e) => setNewReview(prev => ({ ...prev, text: e.target.value }))}
                  rows={4}
                />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Review'}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="font-medium">{review.userName}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <RatingStars rating={review.rating} size="sm" />
                    <span className="text-sm text-muted-foreground">
                      {new Date(review.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground">{review.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}