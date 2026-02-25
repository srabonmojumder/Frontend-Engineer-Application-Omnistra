export interface Integration {
  name: string;
  category: IntegrationCategory;
  logo: string;
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
  // Payment Processors
  { name: "Stripe", category: "Payment Processors", logo: "stripe" },
  { name: "Easypay", category: "Payment Processors", logo: "easypay" },
  { name: "Fiserv", category: "Payment Processors", logo: "fiserv" },
  { name: "Payliance", category: "Payment Processors", logo: "payliance" },
  { name: "Repay", category: "Payment Processors", logo: "repay" },
  { name: "PayNearMe", category: "Payment Processors", logo: "paynearme" },

  // CRM
  { name: "Salesforce", category: "CRM", logo: "salesforce" },
  { name: "HubSpot", category: "CRM", logo: "hubspot" },
  { name: "Zendesk", category: "CRM", logo: "zendesk" },

  // Contact Center
  { name: "NICE", category: "Contact Center", logo: "nice" },
  { name: "Genesys", category: "Contact Center", logo: "genesys" },
  { name: "Five9", category: "Contact Center", logo: "five9" },

  // Communication
  { name: "RingCentral", category: "Communication", logo: "ringcentral" },
  { name: "Twilio", category: "Communication", logo: "twilio" },
  { name: "Solutions by Text", category: "Communication", logo: "sbt" },
];
