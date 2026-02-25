"use client";

import { cn } from "@/lib/cn";
import { IntegrationLogo } from "./IntegrationLogo";
import type { Integration } from "./integrationsData";

interface OrbitHubProps {
  integrations: Integration[];
  isVisible: boolean;
}

/**
 * Domu.ai-inspired orbital integration visualization.
 * Shows integration logos orbiting around a central "hub" node,
 * with concentric rings and counter-rotating elements.
 */
export function OrbitHub({ integrations, isVisible }: OrbitHubProps) {
  const innerRing = integrations.slice(0, 4);
  const outerRing = integrations.slice(4, 8);

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[480px]",
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
      )}
    >
      {/* Outermost decorative ring */}
      <div className="absolute inset-0 rounded-full border border-white/[0.04]" />

      {/* Outer orbit ring */}
      <div className="absolute inset-[10%] rounded-full border border-dashed border-white/[0.06]" />

      {/* Inner orbit ring */}
      <div className="absolute inset-[28%] rounded-full border border-dashed border-white/[0.08]" />

      {/* Pulse rings from center */}
      <div
        className="absolute inset-[38%] rounded-full border border-[#3448FF]/20"
        style={{ animation: "pulse-ring 3s ease-out infinite" }}
      />
      <div
        className="absolute inset-[38%] rounded-full border border-[#3448FF]/15"
        style={{ animation: "pulse-ring 3s ease-out 1s infinite" }}
      />
      <div
        className="absolute inset-[38%] rounded-full border border-[#3448FF]/10"
        style={{ animation: "pulse-ring 3s ease-out 2s infinite" }}
      />

      {/* Central hub */}
      <div className="absolute inset-[38%] flex items-center justify-center rounded-full bg-gradient-to-br from-[#3448FF] to-[#5B6AFF] shadow-[0_0_60px_rgba(52,72,255,0.3)]">
        <div className="flex flex-col items-center gap-1">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
            Hub
          </span>
        </div>
      </div>

      {/* Inner orbit logos */}
      {innerRing.map((integration, i) => {
        const angle = (i / innerRing.length) * 360 - 45;
        const radius = 30;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={integration.name}
            className={cn(
              "absolute flex items-center justify-center",
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              transitionDelay: `${400 + i * 120}ms`,
            }}
          >
            {/* Connector line */}
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{
                width: `${radius * 0.7}%`,
                transformOrigin: "right center",
                transform: `rotate(${angle + 180}deg)`,
                right: "50%",
              }}
            />

            <div className="group relative animate-float" style={{ animationDelay: `${i * 1.5}s` }}>
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.06] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] hover:scale-110 sm:h-14 sm:w-14"
              >
                <IntegrationLogo name={integration.logo} className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {integration.name}
              </span>
            </div>
          </div>
        );
      })}

      {/* Outer orbit logos */}
      {outerRing.map((integration, i) => {
        const angle = (i / outerRing.length) * 360 + 22.5;
        const radius = 44;
        const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
        const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

        return (
          <div
            key={integration.name}
            className={cn(
              "absolute flex items-center justify-center",
              "transition-all duration-700 ease-out",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
            )}
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
              transitionDelay: `${700 + i * 120}ms`,
            }}
          >
            <div className="group relative animate-float" style={{ animationDelay: `${i * 2 + 0.5}s` }}>
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.04] backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/[0.1] hover:scale-110 sm:h-13 sm:w-13"
              >
                <IntegrationLogo name={integration.logo} className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-medium text-white/40 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {integration.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
