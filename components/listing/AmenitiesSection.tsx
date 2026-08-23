'use client';

import React, { useState } from 'react';
import {
  Wifi,
  Laptop,
  Bath,
  Car,
  Wind,
  Tv,
  Utensils,
  Waves,
  Shirt,
  Sun,
  ShieldAlert,
  Flame,
} from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface Amenity {
  id: string;
  name: string;
  iconName: string;
  category?: string;
  isTop?: boolean;
}

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wifi':
      return <Wifi className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Laptop':
      return <Laptop className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Bath':
      return <Bath className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Car':
      return <Car className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Wind':
      return <Wind className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Tv':
      return <Tv className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Utensils':
      return <Utensils className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Waves':
      return <Waves className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Shirt':
      return <Shirt className="h-6 w-6 text-airbnb-charcoal" />;
    case 'Sun':
      return <Sun className="h-6 w-6 text-airbnb-charcoal" />;
    default:
      return <Flame className="h-6 w-6 text-airbnb-charcoal" />;
  }
};

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({
  amenities,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const topAmenities = amenities.slice(0, 10);

  return (
    <div className="border-b border-airbnb-border py-8">
      <h2 className="text-2xl font-semibold text-airbnb-charcoal mb-6">
        What this place offers
      </h2>

      <div className="grid grid-cols-2 gap-4 max-w-xl mb-6">
        {topAmenities.map((amenity) => (
          <div key={amenity.id} className="flex items-center gap-4 py-1">
            {getIcon(amenity.iconName)}
            <span className="text-base text-airbnb-charcoal">{amenity.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl border border-airbnb-charcoal px-6 py-3 text-base font-semibold text-airbnb-charcoal hover:bg-airbnb-light transition active:scale-95"
      >
        Show all {amenities.length} amenities
      </button>

      {/* All Amenities Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="What this place offers"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-airbnb-charcoal">Scenic views</h3>
            <div className="divide-y divide-airbnb-border">
              <div className="flex items-center gap-4 py-3">
                <Sun className="h-6 w-6 text-airbnb-charcoal" />
                <span className="text-base text-airbnb-charcoal">Balcony garden view</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-airbnb-charcoal">Bathroom & Spa</h3>
            <div className="divide-y divide-airbnb-border">
              <div className="flex items-center gap-4 py-3">
                <Bath className="h-6 w-6 text-airbnb-charcoal" />
                <span className="text-base text-airbnb-charcoal">Private Jacuzzi tub</span>
              </div>
              <div className="flex items-center gap-4 py-3">
                <Wind className="h-6 w-6 text-airbnb-charcoal" />
                <span className="text-base text-airbnb-charcoal">Hair dryer & Hot water</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-airbnb-charcoal">Internet & Office</h3>
            <div className="divide-y divide-airbnb-border">
              {amenities.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-3">
                  {getIcon(item.iconName)}
                  <span className="text-base text-airbnb-charcoal">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
