'use client';

import React, { useState } from 'react';
import { CalendarX, Key, Shield } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';

export const ThingsToKnow: React.FC = () => {
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (title: string, content: React.ReactNode) => {
    setModalTitle(title);
    setModalContent(content);
    setIsOpen(true);
  };

  return (
    <div className="border-b border-airbnb-border py-10 space-y-8">
      <h2 className="text-2xl font-semibold text-airbnb-charcoal">
        Things to know
      </h2>

      <div className="grid grid-cols-3 gap-12">
        {/* Cancellation policy */}
        <div className="space-y-4">
          <div className="space-y-2">
            <CalendarX className="h-6 w-6 text-airbnb-charcoal" />
            <h3 className="text-base font-bold text-airbnb-charcoal">
              Cancellation policy
            </h3>
          </div>
          <div className="space-y-2 text-sm text-airbnb-charcoal leading-relaxed">
            <p>
              Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
            </p>
            <p className="text-airbnb-muted">
              Review this host&apos;s full policy for details.
            </p>
          </div>
          <button
            onClick={() =>
              openModal(
                'Cancellation policy',
                <p className="text-base text-airbnb-charcoal leading-relaxed">
                  Cancel before 17 October for a full refund. Cancellations made between 17 October and 18 October will receive a partial refund minus the first night and service fee.
                </p>
              )
            }
            className="text-sm font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
          >
            Learn more
          </button>
        </div>

        {/* House rules */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Key className="h-6 w-6 text-airbnb-charcoal" />
            <h3 className="text-base font-bold text-airbnb-charcoal">
              House rules
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-airbnb-charcoal leading-relaxed">
            <li>Check-in after 2:00 pm</li>
            <li>Checkout before 11:00 am</li>
            <li>3 guests maximum</li>
          </ul>
          <button
            onClick={() =>
              openModal(
                'House rules',
                <ul className="space-y-3 text-base text-airbnb-charcoal list-disc pl-5">
                  <li>Self check-in with building staff/keypad</li>
                  <li>No smoking indoors</li>
                  <li>No unregistered guests overnight</li>
                  <li>Pets are allowed with prior notification</li>
                </ul>
              )
            }
            className="text-sm font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
          >
            Learn more
          </button>
        </div>

        {/* Safety & property */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Shield className="h-6 w-6 text-airbnb-charcoal" />
            <h3 className="text-base font-bold text-airbnb-charcoal">
              Safety &amp; property
            </h3>
          </div>
          <ul className="space-y-2 text-sm text-airbnb-charcoal leading-relaxed">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <button
            onClick={() =>
              openModal(
                'Safety & property',
                <ul className="space-y-3 text-base text-airbnb-charcoal list-disc pl-5">
                  <li>Exterior security cameras monitor building entryways</li>
                  <li>First aid kit available in apartment</li>
                  <li>Heated Jacuzzi tub features auto-shutoff safety timer</li>
                </ul>
              )
            }
            className="text-sm font-semibold text-airbnb-charcoal underline hover:opacity-80 transition"
          >
            Learn more
          </button>
        </div>
      </div>

      {/* Learn More Modal */}
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={modalTitle}
      >
        {modalContent}
      </Modal>
    </div>
  );
};
