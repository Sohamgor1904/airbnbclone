'use client';

import React from 'react';
import { KeyRound, Laptop, Award, Tag } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <div className="space-y-6 border-b border-airbnb-border py-6">
      {/* Discount Banner */}
      <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200 px-4 py-3 text-emerald-900">
        <div className="flex items-center gap-3">
          <Tag className="h-5 w-5 text-emerald-600" />
          <span className="text-sm font-semibold">
            Get 10% off your next stay
          </span>
        </div>
        <button className="text-xs font-bold underline hover:text-emerald-700">
          Claim
        </button>
      </div>

      {/* Feature Rows */}
      <div className="space-y-5">
        <div className="flex items-start gap-4">
          <KeyRound className="h-6 w-6 text-airbnb-charcoal shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-semibold text-airbnb-charcoal">
              Self check-in
            </h3>
            <p className="text-sm text-airbnb-muted">
              Check yourself in with the building keypad.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Laptop className="h-6 w-6 text-airbnb-charcoal shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-semibold text-airbnb-charcoal">
              Dedicated workspace
            </h3>
            <p className="text-sm text-airbnb-muted">
              A comfortable desk and chair with high-speed Wi-Fi.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Award className="h-6 w-6 text-airbnb-charcoal shrink-0 mt-0.5" />
          <div>
            <h3 className="text-base font-semibold text-airbnb-charcoal">
              Mirashya is a Superhost
            </h3>
            <p className="text-sm text-airbnb-muted">
              Superhosts are experienced, highly rated Hosts committed to great stays.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
