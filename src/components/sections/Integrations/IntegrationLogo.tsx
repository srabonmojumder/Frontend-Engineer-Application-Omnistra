interface IntegrationLogoProps {
  name: string;
  className?: string;
}

/** SVG-based integration logos for crisp rendering at any size */
export function IntegrationLogo({ name, className = "w-8 h-8" }: IntegrationLogoProps) {
  const logos: Record<string, React.ReactNode> = {
    stripe: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#635BFF" />
        <path d="M18.84 15.27c0-1.07.88-1.48 2.33-1.48 2.09 0 4.72.63 6.81 1.76V9.79c-2.28-.91-4.54-1.27-6.81-1.27-5.58 0-9.29 2.91-9.29 7.77 0 7.58 10.43 6.37 10.43 9.64 0 1.27-1.1 1.68-2.64 1.68-2.28 0-5.21-.94-7.52-2.2v5.86c2.56 1.1 5.14 1.57 7.52 1.57 5.72 0 9.64-2.83 9.64-7.75-.02-8.18-10.47-6.72-10.47-9.82z" fill="white" />
      </svg>
    ),
    easypay: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#00B67A" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="system-ui">E</text>
      </svg>
    ),
    fiserv: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#FF6600" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">F</text>
      </svg>
    ),
    payliance: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#1B365D" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui">P</text>
      </svg>
    ),
    repay: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#0066CC" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="system-ui">R</text>
      </svg>
    ),
    paynearme: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#00A86B" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">PN</text>
      </svg>
    ),
    salesforce: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#00A1E0" />
        <path d="M16.67 13.33a5.5 5.5 0 0 1 9.8 1.2A4.5 4.5 0 0 1 27 23H13a4 4 0 0 1-.67-7.95 5.5 5.5 0 0 1 4.34-1.72z" fill="white" />
      </svg>
    ),
    hubspot: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#FF7A59" />
        <circle cx="20" cy="20" r="6" fill="white" />
        <circle cx="20" cy="20" r="3" fill="#FF7A59" />
        <line x1="20" y1="10" x2="20" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <circle cx="26" cy="28" r="2" fill="white" />
      </svg>
    ),
    zendesk: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#03363D" />
        <path d="M20 14l8 12H12l8-12z" fill="white" />
        <circle cx="20" cy="24" r="3" fill="#03363D" />
      </svg>
    ),
    nice: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#0052CC" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="10" fontWeight="800" fontFamily="system-ui">NICE</text>
      </svg>
    ),
    genesys: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#FF4F1F" />
        <text x="20" y="26" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="system-ui">G</text>
      </svg>
    ),
    five9: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#E31937" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="system-ui">5|9</text>
      </svg>
    ),
    ringcentral: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#F26722" />
        <circle cx="20" cy="20" r="8" stroke="white" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="20" r="3" fill="white" />
      </svg>
    ),
    twilio: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#F22F46" />
        <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2" fill="none" />
        <circle cx="16" cy="16" r="2" fill="white" />
        <circle cx="24" cy="16" r="2" fill="white" />
        <circle cx="16" cy="24" r="2" fill="white" />
        <circle cx="24" cy="24" r="2" fill="white" />
      </svg>
    ),
    sbt: (
      <svg className={className} viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="8" fill="#2D5F9A" />
        <text x="20" y="25" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="system-ui">SBT</text>
      </svg>
    ),
  };

  return <>{logos[name] || null}</>;
}
