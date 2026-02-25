export interface Integration {
  name: string;
  category: IntegrationCategory;
  logo: string;
  color: string;
}

export type IntegrationCategory =
  | "All"
  | "Payment Processors"
  | "CRM"
  | "Contact Center"
  | "Communication";

export const categories: IntegrationCategory[] = [
  "All",
  "Payment Processors",
  "CRM",
  "Contact Center",
  "Communication",
];

export const integrations: Integration[] = [
  { name: "Stripe", category: "Payment Processors", logo: "stripe", color: "#635BFF" },
  { name: "Easypay", category: "Payment Processors", logo: "easypay", color: "#00B67A" },
  { name: "Fiserv", category: "Payment Processors", logo: "fiserv", color: "#FF6600" },
  { name: "Payliance", category: "Payment Processors", logo: "payliance", color: "#1B365D" },
  { name: "Repay", category: "Payment Processors", logo: "repay", color: "#0066CC" },
  { name: "PayNearMe", category: "Payment Processors", logo: "paynearme", color: "#00A86B" },
  { name: "Salesforce", category: "CRM", logo: "salesforce", color: "#00A1E0" },
  { name: "HubSpot", category: "CRM", logo: "hubspot", color: "#FF7A59" },
  { name: "Zendesk", category: "CRM", logo: "zendesk", color: "#03363D" },
  { name: "NICE", category: "Contact Center", logo: "nice", color: "#0052CC" },
  { name: "Genesys", category: "Contact Center", logo: "genesys", color: "#FF4F1F" },
  { name: "Five9", category: "Contact Center", logo: "five9", color: "#E31937" },
  { name: "RingCentral", category: "Communication", logo: "ringcentral", color: "#F26722" },
  { name: "Twilio", category: "Communication", logo: "twilio", color: "#F22F46" },
  { name: "Solutions by Text", category: "Communication", logo: "sbt", color: "#2D5F9A" },
];

/** First row of marquee integrations */
export const marqueeRow1 = integrations.slice(0, 8);

/** Second row of marquee integrations (reversed order for visual variety) */
export const marqueeRow2 = [...integrations.slice(8), ...integrations.slice(0, 3)].reverse();
