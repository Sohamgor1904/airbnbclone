'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Share, Heart } from 'lucide-react';

interface Photo {
  id: string;
  url: string;
  alt: string;
  category: string;
  caption?: string | null;
}

interface PhotoTourProps {
  isOpen: boolean;
  onClose: () => void;
  photos: Photo[];
  onSelectPhoto: (index: number) => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  isOpen,
  onClose,
  photos,
  onSelectPhoto,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('');
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Group photos by category
  const categories = Array.from(new Set(photos.map((p) => p.category)));

  useEffect(() => {
    if (categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0]);
    }
  }, [categories, activeCategory]);

  // Esc key and scroll lock
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Smooth scroll to category section
  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const element = document.getElementById(`cat-${cat.replace(/\s+/g, '-')}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Photo Tour Gallery"
          className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-airbnb-border bg-white px-6 py-4">
            <button
              onClick={onClose}
              aria-label="Back to listing"
              className="flex items-center gap-2 p-2 rounded-full hover:bg-airbnb-light transition text-airbnb-charcoal"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            {/* Category Pill Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-3xl px-4 py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => scrollToCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition ${
                    activeCategory === cat
                      ? 'bg-airbnb-charcoal text-white shadow-sm'
                      : 'bg-airbnb-light text-airbnb-charcoal hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button aria-label="Share" className="p-2 rounded-full hover:bg-airbnb-light text-airbnb-charcoal">
                <Share className="h-5 w-5" />
              </button>
              <button aria-label="Save" className="p-2 rounded-full hover:bg-airbnb-light text-airbnb-charcoal">
                <Heart className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Gallery Scroll Container */}
          <div ref={containerRef} className="flex-1 overflow-y-auto px-10 py-8 space-y-16 max-w-6xl mx-auto w-full">
            {categories.map((cat) => {
              const catPhotos = photos.filter((p) => p.category === cat);
              return (
                <section key={cat} id={`cat-${cat.replace(/\s+/g, '-')}`} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-airbnb-charcoal">{cat}</h2>
                    {catPhotos[0]?.caption && (
                      <p className="text-sm text-airbnb-muted mt-1">{catPhotos[0].caption}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {catPhotos.map((photo) => {
                      const globalIndex = photos.findIndex((p) => p.id === photo.id);
                      return (
                        <motion.div
                          key={photo.id}
                          whileHover={{ scale: 1.01 }}
                          onClick={() => onSelectPhoto(globalIndex)}
                          className="group relative cursor-pointer overflow-hidden rounded-xl bg-gray-100 aspect-[4/3]"
                        >
                          <img
                            src={photo.url}
                            alt={photo.alt}
                            className="h-full w-full object-cover transition duration-300 group-hover:opacity-95"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
