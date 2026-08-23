import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb',
  description: 'Entire serviced apartment in Candolim, India. 3 guests · 1 bedroom · 1 bed · 1 bathroom. Private Jacuzzi, pool access, and luxury amenities.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="min-w-[1280px] bg-white text-airbnb-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
