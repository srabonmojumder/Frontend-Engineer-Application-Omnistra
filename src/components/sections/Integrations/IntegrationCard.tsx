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
        "group relative flex flex-col items-center gap-3.5 rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 sm:p-6 backdrop-blur-sm",
        "transition-all duration-300 ease-out",
        "hover:border-white/[0.14] hover:bg-white/[0.07]",
        "hover:shadow-[0_8px_40px_rgba(0,0,0,0.25),0_0_0_1px_rgba(255,255,255,0.06)]",
        "hover:-translate-y-1",
        isVisible && "animate-card-reveal"
      )}
      style={{ animationDelay: `${150 + index * 60}ms` }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${integration.color}18 0%, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/[0.06] transition-all duration-300 group-hover:bg-white/[0.12] group-hover:scale-110">
        <IntegrationLogo name={integration.logo} className="w-7 h-7 sm:w-8 sm:h-8" />
      </div>

      <span className="relative text-[13px] sm:text-sm font-medium text-white/80 transition-colors duration-300 group-hover:text-white text-center leading-snug">
        {integration.name}
      </span>

      <span className="relative rounded-full bg-white/[0.06] px-3 py-1 text-[10px] font-semibold text-white/35 transition-colors duration-300 group-hover:text-white/55">
        {integration.category}
      </span>
    </div>
  );
}
