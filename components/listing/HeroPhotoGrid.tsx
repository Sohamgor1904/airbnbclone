'use client';

import React from 'react';
import { Grid } from 'lucide-react';
import { motion } from 'framer-motion';

interface Photo {
  id: string;
  url: string;
  alt: string;
}

interface HeroPhotoGridProps {
  photos: Photo[];
  onOpenPhotoTour: (index?: number) => void;
}

export const HeroPhotoGrid: React.FC<HeroPhotoGridProps> = ({
  photos,
  onOpenPhotoTour,
}) => {
  const displayPhotos = photos.slice(0, 5);

  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="grid grid-cols-4 grid-rows-2 gap-2 h-[420px] w-full">
        {/* Main Photo (Left Half) */}
        {displayPhotos[0] && (
          <motion.div
            whileHover={{ opacity: 0.95 }}
            onClick={() => onOpenPhotoTour(0)}
            className="col-span-2 row-span-2 relative cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={displayPhotos[0].url}
              alt={displayPhotos[0].alt}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        )}

        {/* Top Middle Photo */}
        {displayPhotos[1] && (
          <motion.div
            whileHover={{ opacity: 0.95 }}
            onClick={() => onOpenPhotoTour(1)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={displayPhotos[1].url}
              alt={displayPhotos[1].alt}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        )}

        {/* Top Right Photo */}
        {displayPhotos[2] && (
          <motion.div
            whileHover={{ opacity: 0.95 }}
            onClick={() => onOpenPhotoTour(2)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={displayPhotos[2].url}
              alt={displayPhotos[2].alt}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        )}

        {/* Bottom Middle Photo */}
        {displayPhotos[3] && (
          <motion.div
            whileHover={{ opacity: 0.95 }}
            onClick={() => onOpenPhotoTour(3)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={displayPhotos[3].url}
              alt={displayPhotos[3].alt}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        )}

        {/* Bottom Right Photo */}
        {displayPhotos[4] && (
          <motion.div
            whileHover={{ opacity: 0.95 }}
            onClick={() => onOpenPhotoTour(4)}
            className="col-span-1 row-span-1 relative cursor-pointer overflow-hidden bg-gray-100"
          >
            <img
              src={displayPhotos[4].url}
              alt={displayPhotos[4].alt}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </motion.div>
        )}
      </div>

      {/* Show All Photos Button */}
      <button
        onClick={() => onOpenPhotoTour(0)}
        className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg border border-black bg-white px-4 py-1.5 text-sm font-semibold text-airbnb-charcoal shadow-sm transition hover:bg-airbnb-light active:scale-95"
      >
        <Grid className="h-4 w-4" />
        <span>Show all photos</span>
      </button>
    </div>
  );
};
