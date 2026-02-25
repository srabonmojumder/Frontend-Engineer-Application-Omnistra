"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function AnnouncementBar() {
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  const message = "Announcing our $35M Series A funding to take down friendly fraud";
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="flex shrink-0 items-center gap-6 px-6">
      <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden="true" />
      <span>{message}</span>
      <a
        href="#"
        className="inline-flex items-center gap-1 font-semibold underline decoration-white/40 underline-offset-2 transition-colors hover:decoration-white/80"
      >
        Read more
        <svg
          className="h-3.5 w-3.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>
    </span>
  ));

  return (
    <div
      className={cn(
        "relative z-[60] flex h-9 items-center overflow-hidden",
        "bg-gradient-to-r from-[#1a1a2e] via-[#0d0d1a] to-[#1a1a2e]",
        "text-[11.5px] font-medium tracking-wide text-white/80"
      )}
    >
      <div className="animate-announcement-marquee flex w-max items-center whitespace-nowrap">
        {items}
        {items}
      </div>

      <button
        onClick={() => setIsDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded-full text-white/40 transition-colors hover:text-white/80 cursor-pointer"
        aria-label="Dismiss announcement"
      >
        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
  );
}
