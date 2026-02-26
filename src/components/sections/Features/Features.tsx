"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { Container } from "@/components/ui/Container";
import { FeatureIcon } from "./FeatureIcon";
import { features } from "./featuresData";

export function Features() {
  const { ref, isInView } = useInView<HTMLElement>({
    threshold: 0.1,
    once: true,
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#060b24] py-24 sm:py-32 lg:py-40"
    >
      {/* ── Background effects ─────────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top gradient fade from integrations section */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#eef0f8] to-transparent" />
        {/* Radial glow */}
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3448FF]/[0.06] blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-500/[0.04] blur-[100px]" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <Container className="relative z-10">
        {/* ── Section header ───────────────────────────── */}
        <div
          className={cn(
            "mx-auto mb-16 max-w-2xl text-center sm:mb-20",
            "transition-all duration-700 ease-out",
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3448FF]" />
            <span className="text-xs font-medium tracking-wide text-white/60 uppercase">
              Why Chargeflow
            </span>
          </div>

          <h2 className="mb-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] lg:leading-[1.12]">
            Purpose-built for{" "}
            <span className="bg-gradient-to-r from-[#3448FF] to-violet-400 bg-clip-text text-transparent">
              chargeback management
            </span>
          </h2>

          <p className="mx-auto max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
            Everything you need to prevent, fight, and win disputes — powered by
            AI that learns from millions of transactions.
          </p>
        </div>

        {/* ── Feature cards grid ───────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 lg:gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] p-7 sm:p-8",
                "backdrop-blur-sm transition-all duration-500 ease-out",
                "hover:border-[#3448FF]/30 hover:bg-white/[0.05]",
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              )}
              style={{
                transitionDelay: isInView ? `${150 + i * 80}ms` : "0ms",
              }}
            >
              {/* Card hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3448FF]/[0.08] to-transparent" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#3448FF]/10 text-[#6e8aff] transition-colors duration-300 group-hover:bg-[#3448FF]/20 group-hover:text-[#8da3ff]">
                  <FeatureIcon icon={feature.icon} className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="mb-2.5 text-lg font-semibold text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-sm leading-relaxed text-white/40">
                  {feature.description}
                </p>

                {/* Stat */}
                {feature.stat && (
                  <div className="flex items-baseline gap-2 border-t border-white/[0.06] pt-5">
                    <span className="text-2xl font-bold tracking-tight text-[#3448FF]">
                      {feature.stat}
                    </span>
                    <span className="text-xs font-medium text-white/30 uppercase tracking-wide">
                      {feature.statLabel}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ───────────────────────────────── */}
        <div
          className={cn(
            "mt-16 flex justify-center sm:mt-20",
            "transition-all duration-700 ease-out delay-700",
            isInView
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          )}
        >
          <a
            href="#"
            className={cn(
              "inline-flex items-center gap-2.5 rounded-full",
              "border border-white/10 bg-white/[0.05] px-7 py-3.5",
              "text-sm font-semibold text-white/80",
              "transition-all duration-300",
              "hover:border-[#3448FF]/40 hover:bg-[#3448FF]/10 hover:text-white"
            )}
          >
            Explore all features
            <svg
              className="h-4 w-4"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
}
