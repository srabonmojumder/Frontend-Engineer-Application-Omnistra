"use client";

import { useState, useMemo } from "react";
import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { IntegrationCard } from "./IntegrationCard";
import { OrbitHub } from "./OrbitHub";
import { IntegrationMarquee } from "./IntegrationMarquee";
import {
  integrations,
  categories,
  marqueeRow1,
  marqueeRow2,
  type IntegrationCategory,
} from "./integrationsData";

export function Integrations() {
  const [activeCategory, setActiveCategory] =
    useState<IntegrationCategory>("All");

  const { ref: sectionRef, isInView } = useInView<HTMLElement>({
    threshold: 0.05,
  });

  const { ref: gridRef, isInView: isGridInView } = useInView<HTMLDivElement>({
    threshold: 0.1,
  });

  const filteredIntegrations = useMemo(
    () =>
      activeCategory === "All"
        ? integrations
        : integrations.filter((i) => i.category === activeCategory),
    [activeCategory]
  );

  return (
    <section
      ref={sectionRef}
      id="integrations"
      className="relative overflow-hidden bg-[#08144f] py-24 sm:py-32"
    >
      {/* ── Background effects ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top-center glow */}
        <div className="absolute left-1/2 top-0 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[#3448FF]/[0.08] blur-[140px]" />

        {/* Bottom-right accent */}
        <div className="absolute bottom-0 right-0 h-[500px] w-[700px] translate-x-1/4 translate-y-1/4 rounded-full bg-violet-500/[0.04] blur-[120px]" />

        {/* Bottom-left accent */}
        <div className="absolute bottom-0 left-0 h-[400px] w-[500px] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#3448FF]/[0.05] blur-[100px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* ── Section Header ──────────────────────────── */}
        <div
          className={cn(
            "mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ease-out",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          )}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3448FF] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Integrations
            </span>
          </div>

          <h2 className="mb-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Seamlessly connects with{" "}
            <span className="bg-gradient-to-r from-[#3448FF] via-[#6B7AFF] to-violet-400 bg-clip-text text-transparent">
              your stack
            </span>
          </h2>

          <p className="text-base leading-relaxed text-white/45 sm:text-lg">
            Integrate with your existing payment processors, CRMs, and
            collections platforms to create a unified workflow — no
            disruptions, no silos.
          </p>
        </div>

        {/* ── Orbit Visualization ─────────────────────── */}
        <div
          className={cn(
            "mb-20 transition-all duration-1000 ease-out delay-200",
            isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <OrbitHub
            integrations={integrations.slice(0, 8)}
            isVisible={isInView}
          />
        </div>

        {/* ── Marquee Rows ────────────────────────────── */}
        <div className="mb-20 flex flex-col gap-4">
          <IntegrationMarquee
            integrations={marqueeRow1}
            direction="left"
            speed="normal"
            isVisible={isInView}
          />
          <IntegrationMarquee
            integrations={marqueeRow2}
            direction="right"
            speed="slow"
            isVisible={isInView}
          />
        </div>

        {/* ── Category Filters ────────────────────────── */}
        <div
          ref={gridRef}
          className={cn(
            "mb-10 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-100 ease-out",
            isGridInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer",
                activeCategory === category
                  ? "bg-[#3448FF] text-white shadow-[0_0_24px_rgba(52,72,255,0.35)]"
                  : "bg-white/[0.04] text-white/50 hover:bg-white/[0.08] hover:text-white/70 border border-white/[0.06]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ── Integration Grid ────────────────────────── */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4">
          {filteredIntegrations.map((integration, index) => (
            <IntegrationCard
              key={integration.name}
              integration={integration}
              index={index}
              isVisible={isGridInView}
            />
          ))}
        </div>

        {/* ── Bottom CTA ──────────────────────────────── */}
        <div
          className={cn(
            "mt-16 flex flex-col items-center gap-4 text-center transition-all duration-700 delay-300 ease-out",
            isGridInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          )}
        >
          <p className="text-sm text-white/35">
            Don&apos;t see your platform? We support custom integrations.
          </p>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.04] px-6 py-3 text-sm font-medium text-white/70 transition-all duration-300 hover:border-[#3448FF]/50 hover:bg-[#3448FF]/10 hover:text-white"
          >
            Request an Integration
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
