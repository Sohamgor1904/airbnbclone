'use client';

import React from 'react';

interface HostSectionProps {
  propertyType: string;
  maxGuests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  hostName: string;
  hostAvatar: string;
  isSuperhost?: boolean;
}

export const HostSection: React.FC<HostSectionProps> = ({
  propertyType,
  maxGuests,
  bedrooms,
  beds,
  bathrooms,
  hostName,
  hostAvatar,
  isSuperhost = true,
}) => {
  return (
    <div className="flex items-center justify-between border-b border-airbnb-border py-6">
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-airbnb-charcoal">
          {propertyType}
        </h2>
        <ol className="flex items-center gap-1 text-sm text-airbnb-charcoal">
          <li>{maxGuests} guests</li>
          <li>·</li>
          <li>{bedrooms} bedroom</li>
          <li>·</li>
          <li>{beds} bed</li>
          <li>·</li>
          <li>{bathrooms} bathroom</li>
        </ol>
      </div>

      <div className="relative">
        <img
          src={hostAvatar}
          alt={hostName}
          className="h-14 w-14 rounded-full object-cover border border-airbnb-border"
        />
        {isSuperhost && (
          <div className="absolute -bottom-1 -right-1 rounded-full bg-airbnb-rausch p-1 text-white shadow-sm">
            <svg className="h-3 w-3 fill-current" viewBox="0 0 16 16">
              <path d="M8 0l2.4 4.8L16 5.6l-4 3.9 1 5.5L8 12.4 3 15l1-5.5-4-3.9 5.6-.8z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
