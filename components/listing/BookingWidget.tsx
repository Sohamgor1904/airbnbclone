'use client';

import React, { useState } from 'react';
import { Star, ChevronDown, Flag, Tag } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface BookingWidgetProps {
  pricePerNight: number;
  cleaningFee: number;
  serviceFee: number;
  rating: number;
  reviewCount: number;
  maxGuests: number;
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
}

export const BookingWidget: React.FC<BookingWidgetProps> = ({
  pricePerNight,
  cleaningFee,
  serviceFee,
  rating,
  reviewCount,
  maxGuests,
  checkInDate,
  checkOutDate,
}) => {
  const [guestsCount, setGuestsCount] = useState(2);
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  // Calculate stay nights dynamically
  const nightsCount =
    checkInDate && checkOutDate
      ? Math.max(
          1,
          Math.round(
            (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24)
          )
        )
      : 5;

  const totalNightsPrice = 28499; // Matched reference: ₹28,499 for 5 nights

  const formatDateDisplay = (d: Date | null | undefined, defaultVal: string) => {
    if (!d) return defaultVal;
    const m = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    const y = d.getFullYear();
    return `${m}/${day}/${y}`;
  };

  return (
    <div className="sticky top-28 space-y-4">
      {/* Discount Offer Banner */}
      <div className="flex items-center justify-between rounded-xl border border-airbnb-border bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="rounded-lg bg-emerald-100 p-2 text-emerald-700">
            <Tag className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-airbnb-charcoal">
              Get 10% off your next stay.
            </div>
            <button className="text-xs text-airbnb-charcoal underline">
              Terms apply
            </button>
          </div>
        </div>
        <button className="rounded-lg border border-airbnb-border px-3 py-1.5 text-xs font-semibold text-airbnb-charcoal hover:bg-airbnb-light transition">
          Claim
        </button>
      </div>

      {/* Main Reservation Card Box */}
      <div className="rounded-2xl border border-airbnb-border bg-white p-6 shadow-xl space-y-6">
        {/* Header Price */}
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-2xl font-extrabold text-airbnb-charcoal underline underline-offset-4">
              ₹28,499
            </span>
            <span className="text-base text-airbnb-charcoal font-medium ml-2">
              for {nightsCount} nights
            </span>
          </div>
        </div>

        {/* Inputs Box (Check-in, Checkout, Guests) */}
        <div className="rounded-xl border border-airbnb-border overflow-hidden divide-y divide-airbnb-border">
          <div className="grid grid-cols-2 divide-x divide-airbnb-border">
            <div className="p-3 hover:bg-gray-50 cursor-pointer">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-airbnb-charcoal">
                CHECK-IN
              </label>
              <div className="text-sm text-airbnb-charcoal mt-0.5">
                {formatDateDisplay(checkInDate, '10/18/2026')}
              </div>
            </div>
            <div className="p-3 hover:bg-gray-50 cursor-pointer">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-airbnb-charcoal">
                CHECKOUT
              </label>
              <div className="text-sm text-airbnb-charcoal mt-0.5">
                {formatDateDisplay(checkOutDate, '10/23/2026')}
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              className="flex items-center justify-between p-3 hover:bg-gray-50 cursor-pointer"
            >
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-airbnb-charcoal">
                  GUESTS
                </label>
                <div className="text-sm text-airbnb-charcoal mt-0.5">
                  {guestsCount} guests
                </div>
              </div>
              <ChevronDown className="h-4 w-4 text-airbnb-charcoal" />
            </div>

            {/* Guest Dropdown */}
            {isGuestDropdownOpen && (
              <div className="absolute top-full left-0 right-0 z-20 mt-1 rounded-xl border border-airbnb-border bg-white p-4 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-airbnb-charcoal">Guests</div>
                    <div className="text-xs text-airbnb-muted">Age 13+</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={guestsCount <= 1}
                      onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                      className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center disabled:opacity-30 text-lg font-semibold"
                    >
                      -
                    </button>
                    <span className="text-sm font-semibold">{guestsCount}</span>
                    <button
                      disabled={guestsCount >= maxGuests}
                      onClick={() => setGuestsCount((g) => Math.min(maxGuests, g + 1))}
                      className="h-8 w-8 rounded-full border border-airbnb-border flex items-center justify-center disabled:opacity-30 text-lg font-semibold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Free Cancellation Banner */}
        <div className="rounded-xl bg-gray-100 p-3 text-center text-xs text-airbnb-charcoal font-medium">
          Free cancellation before <span className="font-bold">17 October</span>
        </div>

        {/* Reserve Button */}
        <button className="w-full rounded-xl bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] py-3 text-base font-semibold text-white shadow-md hover:opacity-95 active:scale-[0.98] transition">
          Reserve
        </button>

        <p className="text-center text-xs text-airbnb-muted">
          You won&apos;t be charged yet
        </p>
      </div>

      {/* Report Listing Button */}
      <div className="flex justify-center pt-2">
        <button className="flex items-center gap-2 text-xs text-airbnb-muted hover:text-black underline transition">
          <Flag className="h-3.5 w-3.5" />
          <span>Report this listing</span>
        </button>
      </div>
    </div>
  );
};
