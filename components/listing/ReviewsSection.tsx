'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Key,
  MessageSquare,
  MapPin,
  Tag,
  SprayCan,
  ChevronRight,
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface Review {
  id: string;
  authorName: string;
  authorAvatar?: string | null;
  authorInitial?: string | null;
  authorTenure: string;
  date: string;
  rating: number;
  comment: string;
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
  const [isReviewsModalOpen, setIsReviewsModalOpen] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: string]: boolean }>({});

  const categoryScores = [
    { name: 'Cleanliness', score: '5.0', icon: <SprayCan className="h-6 w-6 text-airbnb-charcoal" /> },
    { name: 'Accuracy', score: '5.0', icon: <CheckCircle2 className="h-6 w-6 text-airbnb-charcoal" /> },
    { name: 'Check-in', score: '5.0', icon: <Key className="h-6 w-6 text-airbnb-charcoal" /> },
    { name: 'Communication', score: '5.0', icon: <MessageSquare className="h-6 w-6 text-airbnb-charcoal" /> },
    { name: 'Location', score: '4.8', icon: <MapPin className="h-6 w-6 text-airbnb-charcoal" /> },
    { name: 'Value', score: '4.8', icon: <Tag className="h-6 w-6 text-airbnb-charcoal" /> },
  ];

  const categoryPills = [
    { label: 'Comfort', count: 6, emoji: '🛋️' },
    { label: 'Accuracy', count: 5, emoji: '✅' },
    { label: 'Hot tub', count: 5, emoji: '♨️' },
    { label: 'Condition', count: 4, emoji: '🍰' },
    { label: 'Hospitality', count: 8, emoji: '🎁' },
    { label: 'Cleanliness', count: 4, emoji: '🛍️' },
    { label: 'Amenities', count: 2, emoji: '🎂' },
  ];

  const toggleExpand = (id: string) => {
    setExpandedReviews((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="reviews" className="border-b border-airbnb-border py-12 space-y-12">
      {/* Top Guest Favourite Banner & Rating Numeral */}
      <div className="flex flex-col items-center justify-center text-center space-y-3">
        {/* Leaf Wreath + 4.95 Numeral */}
        <div className="flex items-center gap-4">
          <svg className="h-16 w-12 text-airbnb-charcoal" viewBox="0 0 32 64" fill="currentColor">
            <path d="M16 4C10 12 4 20 4 32C4 44 10 52 16 60C14 50 10 40 10 32C10 24 14 14 16 4Z" opacity="0.8" />
            <path d="M16 10C12 18 8 24 8 32C8 40 12 46 16 54C14 46 12 38 12 32C12 26 14 18 16 10Z" opacity="0.5" />
          </svg>
          <span className="text-7xl font-extrabold text-airbnb-charcoal tracking-tight">
            {rating.toFixed(2)}
          </span>
          <svg className="h-16 w-12 text-airbnb-charcoal scale-x-[-1]" viewBox="0 0 32 64" fill="currentColor">
            <path d="M16 4C10 12 4 20 4 32C4 44 10 52 16 60C14 50 10 40 10 32C10 24 14 14 16 4Z" opacity="0.8" />
            <path d="M16 10C12 18 8 24 8 32C8 40 12 46 16 54C14 46 12 38 12 32C12 26 14 18 16 10Z" opacity="0.5" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-airbnb-charcoal">
          Guest favourite
        </h2>
        <p className="text-base text-airbnb-muted max-w-md">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          onClick={() => setIsReviewsModalOpen(true)}
          className="text-sm font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
        >
          How reviews work
        </button>
      </div>

      {/* 6-Column Rating Breakdown */}
      <div className="grid grid-cols-7 gap-4 pt-4 border-t border-b border-airbnb-border/60 py-6 items-center">
        {/* Overall Rating Bar Chart */}
        <div className="space-y-1.5 border-r border-airbnb-border/60 pr-4">
          <h3 className="text-xs font-bold text-airbnb-charcoal mb-2">Overall rating</h3>
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center gap-2 text-[11px] text-airbnb-muted">
              <span>{star}</span>
              <div className="h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
                <div
                  className="h-full bg-airbnb-charcoal rounded-full"
                  style={{ width: star === 5 ? '92%' : star === 4 ? '8%' : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 6 Metric Columns */}
        {categoryScores.map((cat) => (
          <div
            key={cat.name}
            className="flex flex-col justify-between h-full px-2 border-r last:border-r-0 border-airbnb-border/60"
          >
            <div>
              <h4 className="text-xs font-semibold text-airbnb-charcoal">{cat.name}</h4>
              <p className="text-lg font-extrabold text-airbnb-charcoal mt-1">{cat.score}</p>
            </div>
            <div className="mt-4">{cat.icon}</div>
          </div>
        ))}
      </div>

      {/* Category Tag Pills Row */}
      <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
        {categoryPills.map((pill) => (
          <button
            key={pill.label}
            className="flex items-center gap-2 rounded-xl border border-airbnb-border px-4 py-2.5 text-sm font-semibold text-airbnb-charcoal hover:border-black hover:bg-airbnb-light transition whitespace-nowrap"
          >
            <span>{pill.emoji}</span>
            <span>{pill.label}</span>
            <span className="text-airbnb-muted font-normal">{pill.count}</span>
          </button>
        ))}
      </div>

      {/* 2-Column Review Cards Grid */}
      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {reviews.slice(0, 6).map((review) => {
          const isLong = review.comment.length > 180;
          const isExpanded = expandedReviews[review.id];

          return (
            <div key={review.id} className="space-y-3">
              {/* Reviewer Header */}
              <div className="flex items-center gap-3">
                {review.authorAvatar ? (
                  <img
                    src={review.authorAvatar}
                    alt={review.authorName}
                    className="h-12 w-12 rounded-full object-cover border border-airbnb-border"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-purple-100 text-purple-800 font-bold text-lg flex items-center justify-center border border-purple-200">
                    {review.authorInitial || review.authorName.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-base text-airbnb-charcoal">
                    {review.authorName}
                  </h3>
                  <p className="text-xs text-airbnb-muted">{review.authorTenure}</p>
                </div>
              </div>

              {/* Rating & Date Line */}
              <div className="flex items-center gap-2 text-xs font-semibold text-airbnb-charcoal">
                <div className="flex items-center">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-airbnb-charcoal text-xs">★</span>
                  ))}
                </div>
                <span>·</span>
                <span>{review.date}</span>
              </div>

              {/* Comment Content */}
              <div className="text-base text-airbnb-charcoal leading-relaxed">
                <p className={!isExpanded && isLong ? 'line-clamp-3' : ''}>
                  {review.comment}
                </p>
                {isLong && (
                  <button
                    onClick={() => toggleExpand(review.id)}
                    className="mt-1 font-semibold text-airbnb-charcoal underline hover:opacity-80 text-sm"
                  >
                    {isExpanded ? 'Show less' : 'Show more'}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Show All Reviews Button */}
      <div>
        <button
          onClick={() => setIsReviewsModalOpen(true)}
          className="rounded-xl border border-airbnb-charcoal px-6 py-3 text-base font-semibold text-airbnb-charcoal hover:bg-airbnb-light transition active:scale-95"
        >
          Show all {reviewCount} reviews
        </button>
      </div>

      {/* How Reviews Work / All Reviews Modal */}
      <Modal
        isOpen={isReviewsModalOpen}
        onClose={() => setIsReviewsModalOpen(false)}
        title="Guest reviews"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <h3 className="font-bold text-base text-airbnb-charcoal">
              How reviews work
            </h3>
            <p className="text-sm text-airbnb-muted leading-relaxed">
              Reviews are left by real guests after their completed stays. Overall rating is calculated from ratings submitted across cleanliness, accuracy, check-in, communication, location, and value.
            </p>
          </div>

          <div className="space-y-6 divide-y divide-airbnb-border">
            {reviews.map((rev) => (
              <div key={rev.id} className="pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-airbnb-charcoal">{rev.authorName}</h4>
                  <span className="text-xs text-airbnb-muted">{rev.date}</span>
                </div>
                <p className="text-sm text-airbnb-charcoal leading-relaxed">{rev.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
};
