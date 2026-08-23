'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  id: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  rating: number;
  comment: string;
  cleanlinessScore?: number;
  accuracyScore?: number;
  communicationScore?: number;
  locationScore?: number;
  checkinScore?: number;
  valueScore?: number;
}

interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({
  rating,
  reviewCount,
  reviews,
}) => {
  const categoryScores = [
    { name: 'Cleanliness', score: '5.0' },
    { name: 'Accuracy', score: '5.0' },
    { name: 'Communication', score: '5.0' },
    { name: 'Location', score: '4.9' },
    { name: 'Check-in', score: '5.0' },
    { name: 'Value', score: '4.9' },
  ];

  return (
    <div id="reviews" className="border-b border-airbnb-border py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-2 text-2xl font-semibold text-airbnb-charcoal">
        <Star className="h-6 w-6 fill-current text-airbnb-charcoal" />
        <span>{rating.toFixed(2)}</span>
        <span>·</span>
        <span>{reviewCount} reviews</span>
      </div>

      {/* Category Scores Grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-w-4xl">
        {categoryScores.map((cat) => (
          <div key={cat.name} className="flex items-center justify-between">
            <span className="text-base text-airbnb-charcoal">{cat.name}</span>
            <div className="flex items-center gap-3">
              <div className="h-1 w-32 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-airbnb-charcoal rounded-full"
                  style={{ width: `${(parseFloat(cat.score) / 5) * 100}%` }}
                />
              </div>
              <span className="text-sm font-semibold text-airbnb-charcoal w-6">
                {cat.score}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-2 gap-8 pt-4">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={review.authorAvatar}
                alt={review.authorName}
                className="h-12 w-12 rounded-full object-cover border border-airbnb-border"
              />
              <div>
                <h3 className="font-semibold text-base text-airbnb-charcoal">
                  {review.authorName}
                </h3>
                <span className="text-sm text-airbnb-muted">{review.date}</span>
              </div>
            </div>
            <p className="text-base text-airbnb-charcoal leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
