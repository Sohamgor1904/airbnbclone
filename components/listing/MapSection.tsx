'use client';

import React, { useEffect, useState } from 'react';
import { Search, Plus, Minus, ChevronRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Modal } from '@/components/ui/Modal';

interface MapSectionProps {
  location: string;
  lat: number;
  lng: number;
}

// Dynamically import Leaflet Map to avoid SSR issues
const MapContainerComponent = dynamic(
  () =>
    import('react-leaflet').then((mod) => {
      const { MapContainer, TileLayer, Marker } = mod;
      return function DynamicMap({ lat, lng, location }: MapSectionProps) {
        const [L, setL] = useState<any>(null);

        useEffect(() => {
          import('leaflet').then((leaflet) => {
            setL(leaflet);
          });
        }, []);

        if (!L) return <div className="h-[420px] w-full rounded-2xl bg-gray-100 animate-pulse" />;

        // Center pin: Black circle with house icon
        const houseIcon = L.divIcon({
          className: 'custom-house-pin',
          html: `
            <div style="background:#000;color:#fff;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.3);border:2px solid #fff;">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
          `,
          iconSize: [48, 48],
          iconAnchor: [24, 24],
        });

        return (
          <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-airbnb-border">
            {/* Map Top-Left Search Button */}
            <div className="absolute top-4 left-4 z-10">
              <button
                aria-label="Search map"
                className="h-10 w-10 rounded-full bg-white text-airbnb-charcoal shadow-md flex items-center justify-center hover:bg-gray-50 transition"
              >
                <Search className="h-4 w-4" />
              </button>
            </div>

            {/* Map Top-Right Zoom Buttons */}
            <div className="absolute top-4 right-4 z-10 flex flex-col rounded-lg bg-white shadow-md overflow-hidden divide-y divide-airbnb-border">
              <button
                aria-label="Zoom in"
                className="h-9 w-9 text-airbnb-charcoal flex items-center justify-center hover:bg-gray-50 transition"
              >
                <Plus className="h-4 w-4" />
              </button>
              <button
                aria-label="Zoom out"
                className="h-9 w-9 text-airbnb-charcoal flex items-center justify-center hover:bg-gray-50 transition"
              >
                <Minus className="h-4 w-4" />
              </button>
            </div>

            <MapContainer
              center={[lat, lng]}
              zoom={14}
              scrollWheelZoom={false}
              zoomControl={false}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lng]} icon={houseIcon} />
            </MapContainer>
          </div>
        );
      };
    }),
  { ssr: false }
);

export const MapSection: React.FC<MapSectionProps> = ({
  location,
  lat,
  lng,
}) => {
  const [isNeighbourhoodModalOpen, setIsNeighbourhoodModalOpen] = useState(false);

  return (
    <div id="map" className="border-b border-airbnb-border py-8 space-y-8">
      {/* Map Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-airbnb-charcoal">
          Where you&apos;ll be
        </h2>
        <p className="text-base text-airbnb-charcoal font-medium">{location}</p>
      </div>

      {/* Map Box */}
      <div className="space-y-3">
        <MapContainerComponent location={location} lat={lat} lng={lng} />
        <p className="text-sm text-airbnb-charcoal">
          Exact location will be provided after booking.
        </p>
      </div>

      {/* Neighbourhood Highlights Section */}
      <div className="pt-4 space-y-2">
        <h3 className="text-xl font-bold text-airbnb-charcoal">
          Neighbourhood highlights
        </h3>
        <p className="text-base text-airbnb-charcoal leading-relaxed max-w-4xl">
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button
          onClick={() => setIsNeighbourhoodModalOpen(true)}
          className="inline-flex items-center gap-1 font-semibold text-airbnb-charcoal underline hover:opacity-80 transition pt-1 text-base"
        >
          <span>Show more</span>
          <ChevronRight className="h-4 w-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Neighbourhood Modal */}
      <Modal
        isOpen={isNeighbourhoodModalOpen}
        onClose={() => setIsNeighbourhoodModalOpen(false)}
        title="Neighbourhood highlights"
      >
        <div className="space-y-4 text-base text-airbnb-charcoal leading-relaxed">
          <p>
            Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
          </p>
          <p>
            Candolim Beach is famous for its serene golden sands, water sports, beach shacks, and romantic sunset views. High-end dining spots, grocery stores, and local handicraft markets are all within a 5 to 10 minute drive.
          </p>
        </div>
      </Modal>
    </div>
  );
};
