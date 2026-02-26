"use client";

import { cn } from "@/lib/cn";
import { NavIcon } from "./NavIcon";
import { navItems } from "./navData";
import type { NavDropdownItem } from "./navData";

interface MegaMenuProps {
  activeMenu: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

/* ── Accent color maps ─────────────────────────────── */

const productAccents: Record<string, string> = {
  Prevent: "#84cc16",
  Automation: "#3448FF",
  Alerts: "#f59e0b",
  Insights: "#3448FF",
  Connect: "#8b5cf6",
};

const customerAccents: Record<string, string> = {
  "All Case Studies": "#3448FF",
  "obvi.": "#ffffff",
  elementor: "#ff6e6e",
  Fanatics: "#16a34a",
  HexClad: "#f97316",
};

const integrationAccents: Record<string, string> = {
  "All Integrations": "#3448FF",
  Stripe: "#635BFF",
  Shopify: "#96bf48",
  WooCommerce: "#7f54b3",
};

const resourceAccents: Record<string, string> = {
  Blog: "#3448FF",
  Reports: "#14b8a6",
  Podcast: "#8b5cf6",
  Webinars: "#f43f5e",
  "ROI Calculator": "#10b981",
  "Reason Codes": "#f59e0b",
};

const companyAccents: Record<string, string> = {
  "Who We Are": "#3448FF",
  Brand: "#8b5cf6",
  Careers: "#3448FF",
  "Become a Partner": "#10b981",
  "Contact Us": "#f59e0b",
};

/* ── Shared decorative helpers ──────────────────────── */

function DiamondDot({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute w-2 h-2 rotate-45 rounded-[1px] bg-white/[0.12] transition-colors duration-300",
        className
      )}
    />
  );
}

function OrbitRings({
  className,
  ringCount = 3,
}: {
  className?: string;
  ringCount?: number;
}) {
  const sizes = [
    "w-20 h-20",
    "w-32 h-32",
    "w-44 h-44",
    "w-56 h-56",
    "w-72 h-72",
  ];
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center pointer-events-none",
        className
      )}
    >
      {Array.from({ length: ringCount }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "absolute rounded-full border border-dashed transition-colors duration-300",
            i === 0 ? "border-white/[0.08]" : "border-white/[0.05]",
            sizes[i] || sizes[sizes.length - 1]
          )}
        />
      ))}
    </div>
  );
}

function CenterLogo({ size = "sm" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };
  return (
    <div
      className={cn(
        "rounded-full bg-gradient-to-b from-white/[0.12] to-white/[0.04] flex items-center justify-center border border-white/[0.08]",
        sizeClasses[size]
      )}
    >
      <svg
        width={size === "lg" ? 28 : size === "md" ? 22 : 16}
        height={size === "lg" ? 28 : size === "md" ? 22 : 16}
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          d="M10 16C10 12.6863 12.6863 10 16 10C17.5913 10 19.0348 10.6028 20.1262 11.5945"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M22 16C22 19.3137 19.3137 22 16 22C14.4087 22 12.9652 21.3972 11.8738 20.4055"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="20.5" cy="11.5" r="1.5" fill="white" fillOpacity="0.5" />
        <circle cx="11.5" cy="20.5" r="1.5" fill="white" fillOpacity="0.5" />
      </svg>
    </div>
  );
}

/* ── Card wrapper with accent hover glow ───────────── */

function MegaCard({
  href,
  className,
  children,
  accent,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  accent?: string;
}) {
  const color = accent || "#3448FF";

  return (
    <a
      href={href}
      className={cn(
        "group/card relative block rounded-2xl border border-white/[0.07] bg-[#0f1019] overflow-hidden",
        "transition-all duration-300",
        className
      )}
      style={
        {
          "--accent": color,
          "--accent-glow": `${color}18`,
          "--accent-border": `${color}40`,
        } as React.CSSProperties
      }
    >
      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 100%, ${color}10, transparent 60%)`,
        }}
      />
      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px ${color}30, 0 0 20px -5px ${color}20`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </a>
  );
}

/* ── Product Panel ──────────────────────────────────── */

function ProductPanel({ items }: { items: NavDropdownItem[] }) {
  return (
    <div className="grid grid-cols-5 gap-3 p-4 mega-card-stagger">
      {items.map((item, index) => {
        const accent = productAccents[item.label] || "#3448FF";
        return (
          <MegaCard
            key={item.label}
            href={item.href}
            accent={accent}
            className="flex flex-col p-6 min-h-[340px]"
          >
            {/* Title + Badge */}
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-white text-[17px] font-semibold transition-colors duration-300 group-hover/card:text-white">
                {item.label}
              </h3>
              {item.badge && (
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider transition-all duration-300",
                    item.badgeColor || "bg-white/10 text-white"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-white/50 text-[13px] leading-relaxed mb-auto transition-colors duration-300 group-hover/card:text-white/70">
              {item.description}
            </p>

            {/* Decorative bottom graphic */}
            <div className="relative flex items-center justify-center mt-6 h-28">
              <DiamondDot className="top-2 left-4 group-hover/card:!bg-[var(--accent)]/40" />
              <DiamondDot className="bottom-6 right-6 group-hover/card:!bg-[var(--accent)]/30" />
              {index === 0 && (
                <DiamondDot className="top-8 right-2 group-hover/card:!bg-[var(--accent)]/30" />
              )}

              <OrbitRings ringCount={2} />

              {/* Icon circle — accent glow on hover */}
              <div
                className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 bg-gradient-to-b from-white/[0.1] to-white/[0.04] border-white/[0.08] group-hover/card:border-transparent"
                style={
                  {
                    "--tw-shadow": "none",
                  } as React.CSSProperties
                }
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${accent}25, ${accent}08)`,
                    boxShadow: `0 0 20px ${accent}30`,
                  }}
                />
                <NavIcon
                  name={item.icon}
                  className="w-5 h-5 text-white/60 transition-colors duration-300 relative z-10"
                />
                <style>{`.group\\/card:hover .icon-${index} { color: ${accent} !important; }`}</style>
              </div>
            </div>
          </MegaCard>
        );
      })}
    </div>
  );
}

/* ── Customers Panel ────────────────────────────────── */

function CustomersPanel({ items }: { items: NavDropdownItem[] }) {
  const allStudies = items[0];
  const caseStudies = items.slice(1);

  return (
    <div className="grid grid-cols-5 gap-3 p-4 mega-card-stagger">
      {/* All Case Studies card */}
      <MegaCard
        href={allStudies.href}
        accent={customerAccents["All Case Studies"]}
        className="flex flex-col p-6 min-h-[340px]"
      >
        <h3 className="text-white text-[17px] font-semibold mb-6">
          {allStudies.label}
        </h3>

        {/* Floating brand logos — brighten on hover */}
        <div className="relative flex-1 flex items-center justify-center">
          <div className="absolute top-0 right-6 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#ff6e6e]/10 group-hover/card:border-[#ff6e6e]/20">
            <span className="text-white/40 text-[8px] font-bold transition-colors duration-300 group-hover/card:text-[#ff6e6e]">
              e
            </span>
          </div>
          <div className="absolute top-10 left-2 w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#3448FF]/10 group-hover/card:border-[#3448FF]/20">
            <svg width="12" height="12" viewBox="0 0 32 32" fill="none">
              <path
                d="M10 16C10 12.6863 12.6863 10 16 10C17.5913 10 19.0348 10.6028 20.1262 11.5945"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-white/40 transition-colors duration-300 group-hover/card:text-[#3448FF]"
              />
              <path
                d="M22 16C22 19.3137 19.3137 22 16 22C14.4087 22 12.9652 21.3972 11.8738 20.4055"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                className="text-white/40 transition-colors duration-300 group-hover/card:text-[#3448FF]"
              />
            </svg>
          </div>

          {/* Brand names — brighten on hover */}
          <div className="absolute top-4 left-10">
            <span className="text-white/30 text-sm font-semibold italic transition-colors duration-300 group-hover/card:text-white/70">
              Caraway
            </span>
          </div>
          <div className="absolute bottom-10 left-4">
            <span className="text-white/40 text-lg font-bold transition-colors duration-300 group-hover/card:text-white/80">
              obvi.
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="text-white/25 text-xs font-bold tracking-wider transition-colors duration-300 group-hover/card:text-white/60">
              Huel
            </span>
          </div>
          <div className="absolute bottom-16 left-16">
            <span className="text-white/20 text-[10px] font-bold italic transition-colors duration-300 group-hover/card:text-[#96bf48]/60">
              w
            </span>
          </div>
          <div className="absolute top-16 right-2">
            <span className="text-white/20 text-xs font-bold tracking-widest transition-colors duration-300 group-hover/card:text-white/50">
              HC
            </span>
          </div>

          <DiamondDot className="bottom-2 left-10" />
          <DiamondDot className="top-6 right-14" />
        </div>
      </MegaCard>

      {/* Case Study stat cards */}
      {caseStudies.map((item) => {
        const accent = customerAccents[item.label] || "#ffffff";
        return (
          <MegaCard
            key={item.label}
            href={item.href}
            accent={accent}
            className="flex flex-col p-6 min-h-[340px]"
          >
            {/* Brand logo at top */}
            <div className="mb-auto">
              <BrandLogo name={item.label} />
            </div>

            {/* Decorative elements */}
            <div className="relative flex-1 flex flex-col items-center justify-center">
              <DiamondDot className="top-0 right-2" />

              {/* Dashed arc decoration — color on hover */}
              <div
                className="absolute w-32 h-32 rounded-full border border-dashed border-white/[0.06] transition-colors duration-300"
                style={
                  {
                    "--hover-border": `${accent}20`,
                  } as React.CSSProperties
                }
              />

              {/* Stat — accent color on hover */}
              <div className="relative z-10 text-center">
                <div className="flex items-baseline justify-center">
                  <span
                    className="text-white text-[42px] font-bold leading-none tracking-tight transition-colors duration-300"
                    style={{ "--stat-color": accent } as React.CSSProperties}
                  >
                    {item.stat}
                  </span>
                  {item.statSuffix && (
                    <span className="text-white/50 text-lg font-medium ml-1 transition-colors duration-300">
                      {item.statSuffix}
                    </span>
                  )}
                </div>
                <p className="text-white/40 text-[12px] mt-2 leading-snug max-w-[140px] mx-auto transition-colors duration-300 group-hover/card:text-white/60">
                  {item.statLabel}
                </p>
              </div>
            </div>

            {/* Category tag */}
            <div className="flex justify-end mt-auto pt-4">
              <DiamondDot className="bottom-8 left-4" />
              <span
                className="rounded-full border px-3 py-1 text-[11px] font-medium transition-all duration-300 border-white/[0.1] text-white/40 group-hover/card:text-white/70"
                style={
                  {
                    "--tag-border": `${accent}30`,
                  } as React.CSSProperties
                }
              >
                {item.category}
              </span>
            </div>
          </MegaCard>
        );
      })}
    </div>
  );
}

function BrandLogo({ name }: { name: string }) {
  switch (name) {
    case "obvi.":
      return (
        <span className="text-white text-xl font-bold transition-all duration-300 group-hover/card:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          obvi.
        </span>
      );
    case "elementor":
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-white/90 flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#ff6e6e] group-hover/card:shadow-[0_0_12px_rgba(255,110,110,0.4)]">
            <span className="text-black text-[10px] font-bold transition-colors duration-300 group-hover/card:text-white">
              e
            </span>
          </div>
          <span className="text-white text-base font-semibold transition-all duration-300 group-hover/card:drop-shadow-[0_0_8px_rgba(255,110,110,0.3)]">
            elementor
          </span>
        </div>
      );
    case "Fanatics":
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-white text-xs transition-colors duration-300 group-hover/card:text-[#16a34a]">
            ★
          </span>
          <span className="text-white text-base font-bold italic transition-all duration-300 group-hover/card:drop-shadow-[0_0_8px_rgba(22,163,74,0.3)]">
            Fanatics
          </span>
        </div>
      );
    case "HexClad":
      return (
        <div className="flex items-center gap-1.5">
          <span className="text-white text-[10px] transition-colors duration-300 group-hover/card:text-[#f97316]">
            ⬡
          </span>
          <span className="text-white text-sm font-bold tracking-wider uppercase transition-all duration-300 group-hover/card:drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
            HexClad
          </span>
        </div>
      );
    default:
      return (
        <span className="text-white text-base font-semibold">{name}</span>
      );
  }
}

/* ── Integrations Panel ─────────────────────────────── */

function IntegrationsPanel({ items }: { items: NavDropdownItem[] }) {
  const allIntegrations = items[0];
  const integrations = items.slice(1);

  return (
    <div className="grid grid-cols-[1fr_0.7fr] gap-3 p-4 mega-card-stagger">
      {/* All Integrations — large card with orbital graphic */}
      <MegaCard
        href={allIntegrations.href}
        accent={integrationAccents["All Integrations"]}
        className="p-6 min-h-[380px] flex flex-col"
      >
        <h3 className="text-white text-[17px] font-semibold mb-1">
          {allIntegrations.label}
        </h3>
        <p className="text-white/40 text-[13px] leading-relaxed mb-6 transition-colors duration-300 group-hover/card:text-white/60">
          {allIntegrations.description}
        </p>

        {/* Orbital graphic with platform icons */}
        <div className="relative flex-1 flex items-center justify-center">
          <OrbitRings ringCount={4} />
          <PlatformIcons />
          <div className="relative z-10">
            <CenterLogo size="lg" />
          </div>
        </div>
      </MegaCard>

      {/* Right column: stacked integration cards */}
      <div className="flex flex-col gap-3">
        {integrations.map((item) => {
          const accent = integrationAccents[item.label] || "#3448FF";
          return (
            <MegaCard
              key={item.label}
              href={item.href}
              accent={accent}
              className="flex items-center justify-between p-5 flex-1"
            >
              <div>
                <h4 className="text-white text-[15px] font-semibold mb-1">
                  {item.label}
                </h4>
                <p className="text-white/40 text-[12px] leading-relaxed transition-colors duration-300 group-hover/card:text-white/60">
                  {item.description}
                </p>
              </div>
              <IntegrationLogo name={item.label} />
            </MegaCard>
          );
        })}
      </div>
    </div>
  );
}

function PlatformIcons() {
  const positions = [
    { top: "10%", left: "12%", icon: "⚡" },
    { top: "20%", left: "28%", icon: "W" },
    { top: "35%", left: "10%", icon: "🏪" },
    { top: "55%", left: "15%", icon: "S" },
    { top: "72%", left: "22%", icon: "B" },
    { top: "15%", right: "25%", icon: "R" },
    { top: "10%", right: "12%", icon: "a" },
    { top: "30%", right: "8%", icon: "💳" },
    { top: "50%", right: "10%", icon: "M" },
    { top: "70%", right: "18%", icon: "≡" },
    { top: "80%", right: "30%", icon: "C" },
    { top: "25%", left: "18%", icon: "⊞" },
    { top: "45%", left: "25%", icon: "●" },
    { top: "60%", right: "28%", icon: "b" },
    { top: "75%", left: "35%", icon: "e" },
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center transition-all duration-300 group-hover/card:bg-white/[0.09] group-hover/card:border-white/[0.14]"
          style={{
            top: pos.top,
            left: pos.left,
            right: pos.right,
          }}
        >
          <span className="text-white/40 text-[9px] font-medium transition-colors duration-300 group-hover/card:text-white/70">
            {pos.icon}
          </span>
        </div>
      ))}
      {/* Connection lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 400"
      >
        <line
          x1="100"
          y1="100"
          x2="200"
          y2="200"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
        <line
          x1="300"
          y1="100"
          x2="200"
          y2="200"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
        <line
          x1="100"
          y1="300"
          x2="200"
          y2="200"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
        <line
          x1="300"
          y1="300"
          x2="200"
          y2="200"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
        />
      </svg>
    </>
  );
}

function IntegrationLogo({ name }: { name: string }) {
  switch (name) {
    case "Stripe":
      return (
        <span className="text-white/20 text-2xl font-bold italic tracking-tight transition-all duration-300 group-hover/card:text-[#635BFF] group-hover/card:drop-shadow-[0_0_12px_rgba(99,91,255,0.4)]">
          stripe
        </span>
      );
    case "Shopify":
      return (
        <div className="w-12 h-12 rounded-lg bg-white/[0.04] flex items-center justify-center transition-all duration-300 group-hover/card:bg-[#96bf48]/15 group-hover/card:shadow-[0_0_16px_rgba(150,191,72,0.2)]">
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
            <path
              d="M20.5 5.5C20.5 5.5 20.3 5.4 20.1 5.4C19.9 5.4 15.4 5.1 15.4 5.1L13.1 2.8C12.9 2.6 12.4 2.6 12.2 2.7L10.7 3.2C10.4 2.3 9.9 1.5 9.2 0.9C8.3 0.1 7.2 -0.2 6.2 0.1C6.1 0.1 6 0.2 5.9 0.2C5.3 -0.5 4.5 -0.1 3.9 0.5C2.8 1.7 2.4 3.4 2.7 5L1.1 5.5C0.5 5.7 0.3 5.9 0.3 6.5L0 21.8L15.9 24.5L23.9 22.2C23.9 22.2 20.5 5.7 20.5 5.5Z"
              className="transition-all duration-300 fill-white/20 group-hover/card:fill-[#96bf48]"
            />
          </svg>
        </div>
      );
    case "WooCommerce":
      return (
        <span className="text-white/20 text-xl font-bold tracking-tight transition-all duration-300 group-hover/card:text-[#7f54b3] group-hover/card:drop-shadow-[0_0_12px_rgba(127,84,179,0.4)]">
          woo
        </span>
      );
    default:
      return null;
  }
}

/* ── Resources Panel ────────────────────────────────── */

function ResourcesPanel({ items }: { items: NavDropdownItem[] }) {
  const mainResources = items.slice(0, 4);
  const tools = items.slice(4);

  return (
    <div className="grid grid-cols-[1fr_1fr_1fr_1fr_0.9fr] gap-3 p-4 mega-card-stagger">
      {/* Main resource cards */}
      {mainResources.map((item) => {
        const accent = resourceAccents[item.label] || "#3448FF";
        return (
          <MegaCard
            key={item.label}
            href={item.href}
            accent={accent}
            className="flex flex-col p-6 min-h-[340px]"
          >
            <h3 className="text-white text-[17px] font-semibold mb-auto">
              {item.label}
            </h3>

            {/* Decorative circular pattern + icon */}
            <div className="relative flex items-center justify-center mt-6 flex-1">
              {/* Target rings */}
              <div className="absolute w-40 h-40 rounded-full border border-white/[0.04] transition-colors duration-300" />
              <div className="absolute w-32 h-32 rounded-full border border-white/[0.05] transition-colors duration-300" />
              <div className="absolute w-24 h-24 rounded-full border border-white/[0.06] transition-colors duration-300" />
              <div className="absolute w-16 h-16 rounded-full border border-dashed border-white/[0.06] transition-colors duration-300" />

              {/* Radial lines */}
              <svg
                className="absolute w-40 h-40 pointer-events-none"
                viewBox="0 0 160 160"
              >
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <line
                    key={angle}
                    x1="80"
                    y1="80"
                    x2={80 + 70 * Math.cos((angle * Math.PI) / 180)}
                    y2={80 + 70 * Math.sin((angle * Math.PI) / 180)}
                    stroke="rgba(255,255,255,0.03)"
                    strokeWidth="1"
                  />
                ))}
              </svg>

              <DiamondDot className="top-4 left-1/2 -translate-x-1/2" />
              <DiamondDot className="bottom-4 left-1/2 -translate-x-1/2" />

              {/* Center icon — accent color on hover */}
              <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full border transition-all duration-300 bg-gradient-to-b from-white/[0.08] to-white/[0.03] border-white/[0.08]">
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${accent}30, ${accent}08)`,
                    boxShadow: `0 0 24px ${accent}25`,
                  }}
                />
                <NavIcon
                  name={item.icon}
                  className="w-6 h-6 text-white/50 transition-colors duration-300 relative z-10 group-hover/card:text-white/90"
                />
              </div>
            </div>
          </MegaCard>
        );
      })}

      {/* Tool cards (stacked) */}
      <div className="flex flex-col gap-3">
        {tools.map((item) => {
          const accent = resourceAccents[item.label] || "#3448FF";
          return (
            <MegaCard
              key={item.label}
              href={item.href}
              accent={accent}
              className="flex-1 p-5 flex flex-col"
            >
              <h4 className="text-white text-[15px] font-semibold mb-3">
                {item.label}
              </h4>

              {item.label === "ROI Calculator" ? (
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 transition-all duration-300 group-hover/card:border-[#10b981]/20 group-hover/card:bg-[#10b981]/[0.04]">
                    <span className="text-white/60 text-[13px]">1,020</span>
                    <span className="text-white/30 text-[11px] font-medium uppercase tracking-wide transition-colors duration-300 group-hover/card:text-[#10b981]/60">
                      Hours
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 transition-all duration-300 group-hover/card:border-[#10b981]/20 group-hover/card:bg-[#10b981]/[0.04]">
                    <span className="text-white/60 text-[13px]">$7,500</span>
                    <span className="text-white/30 text-[11px] font-medium uppercase tracking-wide transition-colors duration-300 group-hover/card:text-[#10b981]/60">
                      USD
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mt-auto">
                  <div className="flex items-center rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 transition-all duration-300 group-hover/card:border-[#f59e0b]/20 group-hover/card:bg-[#f59e0b]/[0.04]">
                    <span className="text-white/30 text-[12px] mr-1">
                      Enter Code:
                    </span>
                    <span className="text-white/50 text-[13px]">12.7</span>
                    <svg
                      className="w-4 h-4 text-white/30 ml-auto transition-colors duration-300 group-hover/card:text-[#f59e0b]/60"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                </div>
              )}
            </MegaCard>
          );
        })}
      </div>
    </div>
  );
}

/* ── Company Panel ──────────────────────────────────── */

function CompanyPanel({ items }: { items: NavDropdownItem[] }) {
  const whoWeAre = items[0];
  const rightCards = items.slice(1);

  return (
    <div className="grid grid-cols-[1.2fr_1fr_1fr] gap-3 p-4 mega-card-stagger">
      {/* Who We Are — large card */}
      <MegaCard
        href={whoWeAre.href}
        accent={companyAccents["Who We Are"]}
        className="row-span-2 p-6 min-h-[340px] flex flex-col"
      >
        <h3 className="text-white text-[17px] font-semibold mb-1">
          {whoWeAre.label}
        </h3>
        <p className="text-white/40 text-[13px] leading-relaxed transition-colors duration-300 group-hover/card:text-white/60">
          {whoWeAre.description}
        </p>

        {/* Orbital decorative graphic */}
        <div className="relative flex-1 flex items-center justify-center mt-4">
          <OrbitRings ringCount={4} />
          <DiamondDot className="top-8 left-1/4" />
          <DiamondDot className="bottom-12 right-1/4" />
          <DiamondDot className="top-1/2 left-8" />
          <DiamondDot className="bottom-8 left-1/3" />
          <DiamondDot className="top-12 right-1/3" />
          <div className="relative z-10">
            <CenterLogo size="md" />
          </div>
        </div>
      </MegaCard>

      {/* Right side — 2x2 grid */}
      {rightCards.map((item) => {
        const accent = companyAccents[item.label] || "#3448FF";
        return (
          <MegaCard
            key={item.label}
            href={item.href}
            accent={accent}
            className="p-5 min-h-[162px] flex flex-col"
          >
            <div className="flex items-center gap-2 mb-auto">
              <h4 className="text-white text-[15px] font-semibold">
                {item.label}
              </h4>
              {item.badge && (
                <span
                  className={cn(
                    "rounded-full px-2.5 py-0.5 text-[10px] font-bold transition-all duration-300",
                    item.badgeColor || "bg-white/10 text-white",
                    "group-hover/card:shadow-[0_0_12px_rgba(52,72,255,0.3)]"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </div>

            {/* Decorative pattern */}
            <div className="relative flex items-end justify-end flex-1 mt-2 overflow-hidden">
              <CompanyCardDecoration icon={item.icon} accent={accent} />
            </div>
          </MegaCard>
        );
      })}
    </div>
  );
}

function CompanyCardDecoration({
  icon,
  accent,
}: {
  icon: string;
  accent: string;
}) {
  return (
    <div className="relative w-full h-20 flex items-center justify-center">
      {/* Grid dots pattern */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 80">
        <circle
          cx="140"
          cy="40"
          r="30"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className="transition-all duration-300"
        />
        <circle
          cx="140"
          cy="40"
          r="18"
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
          strokeDasharray="3 3"
          className="transition-all duration-300"
        />
        <circle
          cx="160"
          cy="15"
          r="1.5"
          fill="rgba(255,255,255,0.08)"
          className="transition-all duration-300"
        />
        <circle
          cx="120"
          cy="60"
          r="1.5"
          fill="rgba(255,255,255,0.08)"
          className="transition-all duration-300"
        />
        <circle
          cx="175"
          cy="55"
          r="1.5"
          fill="rgba(255,255,255,0.06)"
          className="transition-all duration-300"
        />
      </svg>
      <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 bg-white/[0.05] border-white/[0.08]">
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle, ${accent}25, ${accent}05)`,
            boxShadow: `0 0 16px ${accent}20`,
          }}
        />
        <NavIcon
          name={icon}
          className="w-4 h-4 text-white/30 transition-colors duration-300 relative z-10 group-hover/card:text-white/70"
        />
      </div>
    </div>
  );
}

/* ── Main MegaMenu ──────────────────────────────────── */

export function MegaMenu({
  activeMenu,
  onMouseEnter,
  onMouseLeave,
}: MegaMenuProps) {
  const menuData = navItems.find((item) => item.label === activeMenu);
  if (!menuData?.dropdown || activeMenu === "Pricing") return null;

  return (
    <div
      className={cn(
        "absolute top-full left-0 right-0 pt-3 z-50",
        "transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top",
        activeMenu
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 -translate-y-2 scale-[0.97] pointer-events-none"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="rounded-2xl bg-[#0a0b14] border border-white/[0.06] overflow-hidden shadow-[0_25px_80px_-12px_rgba(0,0,0,0.6)]">
          {activeMenu === "Product" && (
            <ProductPanel items={menuData.dropdown} />
          )}
          {activeMenu === "Customers" && (
            <CustomersPanel items={menuData.dropdown} />
          )}
          {activeMenu === "Integrations" && (
            <IntegrationsPanel items={menuData.dropdown} />
          )}
          {activeMenu === "Resources" && (
            <ResourcesPanel items={menuData.dropdown} />
          )}
          {activeMenu === "Company" && (
            <CompanyPanel items={menuData.dropdown} />
          )}
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-20 bg-gradient-to-t from-white/[0.03] to-transparent blur-2xl pointer-events-none" />
    </div>
  );
}
