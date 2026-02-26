export interface Feature {
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export const features: Feature[] = [
  {
    title: "AI-Powered Disputes",
    description:
      "Automated evidence collection and compelling response generation that wins more chargebacks with less effort.",
    icon: "brain",
    stat: "3.5x",
    statLabel: "higher win rate",
  },
  {
    title: "Real-Time Alerts",
    description:
      "Get notified the moment a chargeback is filed. Respond faster, recover more revenue before deadlines pass.",
    icon: "bell",
    stat: "<1s",
    statLabel: "alert latency",
  },
  {
    title: "Prevention First",
    description:
      "Stop chargebacks before they happen with intelligent order screening and customer outreach automation.",
    icon: "shield",
    stat: "70%",
    statLabel: "disputes prevented",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Deep insights into dispute patterns, reason codes, and recovery trends to optimize your chargeback strategy.",
    icon: "chart",
    stat: "360°",
    statLabel: "visibility",
  },
  {
    title: "24/7 Monitoring",
    description:
      "Continuous protection around the clock. Our AI never sleeps so you don't have to worry about missed disputes.",
    icon: "clock",
    stat: "99.9%",
    statLabel: "uptime SLA",
  },
  {
    title: "Quick Integration",
    description:
      "Connect your payment processors in minutes, not weeks. Go live with full protection the same day you sign up.",
    icon: "plug",
    stat: "5 min",
    statLabel: "avg. setup time",
  },
];
