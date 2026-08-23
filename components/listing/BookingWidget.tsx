'use client';

import React, { useState } from 'react';
import { Star, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BookingWidgetProps {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  pricePerNight,
  cleaningFee,
  serviceFee,
  rating,
  reviewCount,
  maxGuests,
}) => {
  const [guests, setGuests] = useState(2);
  const [nights, setNights] = useState(5);
  const [showGuestMenu, setShowGuestMenu] = useState(false);

  const basePriceTotal = pricePerNight * nights;
  const totalPrice = basePriceTotal + cleaningFee + serviceFee;

  return (
    <div className="sticky top-28 rounded-2xl border border-airbnb-border bg-white p-6 shadow-card space-y-6">
      {/* Header Price & Rating */}
      <div className="flex items-end justify-between">
        <div>
          <span className="text-2xl font-bold text-airbnb-charcoal">
            ₹{pricePerNight.toLocaleString('en-IN')}
          </span>
          <span className="text-base font-normal text-airbnb-muted"> / night</span>
        </div>
        <div className="flex items-center gap-1 text-sm font-semibold text-airbnb-charcoal">
          <Star className="h-4 w-4 fill-current text-airbnb-charcoal" />
          <span>{rating.toFixed(2)}</span>
          <span className="text-airbnb-muted font-normal">({reviewCount})</span>
        </div>
      </div>

      {/* Date & Guest Picker Box */}
      <div className="rounded-xl border border-airbnb-border overflow-hidden divide-y divide-airbnb-border">
        {/* Dates */}
        <div className="grid grid-cols-2 divide-x divide-airbnb-border text-left">
          <button className="p-3 hover:bg-airbnb-light text-left transition">
            <span className="block text-[10px] font-bold uppercase text-airbnb-charcoal">
              CHECK-IN
            </span>
            <span className="block text-sm text-airbnb-charcoal">28/08/2026</span>
          </button>
          <button className="p-3 hover:bg-airbnb-light text-left transition">
            <span className="block text-[10px] font-bold uppercase text-airbnb-charcoal">
              CHECKOUT
            </span>
            <span className="block text-sm text-airbnb-charcoal">02/09/2026</span>
          </button>
        </div>

        {/* Guest Selector */}
        <div className="relative">
          <button
            onClick={() => setShowGuestMenu(!showGuestMenu)}
            className="w-full p-3 flex items-center justify-between hover:bg-airbnb-light transition text-left"
          >
            <div>
              <span className="block text-[10px] font-bold uppercase text-airbnb-charcoal">
                GUESTS
              </span>
              <span className="block text-sm text-airbnb-charcoal">
                {guests} guest{guests > 1 ? 's' : ''}
              </span>
            </div>
            <ChevronDown className="h-5 w-5 text-airbnb-charcoal" />
          </button>

          {showGuestMenu && (
            <div className="absolute top-full left-0 right-0 z-20 mt-2 rounded-xl border border-airbnb-border bg-white p-4 shadow-floating space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="block text-sm font-bold text-airbnb-charcoal">
                    Guests
                  </span>
                  <span className="block text-xs text-airbnb-muted">
                    Maximum {maxGuests} guests
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={guests <= 1}
                    onClick={() => setGuests(guests - 1)}
                    className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center font-bold text-airbnb-charcoal hover:border-black disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold w-4 text-center">
                    {guests}
                  </span>
                  <button
                    disabled={guests >= maxGuests}
                    onClick={() => setGuests(guests + 1)}
                    className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center font-bold text-airbnb-charcoal hover:border-black disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Reserve CTA */}
      <Button variant="primary" size="lg" className="w-full py-3.5 text-base">
        Reserve
      </Button>

      <p className="text-center text-xs text-airbnb-muted">
        You won&apos;t be charged yet
      </p>

      {/* Pricing Breakdown */}
      <div className="space-y-3 pt-2 text-sm text-airbnb-charcoal">
        <div className="flex items-center justify-between">
          <span className="underline">
            ₹{pricePerNight.toLocaleString('en-IN')} x {nights} nights
          </span>
          <span>₹{basePriceTotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="underline">Cleaning fee</span>
          <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>₹{serviceFee.toLocaleString('en-IN')}</span>
        </div>

        <div className="border-t border-airbnb-border pt-4 flex items-center justify-between font-bold text-base">
          <span>Total before taxes</span>
          <span>₹{totalPrice.toLocaleString('en-IN')}</span>
        </div>
      </div>
    </div>
  );
};
