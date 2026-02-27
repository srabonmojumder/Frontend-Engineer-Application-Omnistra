"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { IntegrationIcon } from "./IntegrationIcon";
import { ConnectionLines } from "./ConnectionLines";
import { integrations } from "./integrationsData";

/* ── Types ──────────────────────────────────────────── */

interface IconLayoutItem {
  integrationIndex: number;
  x: number;
  y: number;
  size: "sm" | "md" | "lg";
}

/* ── Layout configuration ───────────────────────────── */

const iconLayout: IconLayoutItem[] = [
  { integrationIndex: 9,  x: 20, y: 11, size: "md" },
  { integrationIndex: 10, x: 44, y: 10, size: "md" },
  { integrationIndex: 7,  x: 59, y: 12, size: "md" },
  { integrationIndex: 11, x: 80, y: 11, size: "sm" },
  { integrationIndex: 1,  x: 25, y: 30, size: "lg" },
  { integrationIndex: 0,  x: 80, y: 28, size: "lg" },
  { integrationIndex: 6,  x: 32, y: 52, size: "md" },
  { integrationIndex: 4,  x: 26, y: 73, size: "md" },
  { integrationIndex: 2,  x: 53, y: 78, size: "lg" },
  { integrationIndex: 12, x: 80, y: 72, size: "md" },
];

/* ── Math helpers ───────────────────────────────────── */

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/* ── Component ──────────────────────────────────────── */

export function Integrations() {
  const { ref: scrollRef, progress } = useScrollProgress<HTMLElement>();

  const { ref: viewRef, isInView } = useInView<HTMLDivElement>({
    threshold: 0.05,
    once: true,
  });

  // ── Derived animation values ────────────────────────

  const contentOpacity = Math.max(0, 1 - progress * 3);
  const contentScale = lerp(1, 0.96, Math.min(progress * 2, 1));

  const brandT = Math.max(0, (progress - 0.7) / 0.3);
  const brandEased = easeOutCubic(brandT);
  const brandOpacity = brandEased;
  const brandScale = lerp(0.55, 1, brandEased);

  return (
    <section
      ref={scrollRef}
      id="integrations"
      className="relative h-[200vh] md:h-[250vh] lg:h-[280vh] bg-[#eef0f8] pt-24 sm:pt-32 "
    >
      {/* Sticky viewport */}
      <div
        ref={viewRef}
        className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-[#eef0f8]"
      >
        {/* ── Background effects ───────────────────────── */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#3448FF]/[0.03] blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-violet-400/[0.03] blur-[100px]" />
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(180,186,215,0.3) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* ── Network connection lines ───────────────── */}
        <ConnectionLines progress={progress} isVisible={isInView} />

        {/* ── Scattered integration icons ────────────── */}
        {iconLayout.map((item, i) => (
          <IntegrationIcon
            key={integrations[item.integrationIndex].name}
            integration={integrations[item.integrationIndex]}
            startPosition={{ x: item.x, y: item.y }}
            progress={progress}
            size={item.size}
            index={i}
            isVisible={isInView}
          />
        ))}

        {/* ── Center content: badge + heading + subtitle + CTA ── */}
        <div
          className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-6"
          style={{
            opacity: contentOpacity,
            transform: `scale(${contentScale})`,
            willChange: "transform, opacity",
          }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d5dbe5] bg-white px-4 py-1.5 shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3448FF]" />
            <span className="text-xs font-medium tracking-wide text-[#6b7280] uppercase">
              Integrations
            </span>
          </div>

          <h2
            className={cn(
              "mb-4 max-w-xl text-center font-bold tracking-tight text-[#0a1a4a]",
              "text-[1.75rem] leading-[1.2] sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]"
            )}
          >
            One platform,
            <br />
            <span className="bg-gradient-to-r from-[#3448FF] to-violet-500 bg-clip-text text-transparent">
              unlimited integrations
            </span>
          </h2>

          <p className="mx-auto mb-8 max-w-md text-center text-sm leading-relaxed text-[#6b7280] sm:text-base">
            Connect your entire payment stack in minutes. Seamlessly integrate
            with the tools you already use.
          </p>

          <a
            href="#"
            className={cn(
              "pointer-events-auto inline-flex items-center gap-2.5 rounded-full",
              "bg-[#3448FF] px-7 py-3.5 text-sm font-semibold text-white",
              "shadow-[0_2px_12px_rgba(52,72,255,0.35)]",
              "transition-all duration-300",
              "hover:bg-[#2a3ee0] hover:shadow-[0_4px_20px_rgba(52,72,255,0.5)]"
            )}
          >
            View all integrations
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
              <svg
                className="h-3 w-3"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4.5 3l3 3-3 3" />
              </svg>
            </span>
          </a>
        </div>

        {/* ── Brand logo (appears after convergence) ─── */}
        <div
          className="absolute z-20"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(-50%, -50%) scale(${brandScale})`,
            opacity: brandOpacity,
            willChange: "transform, opacity",
          }}
        >
          <div
            className={cn(
              "flex items-center justify-center rounded-2xl sm:rounded-3xl",
              "bg-[#1a3eff] shadow-[0_8px_40px_rgba(26,62,255,0.3)]",
              "h-20 w-20 sm:h-24 sm:w-24"
            )}
          >
            <svg
              className="h-10 w-10 sm:h-12 sm:w-12 shrink-0"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <rect width="32" height="32" rx="8" fill="#3448FF" />
              <path
                d="M10 16C10 12.6863 12.6863 10 16 10C17.5913 10 19.0348 10.6028 20.1262 11.5945"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M22 16C22 19.3137 19.3137 22 16 22C14.4087 22 12.9652 21.3972 11.8738 20.4055"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="20.5" cy="11.5" r="1.5" fill="white" />
              <circle cx="11.5" cy="20.5" r="1.5" fill="white" />
            </svg>
          </div>
        </div>

        {/* ── Center vertical dashed line (final state) ─ */}
        <svg
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity: brandOpacity * 0.4 }}
          aria-hidden="true"
        >
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="rgba(180, 186, 215, 0.5)"
            strokeWidth="1"
            strokeDasharray="6 4"
          />
        </svg>
      </div>
    </section>
  );
}
