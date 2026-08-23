'use client';

import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-airbnb-border bg-white px-10 py-4 transition-shadow">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        {/* Logo Asset */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <img
            src="/logo.png"
            alt="Airbnb"
            className="h-8 w-auto object-contain"
          />
        </a>

        {/* Search Bar Pill */}
        <div className="flex items-center gap-3 rounded-full border border-airbnb-border px-4 py-2 shadow-sm transition hover:shadow-md cursor-pointer">
          <button className="text-sm font-semibold text-airbnb-charcoal px-2">
            Anywhere
          </button>
          <span className="h-4 w-[1px] bg-airbnb-border" />
          <button className="text-sm font-semibold text-airbnb-charcoal px-2">
            Any week
          </button>
          <span className="h-4 w-[1px] bg-airbnb-border" />
          <button className="text-sm font-normal text-airbnb-muted px-2">
            Add guests
          </button>
          <div className="rounded-full bg-airbnb-rausch p-2 text-white">
            <Search className="h-3.5 w-3.5 stroke-[3]" />
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-2">
          <button className="rounded-full px-4 py-2.5 text-sm font-semibold text-airbnb-charcoal hover:bg-airbnb-light transition">
            Airbnb your home
          </button>
          <button className="rounded-full p-3 text-airbnb-charcoal hover:bg-airbnb-light transition">
            <Globe className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-3 rounded-full border border-airbnb-border p-1.5 pl-3 hover:shadow-md transition cursor-pointer">
            <Menu className="h-4 w-4 text-airbnb-charcoal" />
            <div className="rounded-full bg-airbnb-muted/30 p-1 text-white">
              <User className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
