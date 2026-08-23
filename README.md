# Airbnb Listing Page & Overlays Clone

A pixel-perfect, behavior-perfect clone of the Airbnb property listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10") and its two interactive overlay views (**Photo Tour** & **Lightbox**), built with Next.js 14, Tailwind CSS, Framer Motion, Prisma ORM, and Neon PostgreSQL.

Reference Target: [https://airbnb-clone-umber-two.vercel.app](https://airbnb-clone-umber-two.vercel.app)

---

## Features & Views

1. **Listing Page (`/listing/[id]`)**
   - **Header**: Airbnb logo, search bar pill (Anywhere · Any week · Add guests), user menu button.
   - **Title Block**: Property name, rating summary (4.92 ★), review count, Superhost badge, location link, Share and Save buttons.
   - **Hero 5-Photo Grid**: 1 main photo on left, 4 photos on right grid, with hover zoom transitions and floating "Show all photos" button.
   - **Host & Specs Section**: Property stats (3 guests · 1 bedroom · 1 bed · 1 bath), host avatar, Superhost status.
   - **Highlights & Offer Banner**: Discount banner ("Get 10% off your next stay"), key feature rows (Self check-in, Dedicated workspace, Wifi).
   - **Description Section**: Property overview with inline "Show more >" modal dialog.
   - **Amenities Section**: Icon grid of top 10 amenities + "Show all amenities" modal dialog.
   - **Booking Widget**: Sticky desktop reservation card with price per night, check-in/checkout dates, guest selector dropdown, Reserve button, and price breakdown.
   - **Reviews Section**: Rating score summary, category score progress meters, 2-column review cards.
   - **Map Section**: Interactive Leaflet + OpenStreetMap view centered on Candolim, Goa with custom location marker and neighborhood description.
   - **Footer**: Full Airbnb desktop footer with links, currency switcher, and copyright.

2. **Photo Tour Overlay**
   - Opened via "Show all photos" or clicking any hero photo.
   - Sticky top bar with back arrow button and category tab pills ("Living room 1", "Living room 2", "Full kitchen", "Bedroom", "Full bathroom", "Gym", "Exterior", "Pool", "Additional photos").
   - Grouped scrollable image sections with smooth auto-scroll on tab click.
   - Clicking any photo opens the Lightbox overlay with target index active.

3. **Lightbox Overlay**
   - Full-screen single photo viewer modal with dark backdrop.
   - Previous (`←`) and Next (`→`) arrow navigation buttons and keyboard arrow key support (Left/Right arrow, Esc to close).
   - Image counter display (`X / N`) and photo category caption.
   - Accessible focus trap and ARIA dialog semantics (`role="dialog"`, `aria-modal="true"`).

---

## Tech Stack

- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Map**: Leaflet + React-Leaflet + OpenStreetMap
- **Database**: PostgreSQL (Neon free-tier) via Prisma ORM
- **API**: Next.js API Routes (`GET /api/listing/[id]`)
- **Deployment Target**: Vercel Free Hobby Tier

---

## Repository Structure

```
├── app/
│   ├── api/listing/[id]/route.ts  # REST API route handler (reads DB via Prisma)
│   ├── listing/[id]/page.tsx      # Listing page component
│   ├── globals.css                # Global CSS & Tailwind imports
│   ├── layout.tsx                 # Root layout with desktop constraint
│   └── page.tsx                   # Default root page
├── components/
│   ├── ui/                        # Atomic UI components (Button, Modal)
│   ├── listing/                   # Section components (Header, HeroGrid, Host, Amenities, etc.)
│   └── overlays/                  # Overlays (PhotoTour, Lightbox)
├── prisma/
│   ├── schema.prisma              # PostgreSQL schema (Listing, Photo, Amenity, Review)
│   └── seed.ts                    # Prisma seed script
├── lib/
│   └── prisma.ts                  # Prisma Client singleton
├── agents/
│   └── subagent_config.json       # AI sub-agent & skill configurations
├── architecture_diagram.png       # Production scaling architecture diagram (Image)
├── architecture_diagram.svg       # Architecture diagram source SVG
├── PROMPT_LOG.md                  # Chronological prompt sequence log
├── README.md                      # Project documentation
├── .env.example                   # Environment variable template
└── tailwind.config.ts             # Airbnb design tokens & configuration
```

---

## Local Setup & Running Instructions

### 1. Prerequisites
- Node.js >= 18.0.0
- npm or yarn

### 2. Installation
```bash
npm install
```

### 3. Database Setup (Neon PostgreSQL)
1. Create a free PostgreSQL database on [Neon.tech](https://neon.tech) (or any Postgres instance).
2. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
3. Update `DATABASE_URL` in `.env.local` with your database connection string:
   ```env
   DATABASE_URL="postgresql://user:password@your-neon-hostname.tech/neondb?sslmode=require"
   ```

### 4. Prisma Schema Migration & Seeding
Run Prisma commands to generate the client and seed the database:
```bash
# Push schema to database
npx prisma db push

# Seed database with listing photos, amenities, host data, and reviews
npx prisma db seed
```

### 5. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Scaling Architecture

An architectural diagram illustrating production scaling for an Airbnb-scale marketplace is provided in **`architecture_diagram.png`**.

Key Components:
1. **Client & Global Edge CDN Layer**: Next.js 14 frontend served globally via Vercel Edge / CloudFront CDN with static asset caching.
2. **API Gateway Layer**: Kong/Nginx API Gateway providing SSL termination, rate limiting, and CORS handling.
3. **Backend Microservices Layer**: Next.js Node.js server cluster handling Listing Service, Booking & Availability Engine, Search Service, and Reviews Aggregation.
4. **Data Storage & Caching Layer**: Neon PostgreSQL primary database, Neon read replicas for scalable query distribution, Redis cluster for listing caching, and Elasticsearch for geo-bounding box search.

---

## Deliverables Checklist

- [x] Listing Page, Photo Tour Overlay, Lightbox Overlay implemented with pixel & behavioral parity
- [x] Next.js 14 App Router + TypeScript + Tailwind CSS + Framer Motion
- [x] Prisma ORM schema + Neon PostgreSQL seeding script (`prisma/seed.ts`)
- [x] `GET /api/listing/[id]` API handler
- [x] Desktop-only constraint (≥1280px viewport)
- [x] Accessible focus management, Esc key overlay closing, and Left/Right keyboard navigation in Lightbox
- [x] High-resolution **`architecture_diagram.png`** image file
- [x] Sub-agent configuration file (`agents/subagent_config.json`)
- [x] Chronological prompt log (`PROMPT_LOG.md`)
