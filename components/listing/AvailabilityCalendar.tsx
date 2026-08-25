'use client';

import React from 'react';

export const AvailabilityCalendar: React.FC = () => {
  return (
    <div id="availability-calendar" className="border-b border-airbnb-border py-8">
      <img
        src="/calendar_section.png"
        alt="5 nights in Candolim - Availability Calendar"
        className="w-full max-w-3xl h-auto object-contain"
      />
    </div>
  );
};
