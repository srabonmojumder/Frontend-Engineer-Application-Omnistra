"use client";

import { cn } from "@/lib/cn";
import { IntegrationLogo } from "./IntegrationLogo";
import type { Integration } from "./integrationsData";

/* ── Types ──────────────────────────────────────────── */

export interface IconPosition {
  x: number; // percentage 0-100
  y: number; // percentage 0-100
}

export interface IntegrationIconProps {
  integration: Integration;
  /** Scattered starting position (% of container) */
  startPosition: IconPosition;
  /** Convergence target (defaults to center) */
  centerPosition?: IconPosition;
  /** Scroll progress 0→1 */
  progress: number;
  /** Visual size variant */
  size?: "sm" | "md" | "lg";
  /** Stagger index for entrance animation delay */
  index: number;
  /** Whether the section has entered the viewport */
  isVisible: boolean;
}

/* ── Size map ───────────────────────────────────────── */

const sizeClasses = {
  sm: {
    card: "h-[52px] w-[52px] sm:h-[60px] sm:w-[60px] rounded-xl",
    logo: "h-7 w-7 sm:h-8 sm:w-8",
  },
  md: {
    card: "h-[60px] w-[60px] sm:h-[68px] sm:w-[68px] rounded-xl sm:rounded-2xl",
    logo: "h-8 w-8 sm:h-9 sm:w-9",
  },
  lg: {
    card: "h-[68px] w-[68px] sm:h-[76px] sm:w-[76px] rounded-2xl",
    logo: "h-9 w-9 sm:h-10 sm:w-10",
  },
} as const;

/* ── Math helpers ───────────────────────────────────── */

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* ── Component ──────────────────────────────────────── */

export function IntegrationIcon({
  integration,
  startPosition,
  centerPosition = { x: 50, y: 50 },
  progress,
  size = "md",
  index,
  isVisible,
}: IntegrationIconProps) {
  const { card, logo } = sizeClasses[size];

  // Ease the raw scroll progress for natural feel
  const eased = easeOutCubic(progress);

  // Position: interpolate from scattered → center
  const x = lerp(startPosition.x, centerPosition.x, eased);
  const y = lerp(startPosition.y, centerPosition.y, eased);

  // Scale: hold at 1 until 50%, then shrink to 0.12
  const scaleT = Math.max(0, (eased - 0.5) * 2);
  const scale = lerp(1, 0.12, scaleT);

  // Opacity: hold at 1 until 55%, then fade to 0
  const opacityT = Math.max(0, (eased - 0.55) * 2.2);
  const opacity = lerp(1, 0, Math.min(opacityT, 1));

  return (
    <div
      className={cn("absolute z-10", isVisible && "animate-card-reveal")}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        animationDelay: `${200 + index * 80}ms`,
      }}
    >
      {/* Inner wrapper handles scroll-driven scale + opacity */}
      <div
        style={{
          transform: `translate(-50%, -50%) scale(${scale})`,
          opacity,
          willChange: "transform, opacity",
        }}
      >
        <div
          className={cn(
            "flex items-center justify-center bg-white",
            "shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.06)]",
            "transition-shadow duration-300",
            "hover:shadow-[0_2px_8px_rgba(0,0,0,0.06),0_8px_30px_rgba(0,0,0,0.1)]",
            card
          )}
        >
          <IntegrationLogo name={integration.logo} className={logo} />
        </div>
      </div>
    </div>
  );
}
