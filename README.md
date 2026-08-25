# Airbnb Listing Clone — Full-Stack Web Application

A pixel-perfect, behavior-perfect full-stack clone of a single Airbnb listing page and its interactive overlays, built with Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Prisma ORM, and a serverless Neon PostgreSQL database.

## 🌐 Live Production Link

- **Live Production URL**: [https://airbnbclone-lime.vercel.app](https://airbnbclone-lime.vercel.app)

---

## 🎯 Overview & Key Objectives

The goal of this project was to construct an exact, production-grade clone of an Airbnb property listing page for desktop viewports (≥1280px). Visual fidelity, micro-interactions, layout precision, color tokens (#FF385C, #222222, #717171), typography, accessibility, and backend database connectivity were prioritized to match real-world production standards.

---

## ✨ Core Features & Views Built

- **Listing Page**: Comprehensive property page with full section layout (Header, Hero Grid, Sticky Sub-Nav, Host Card, Highlights, Description, Where You'll Sleep, Amenities, Availability Calendar, Booking Widget, Reviews, Map, Meet Your Host, Things to Know, More Stays Nearby, and Footer).
- **Photo Tour Overlay**: Full-screen modal gallery organizing property photos into category groups (e.g., Living room, Bedroom, Bathroom, Outdoor) with sticky tab navigation.
- **Lightbox Overlay**: Single-photo viewer overlay with smooth transitions, image index counters, prev/next navigation controls, keyboard arrow key navigation (← / →), Esc key close handling, and focus trapping.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |
| **Maps** | React Leaflet + OpenStreetMap |
| **ORM** | Prisma ORM (v5) |
| **Database** | Neon PostgreSQL (Serverless) |
| **Deployment** | Vercel Production |

---

## ⚡ How to Run Locally

### 1. Prerequisites
- Node.js `≥18.17.0`
- npm `≥9.0.0`

### 2. Clone & Install Dependencies
```bash
git clone https://github.com/Sohamgor1904/airbnbclone.git
cd airbnbclone
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:
```env
DATABASE_URL="postgresql://neondb_owner:npg_sample123@ep-sample-123456.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

### 4. Database Setup & Seeding
Generate Prisma Client binaries and seed mock data into PostgreSQL:
```bash
npx prisma generate
npx prisma db seed
```

### 5. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.
