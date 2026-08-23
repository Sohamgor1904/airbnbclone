'use client';

import React from 'react';
import { Search, Globe, Menu, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-airbnb-border bg-white px-10 py-4 transition-shadow">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <svg
            className="h-8 w-auto text-airbnb-rausch"
            viewBox="0 0 32 32"
            fill="currentColor"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.608-3.29 8.806-8.5 8.806-2.8 0-5.15-1.12-7-3.04-1.85 1.92-4.2 3.04-7 3.04-5.21 0-8.5-4.198-8.5-8.806 0-1.28.28-2.58 1.116-4.064l.205-.347c.986-2.297 5.146-11.006 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.237 0-2.235.655-3.264 2.493l-.382.735c-1.92 3.765-6.046 12.417-7.013 14.673l-.134.323c-.636 1.488-.807 2.298-.807 3.776 0 3.456 2.44 6.806 6.5 6.806 2.415 0 4.542-1.144 6.1-3.08l.5.62c1.558 1.936 3.685 3.08 6.1 3.08 4.06 0 6.5-3.35 6.5-6.806 0-1.478-.171-2.288-.807-3.776l-.134-.323c-.967-2.256-5.093-10.908-7.013-14.673l-.382-.735C18.235 3.655 17.237 3 16 3zm0 11c2.76 0 5 2.24 5 5 0 2.22-1.43 4.1-3.41 4.76l-.42.12C16.73 23.96 16.37 24 16 24c-2.76 0-5-2.24-5-5 0-2.76 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3 0 1.66 1.34 3 3 3s3-1.34 3-3c0-1.66-1.34-3-3-3z" />
          </svg>
          <span className="text-xl font-bold tracking-tight text-airbnb-rausch hidden lg:inline">
            airbnb
          </span>
        </div>

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
