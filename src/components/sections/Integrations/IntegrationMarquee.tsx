"use client";

import { cn } from "@/lib/cn";
import { IntegrationLogo } from "./IntegrationLogo";
import type { Integration } from "./integrationsData";

interface IntegrationMarqueeProps {
  integrations: Integration[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  isVisible: boolean;
  className?: string;
}

const speedMap = {
  slow: "50s",
  normal: "35s",
  fast: "25s",
};

export function IntegrationMarquee({
  integrations,
  direction = "left",
  speed = "normal",
  isVisible,
  className,
}: IntegrationMarqueeProps) {
  const items = [...integrations, ...integrations];

  return (
    <div
      className={cn(
        "marquee-track relative overflow-hidden",
        "transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#08144f] to-transparent sm:w-32 lg:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#08144f] to-transparent sm:w-32 lg:w-40" />

      <div
        className={cn(
          "flex w-max gap-3 sm:gap-4",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        )}
        style={{ "--marquee-duration": speedMap[speed] } as React.CSSProperties}
      >
        {items.map((integration, i) => (
          <div
            key={`${integration.name}-${i}`}
            className="group flex shrink-0 items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 sm:py-3 backdrop-blur-sm transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.07]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] transition-colors duration-300 group-hover:bg-white/[0.12]">
              <IntegrationLogo name={integration.logo} className="h-6 w-6" />
            </div>
            <span className="text-[13px] sm:text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white/90 whitespace-nowrap">
              {integration.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
