export const siteConfig = {
  name: "Corentis",
  shortName: "Corentis",
  title: "Corentis | The policy plane for regulated AI",
  description:
    "Corentis is the control and assurance layer for regulated AI deployment, helping organisations govern high-stakes workflows with testing, approvals, monitoring, and evidence.",
  url: "https://corentis.ai",
  email: "hello@corentis.co.uk",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/platform/", label: "Platform" },
  { href: "/financial-services/", label: "Financial Services" },
  { href: "/life-sciences/", label: "Life Sciences" },
  { href: "/investors/", label: "Investors" },
  { href: "/contact/", label: "Contact" },
];

export const platformModules = [
  {
    title: "Pre-deployment testing",
    description:
      "Stress prompts, edge cases, and workflow scenarios before a model touches production work.",
  },
  {
    title: "Human approval workflows",
    description:
      "Route sensitive outputs to named reviewers with thresholds, escalation paths, and recorded decisions.",
  },
  {
    title: "Runtime monitoring",
    description:
      "Track live AI behaviour, intervene when policy conditions fail, and preserve context around every event.",
  },
  {
    title: "Policy and control mapping",
    description:
      "Translate internal policy and operating controls into practical rules for high-stakes AI use.",
  },
  {
    title: "Evidence generation",
    description:
      "Generate structured evidence from tests, approvals, incidents, and oversight actions as work happens.",
  },
  {
    title: "Audit-ready exports",
    description:
      "Export decision records, test packs, and control mappings in formats that suit governance and assurance teams.",
  },
];

export const interestTypes = [
  "Financial Services",
  "Clinical Trials",
  "Investor",
  "Partner",
  "Other",
] as const;

export type InterestType = (typeof interestTypes)[number];
