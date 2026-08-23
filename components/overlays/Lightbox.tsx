'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  alt: string;
  category: string;
  caption?: string | null;
}

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  currentIndex: number;
  onIndexChange: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  onClose,
  photos,
  currentIndex,
  onIndexChange,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentPhoto = photos[currentIndex] || photos[0];

  const handlePrev = () => {
    const prevIdx = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    onIndexChange(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    onIndexChange(nextIdx);
  };

  // Keyboard Navigation: Left, Right, Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
        onIndexChange(prevIdx);
      } else if (e.key === 'ArrowRight') {
        const nextIdx = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
        onIndexChange(nextIdx);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, currentIndex, photos.length, onClose, onIndexChange]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && currentPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Lightbox"
          className="fixed inset-0 z-50 flex flex-col bg-black text-white select-none overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 z-20">
            <button
              onClick={onClose}
              aria-label="Close Lightbox"
              className="flex items-center gap-2 p-2 rounded-full hover:bg-white/10 transition text-white"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="text-sm font-medium text-white/80">
              {currentIndex + 1} / {photos.length}
            </div>

            <div className="w-10" />
          </div>

          {/* Center Image Container with Prev / Next Buttons */}
          <div className="relative flex-1 flex items-center justify-center px-16">
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous photo"
              className="absolute left-6 z-20 p-3 rounded-full border border-white/20 bg-black/50 text-white hover:bg-white/20 active:scale-95 transition"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Photo View */}
            <motion.div
              key={currentPhoto.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="max-h-[80vh] max-w-[85vw] flex items-center justify-center"
            >
              <img
                src={currentPhoto.url}
                alt={currentPhoto.alt}
                className="max-h-[80vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              aria-label="Next photo"
              className="absolute right-6 z-20 p-3 rounded-full border border-white/20 bg-black/50 text-white hover:bg-white/20 active:scale-95 transition"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Footer Caption */}
          <div className="py-6 px-8 text-center bg-black/80 text-sm text-white/90">
            <p className="font-semibold">{currentPhoto.category}</p>
            {currentPhoto.caption && (
              <p className="text-xs text-white/60 mt-0.5">{currentPhoto.caption}</p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
