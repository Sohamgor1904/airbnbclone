'use client';

import React from 'react';
import { Star, GraduationCap, PartyPopper, ShieldCheck } from 'lucide-react';

interface CoHost {
  id: string;
  name: string;
  avatarUrl?: string | null;
  initial?: string | null;
}

interface MeetYourHostProps {
  hostName: string;
  hostAvatar: string;
  hostJoined: string;
  hostReviewsCount: number;
  hostRating: number;
  hostYears: number;
  hostBorn: string;
  hostSchool: string;
  hostResponseRate: string;
  hostResponseTime: string;
  coHosts: CoHost[];
}

export const MeetYourHost: React.FC<MeetYourHostProps> = ({
  hostName,
  hostAvatar,
  hostReviewsCount,
  hostRating,
  hostYears,
  hostBorn,
  hostSchool,
  hostResponseRate,
  hostResponseTime,
  coHosts,
}) => {
  return (
    <div className="border-b border-airbnb-border py-12 space-y-8">
      <h2 className="text-2xl font-semibold text-airbnb-charcoal">
        Meet your host
      </h2>

      <div className="grid grid-cols-12 gap-16 items-start">
        {/* Left Column: Host Card & Personal Details */}
        <div className="col-span-5 space-y-6">
          {/* Host Card Box */}
          <div className="rounded-3xl border border-airbnb-border/80 bg-white p-8 shadow-card flex items-center justify-between">
            {/* Host Logo & Name */}
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="relative">
                <div className="h-24 w-24 rounded-full bg-[#0D3B2E] text-white flex items-center justify-center p-2 font-bold text-center leading-tight shadow-sm overflow-hidden border border-airbnb-border">
                  <span className="text-[11px] uppercase tracking-widest font-extrabold text-[#D4AF37]">
                    Mirashya<br />Homes
                  </span>
                </div>
                {/* Verified Check Badge */}
                <div className="absolute bottom-0 right-0 rounded-full bg-[#E00B41] p-1.5 text-white shadow-md border-2 border-white">
                  <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 16 16">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                  </svg>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-airbnb-charcoal">
                  {hostName}
                </h3>
                <p className="text-sm font-semibold text-airbnb-muted">Host</p>
              </div>
            </div>

            {/* Right Side Stats Column */}
            <div className="space-y-4 text-left border-l border-airbnb-border/60 pl-8">
              <div>
                <div className="text-xl font-extrabold text-airbnb-charcoal">
                  {hostReviewsCount.toLocaleString()}
                </div>
                <div className="text-xs text-airbnb-muted">Reviews</div>
              </div>
              <div className="border-t border-airbnb-border/60 pt-3">
                <div className="flex items-center gap-1 text-xl font-extrabold text-airbnb-charcoal">
                  <span>{hostRating.toFixed(2)}</span>
                  <Star className="h-4 w-4 fill-current text-airbnb-charcoal" />
                </div>
                <div className="text-xs text-airbnb-muted">Rating</div>
              </div>
              <div className="border-t border-airbnb-border/60 pt-3">
                <div className="text-xl font-extrabold text-airbnb-charcoal">
                  {hostYears}
                </div>
                <div className="text-xs text-airbnb-muted">Years hosting</div>
              </div>
            </div>
          </div>

          {/* Lines Below Card */}
          <div className="space-y-4 pt-2">
            <div className="flex items-center gap-3 text-base text-airbnb-charcoal">
              <PartyPopper className="h-5 w-5 text-airbnb-charcoal" />
              <span>{hostBorn}</span>
            </div>
            <div className="flex items-center gap-3 text-base text-airbnb-charcoal">
              <GraduationCap className="h-5 w-5 text-airbnb-charcoal" />
              <span>Where I went to school: {hostSchool}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Co-Hosts & Host Details */}
        <div className="col-span-7 space-y-8">
          {/* Co-Hosts Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-airbnb-charcoal">Co-Hosts</h3>
            <div className="grid grid-cols-3 gap-y-4 gap-x-6">
              {coHosts.map((coHost) => (
                <div key={coHost.id} className="flex items-center gap-3">
                  {coHost.avatarUrl ? (
                    <img
                      src={coHost.avatarUrl}
                      alt={coHost.name}
                      className="h-10 w-10 rounded-full object-cover border border-airbnb-border shrink-0"
                    />
                  ) : (
                    <div className="h-10 w-10 rounded-full bg-pink-100 text-pink-700 font-bold text-sm flex items-center justify-center border border-pink-200 shrink-0">
                      {coHost.initial || coHost.name.charAt(0)}
                    </div>
                  )}
                  <span className="text-sm font-semibold text-airbnb-charcoal truncate">
                    {coHost.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Host Details */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg font-bold text-airbnb-charcoal">Host details</h3>
            <div className="space-y-1 text-base text-airbnb-charcoal">
              <p>Response rate: {hostResponseRate}</p>
              <p>Responds {hostResponseTime}</p>
            </div>

            <button className="rounded-xl bg-gray-100 hover:bg-gray-200 border border-black px-6 py-3 text-base font-semibold text-airbnb-charcoal transition active:scale-95">
              Message host
            </button>
          </div>

          {/* Safety Note */}
          <div className="flex items-start gap-3 pt-4 border-t border-airbnb-border/60">
            <ShieldCheck className="h-5 w-5 text-airbnb-charcoal shrink-0 mt-0.5" />
            <p className="text-xs text-airbnb-muted leading-relaxed">
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
