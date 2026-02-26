interface FeatureIconProps {
  icon: string;
  className?: string;
}

export function FeatureIcon({ icon, className = "h-6 w-6" }: FeatureIconProps) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (icon) {
    case "brain":
      return (
        <svg {...props}>
          <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
          <path d="M9 21h6" />
          <path d="M10 17v4" />
          <path d="M14 17v4" />
          <path d="M12 2v4" />
          <path d="M8 6l2 2" />
          <path d="M16 6l-2 2" />
        </svg>
      );
    case "bell":
      return (
        <svg {...props}>
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          <circle cx="18" cy="4" r="3" fill="currentColor" stroke="none" opacity="0.3" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "chart":
      return (
        <svg {...props}>
          <path d="M3 3v18h18" />
          <path d="M7 16l4-8 4 4 5-9" />
          <circle cx="20" cy="7" r="1.5" fill="currentColor" stroke="none" opacity="0.3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "plug":
      return (
        <svg {...props}>
          <path d="M12 2v6" />
          <path d="M8 2v6" />
          <path d="M16 2v6" />
          <rect x="4" y="8" width="16" height="4" rx="1" />
          <path d="M8 12v4a4 4 0 0 0 8 0v-4" />
          <path d="M12 20v2" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
}
