'use client';

import React, { useState } from 'react';
import { Share, Heart, Star, Award } from 'lucide-react';

interface TitleSectionProps {
  title: string;
  rating: number;
  reviewCount: number;
  location: string;
  isSuperhost?: boolean;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  rating,
  reviewCount,
  location,
  isSuperhost = true,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="space-y-1 py-4">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-airbnb-charcoal tracking-tight">
          {title}
        </h1>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 text-sm font-semibold">
          <button className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-airbnb-light transition underline">
            <Share className="h-4 w-4" />
            <span>Share</span>
          </button>
          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-airbnb-light transition underline"
          >
            <Heart
              className={`h-4 w-4 ${
                isSaved ? 'fill-airbnb-rausch text-airbnb-rausch' : ''
              }`}
            />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Details Row */}
      <div className="flex items-center gap-2 text-sm text-airbnb-charcoal">
        <div className="flex items-center gap-1 font-semibold">
          <Star className="h-4 w-4 fill-current text-airbnb-charcoal" />
          <span>{rating.toFixed(2)}</span>
        </div>
        <span>·</span>
        <a href="#reviews" className="font-semibold underline">
          {reviewCount} reviews
        </a>
        {isSuperhost && (
          <>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-airbnb-charcoal" />
              <span>Superhost</span>
            </div>
          </>
        )}
        <span>·</span>
        <a href="#map" className="font-semibold underline text-airbnb-charcoal">
          {location}
        </a>
      </div>
    </div>
  );
};
