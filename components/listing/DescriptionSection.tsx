'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

interface DescriptionSectionProps {
  description: string;
}

export const DescriptionSection: React.FC<DescriptionSectionProps> = ({
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-airbnb-border py-6">
      <p className="text-base text-airbnb-charcoal leading-relaxed line-clamp-3">
        {description}
      </p>

      <button
        onClick={() => setIsOpen(true)}
        className="mt-3 inline-flex items-center gap-1 font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
      >
        <span>Show more</span>
        <ChevronRight className="h-4 w-4 stroke-[2.5]" />
      </button>

      {/* Full Description Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="About this space"
      >
        <div className="space-y-4 text-base text-airbnb-charcoal leading-relaxed">
          <p>{description}</p>
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-lg">The space</h3>
            <p>
              Mirashya UG10 is designed for maximum relaxation and romance. Enjoy a warm, spacious 1BHK layout with premium teak wood furnishings, ambient warm lighting, and a private Jacuzzi tub set up on your balcony overlooking serene greenery.
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-lg">Guest access</h3>
            <p>
              Guests have full private access to the entire apartment, balcony Jacuzzi, and shared access to the building swimming pool, fitness gym, and secure parking on premises.
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};
