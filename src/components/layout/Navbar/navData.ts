export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Product",
    dropdown: [
      {
        label: "Prevent",
        href: "#",
        description: "Stop chargebacks before they happen",
        badge: "NEW",
        badgeColor: "bg-emerald-500",
        icon: "shield",
      },
      {
        label: "Automation",
        href: "#",
        description: "Automate your dispute management",
        icon: "zap",
      },
      {
        label: "Alerts",
        href: "#",
        description: "Get notified on dispute activity",
        icon: "bell",
      },
      {
        label: "Insights",
        href: "#",
        description: "Analytics and reporting dashboard",
        badge: "FREE",
        badgeColor: "bg-[#3448FF]",
        icon: "chart",
      },
      {
        label: "Connect",
        href: "#",
        description: "For platforms and marketplaces",
        badge: "FOR PLATFORMS",
        badgeColor: "bg-violet-500",
        icon: "link",
      },
    ],
  },
  {
    label: "Customers",
    dropdown: [
      {
        label: "All Case Studies",
        href: "#",
        description: "See how our customers succeed",
        icon: "users",
      },
      {
        label: "Obvi",
        href: "#",
        description: "Health & wellness brand",
        icon: "star",
      },
      {
        label: "Elementor",
        href: "#",
        description: "Website builder platform",
        icon: "star",
      },
      {
        label: "Wordtune",
        href: "#",
        description: "AI writing assistant",
        icon: "star",
      },
      {
        label: "Kyte",
        href: "#",
        description: "Point of sale solution",
        icon: "star",
      },
    ],
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Integrations",
    dropdown: [
      {
        label: "All Integrations",
        href: "#",
        description: "Browse all available integrations",
        icon: "grid",
      },
      {
        label: "Stripe",
        href: "#",
        description: "Payment processing",
        icon: "credit-card",
      },
      {
        label: "Shopify",
        href: "#",
        description: "E-commerce platform",
        icon: "shopping-bag",
      },
      {
        label: "WooCommerce",
        href: "#",
        description: "WordPress commerce",
        icon: "shopping-cart",
      },
    ],
  },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Blog",
        href: "#",
        description: "Articles and guides",
        icon: "book",
      },
      {
        label: "Webinars",
        href: "#",
        description: "Live and recorded sessions",
        icon: "video",
      },
      {
        label: "Reports",
        href: "#",
        description: "Industry insights and data",
        icon: "file-text",
      },
      {
        label: "Podcast",
        href: "#",
        description: "Listen to expert conversations",
        icon: "mic",
      },
      {
        label: "ROI Calculator",
        href: "#",
        description: "Calculate your potential savings",
        icon: "calculator",
      },
      {
        label: "Reason Codes",
        href: "#",
        description: "Chargeback reason code library",
        icon: "hash",
      },
    ],
  },
  {
    label: "Company",
    dropdown: [
      {
        label: "Who we are",
        href: "#",
        description: "Our mission and team",
        icon: "heart",
      },
      {
        label: "Brand",
        href: "#",
        description: "Brand assets and guidelines",
        icon: "palette",
      },
      {
        label: "Become a Partner",
        href: "#",
        description: "Join our partner program",
        icon: "handshake",
      },
      {
        label: "Careers",
        href: "#",
        description: "Join our growing team",
        icon: "briefcase",
      },
      {
        label: "Contact us",
        href: "#",
        description: "Get in touch",
        icon: "mail",
      },
    ],
  },
];
