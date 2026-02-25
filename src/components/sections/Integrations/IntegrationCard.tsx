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
        "group relative flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.14] hover:bg-white/[0.07] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
        "hover:-translate-y-1",
        isVisible && "animate-card-reveal"
      )}
      style={{ animationDelay: `${150 + index * 60}ms` }}
    >
      {/* Glow overlay on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${integration.color}15 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      {/* Logo */}
      <div className="relative flex h-13 w-13 items-center justify-center rounded-xl bg-white/[0.06] transition-all duration-300 group-hover:bg-white/[0.12] group-hover:scale-110">
        <IntegrationLogo name={integration.logo} className="w-8 h-8" />
      </div>

      {/* Name */}
      <span className="relative text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white text-center">
        {integration.name}
      </span>

      {/* Category tag */}
      <span className="relative rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-semibold text-white/35 transition-colors duration-300 group-hover:text-white/55">
        {integration.category}
      </span>
    </div>
  );
}
