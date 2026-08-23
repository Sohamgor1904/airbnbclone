'use client';

import React from 'react';

interface Room {
  id: string;
  name: string;
  detail: string;
  photoUrl: string;
}

interface WhereYouSleepProps {
  rooms: Room[];
}

export const WhereYouSleep: React.FC<WhereYouSleepProps> = ({ rooms }) => {
  return (
    <div className="border-b border-airbnb-border py-8 space-y-6">
      <h2 className="text-2xl font-semibold text-airbnb-charcoal">
        Where you&apos;ll sleep
      </h2>

      <div className="grid grid-cols-2 gap-6 max-w-4xl">
        {rooms.map((room) => (
          <div key={room.id} className="space-y-3">
            <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]">
              <img
                src={room.photoUrl}
                alt={room.name}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-base font-bold text-airbnb-charcoal">
                {room.name}
              </h3>
              <p className="text-sm text-airbnb-muted">{room.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
