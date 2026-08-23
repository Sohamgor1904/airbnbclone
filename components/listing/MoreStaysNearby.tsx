'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface NearbyListing {
  id: string;
  title: string;
  photoUrl: string;
  pricePerNight: number;
  rating: number;
}

interface MoreStaysNearbyProps {
  listings: NearbyListing[];
}

export const MoreStaysNearby: React.FC<MoreStaysNearbyProps> = ({ listings }) => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 2;

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  return (
    <div className="py-12 space-y-6">
      {/* Header with Counter & Prev/Next Buttons */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-airbnb-charcoal">
          More stays nearby
        </h2>

        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-airbnb-charcoal">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={handlePrev}
            aria-label="Previous page"
            className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center text-airbnb-charcoal hover:border-black hover:bg-airbnb-light active:scale-95 transition"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next page"
            className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center text-airbnb-charcoal hover:border-black hover:bg-airbnb-light active:scale-95 transition"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Cards Carousel Grid */}
      <div className="grid grid-cols-5 gap-4 overflow-x-auto no-scrollbar py-1">
        {listings.map((stay) => (
          <div key={stay.id} className="space-y-3 cursor-pointer group">
            <div className="overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
              <img
                src={stay.photoUrl}
                alt={stay.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-airbnb-charcoal line-clamp-2 group-hover:underline">
                {stay.title}
              </h3>
              <div className="flex items-center justify-between text-sm text-airbnb-charcoal">
                <span>₹{stay.pricePerNight.toLocaleString('en-IN')}</span>
                <div className="flex items-center gap-1 font-semibold">
                  <Star className="h-3.5 w-3.5 fill-current text-airbnb-charcoal" />
                  <span>{stay.rating.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
