'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-airbnb-light border-t border-airbnb-border px-10 py-8 text-sm text-airbnb-charcoal">
      <div className="mx-auto max-w-[1280px] space-y-8">
        {/* Links Grid */}
        <div className="grid grid-cols-4 gap-8 pb-8 border-b border-airbnb-border">
          <div className="space-y-3">
            <h3 className="font-bold text-sm text-airbnb-charcoal">Support</h3>
            <ul className="space-y-2 text-airbnb-muted">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">AirCover</a></li>
              <li><a href="#" className="hover:underline">Anti-discrimination</a></li>
              <li><a href="#" className="hover:underline">Disability support</a></li>
              <li><a href="#" className="hover:underline">Cancellation options</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-airbnb-charcoal">Hosting</h3>
            <ul className="space-y-2 text-airbnb-muted">
              <li><a href="#" className="hover:underline">Airbnb your home</a></li>
              <li><a href="#" className="hover:underline">AirCover for Hosts</a></li>
              <li><a href="#" className="hover:underline">Hosting resources</a></li>
              <li><a href="#" className="hover:underline">Community forum</a></li>
              <li><a href="#" className="hover:underline">Hosting responsibly</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-airbnb-charcoal">Airbnb</h3>
            <ul className="space-y-2 text-airbnb-muted">
              <li><a href="#" className="hover:underline">Newsroom</a></li>
              <li><a href="#" className="hover:underline">New features</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Investors</a></li>
              <li><a href="#" className="hover:underline">Airbnb.org emergency stays</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-sm text-airbnb-charcoal">Community</h3>
            <ul className="space-y-2 text-airbnb-muted">
              <li><a href="#" className="hover:underline">Airbnb.org</a></li>
              <li><a href="#" className="hover:underline">Combating discrimination</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex items-center justify-between text-xs text-airbnb-charcoal">
          <div className="flex items-center gap-2">
            <span>© 2026 Airbnb, Inc.</span>
            <span>·</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span>·</span>
            <a href="#" className="hover:underline">Terms</a>
            <span>·</span>
            <a href="#" className="hover:underline">Sitemap</a>
            <span>·</span>
            <a href="#" className="hover:underline">Company details</a>
          </div>

          <div className="flex items-center gap-6 font-semibold">
            <button className="flex items-center gap-2 hover:underline">
              <Globe className="h-4 w-4" />
              <span>English (IN)</span>
            </button>
            <button className="hover:underline">
              ₹ INR
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
