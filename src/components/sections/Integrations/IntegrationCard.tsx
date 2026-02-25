"use client";

import { cn } from "@/lib/cn";
import { IntegrationLogo } from "./IntegrationLogo";
import type { Integration } from "./integrationsData";

interface IntegrationCardProps {
  integration: Integration;
  index: number;
  isVisible: boolean;
}

export function IntegrationCard({
  integration,
  index,
  isVisible,
}: IntegrationCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.12] hover:bg-white/[0.06] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)]",
        "hover:-translate-y-1",
        isVisible && "animate-card-reveal"
      )}
      style={{ animationDelay: `${200 + index * 60}ms` }}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-b from-[#3448FF]/[0.04] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] transition-all duration-300 group-hover:bg-white/[0.1] group-hover:scale-110">
        <IntegrationLogo name={integration.logo} className="w-9 h-9" />
      </div>

      {/* Name */}
      <span className="relative text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white">
        {integration.name}
      </span>

      {/* Category tag */}
      <span className="relative rounded-full bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/40 transition-colors duration-300 group-hover:text-white/60">
        {integration.category}
      </span>
    </div>
  );
}
