export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  badgeColor?: string;
  icon: string;
  stat?: string;
  statSuffix?: string;
  statLabel?: string;
  category?: string;
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
        description:
          "Stop friendly fraud, block digital shoplifters & prevent the next chargeback before it happens.",
        badge: "NEW",
        badgeColor: "bg-lime-400 text-black",
        icon: "shield",
      },
      {
        label: "Automation",
        href: "#",
        description:
          "Fully automated chargeback recovery with 4x ROI guarantee.",
        icon: "zap",
      },
      {
        label: "Alerts",
        href: "#",
        description:
          "Cut 90% of chargebacks before they happen, powered by Visa and Mastercard.",
        icon: "bell",
      },
      {
        label: "Insights",
        href: "#",
        description:
          "Get a bird's-eye view into your payments and chargebacks, all in a single, powerful dashboard.",
        badge: "FREE",
        badgeColor: "border border-white/20 text-white/70",
        icon: "chart",
      },
      {
        label: "Connect",
        href: "#",
        description:
          "Integrate Chargeflow into your platform, either via Embedding, Whitelabel or API.",
        badge: "FOR PLATFORMS",
        badgeColor: "border border-white/20 text-white/70",
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
        label: "obvi.",
        href: "#",
        description: "eCommerce",
        icon: "star",
        stat: "170",
        statSuffix: " %",
        statLabel: "win-rate increase",
        category: "eCommerce",
      },
      {
        label: "elementor",
        href: "#",
        description: "SaaS",
        icon: "star",
        stat: "90",
        statSuffix: " %",
        statLabel: "reduction in time spent managing chargebacks",
        category: "SaaS",
      },
      {
        label: "Fanatics",
        href: "#",
        description: "Marketplace",
        icon: "star",
        stat: "2X",
        statSuffix: "",
        statLabel: "Chargeback Win Rate",
        category: "Marketplace",
      },
      {
        label: "HexClad",
        href: "#",
        description: "Travel",
        icon: "star",
        stat: "328",
        statSuffix: " hrs.",
        statLabel: "and 40 minutes saved",
        category: "Travel",
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
        description: "Choose from hundreds of integrated platforms.",
        icon: "grid",
      },
      {
        label: "Stripe",
        href: "#",
        description: "#1 Chargeback Solution for Stripe Merchants",
        icon: "credit-card",
      },
      {
        label: "Shopify",
        href: "#",
        description: "Powering 30k+ Shopify Merchants",
        icon: "shopping-bag",
      },
      {
        label: "WooCommerce",
        href: "#",
        description: "Native WooCommerce Integration",
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
        label: "Webinars",
        href: "#",
        description: "Live and recorded sessions",
        icon: "video",
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
        label: "Who We Are",
        href: "#",
        description: "The story behind the Chargeflow.",
        icon: "heart",
      },
      {
        label: "Brand",
        href: "#",
        description: "Brand assets and guidelines",
        icon: "palette",
      },
      {
        label: "Careers",
        href: "#",
        description: "Join our growing team",
        badge: "We're Hiring!",
        badgeColor: "bg-[#3448FF] text-white",
        icon: "briefcase",
      },
      {
        label: "Become a Partner",
        href: "#",
        description: "Join our partner program",
        icon: "handshake",
      },
      {
        label: "Contact Us",
        href: "#",
        description: "Get in touch",
        icon: "mail",
      },
    ],
  },
];
