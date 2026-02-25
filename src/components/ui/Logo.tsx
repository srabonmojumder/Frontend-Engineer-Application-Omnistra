import { cn } from "@/lib/cn";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <a href="/" className={cn("flex items-center gap-2.5", className)} aria-label="Chargeflow Home">
      {/* Chargeflow-inspired logo mark */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        className="shrink-0"
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
      <span className="text-lg font-bold tracking-tight">
        chargeflow
      </span>
    </a>
  );
}
