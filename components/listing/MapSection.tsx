'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

interface MapSectionProps {
  location: string;
  lat: number;
  lng: number;
}

// Dynamically import Leaflet Map to avoid SSR issues
const MapContainerComponent = dynamic(
  () =>
    import('react-leaflet').then((mod) => {
      const { MapContainer, TileLayer, Marker, Popup } = mod;
      return function DynamicMap({ lat, lng, location }: MapSectionProps) {
        const [L, setL] = useState<any>(null);

        useEffect(() => {
          import('leaflet').then((leaflet) => {
            setL(leaflet);
          });
        }, []);

        if (!L) return <div className="h-[400px] w-full rounded-2xl bg-gray-100 animate-pulse" />;

        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div style="background:#222;color:#fff;padding:6px 12px;border-radius:20px;font-weight:bold;font-size:13px;box-shadow:0 2px 8px rgba(0,0,0,0.3);">Candolim</div>`,
          iconSize: [80, 30],
          iconAnchor: [40, 15],
        });

        return (
          <MapContainer
            center={[lat, lng]}
            zoom={14}
            scrollWheelZoom={false}
            className="h-[400px] w-full rounded-2xl border border-airbnb-border z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={customIcon}>
              <Popup>
                <div className="text-sm font-semibold">{location}</div>
              </Popup>
            </Marker>
          </MapContainer>
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
  return (
    <div id="map" className="border-b border-airbnb-border py-8 space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-airbnb-charcoal">
          Where you&apos;ll be
        </h2>
        <p className="text-base text-airbnb-charcoal">{location}</p>
      </div>

      <MapContainerComponent location={location} lat={lat} lng={lng} />

      <p className="text-sm text-airbnb-muted leading-relaxed max-w-3xl">
        Candolim is one of the most vibrant yet relaxed beachside destinations in North Goa. Famous for its pristine beaches, water sports, beach shacks, and fine dining restaurants, Mirashya UG10 is conveniently located close to Candolim beach road.
      </p>
    </div>
  );
};
