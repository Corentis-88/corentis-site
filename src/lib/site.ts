export const siteConfig = {
  name: "Corentis",
  shortName: "Corentis",
  title: "Corentis | Turn AI policy into governed action",
  description:
    "Corentis is the policy-control and evidence layer for AI-assisted regulated workflows, helping organisations connect policy, review gates, escalation logic, and evidence.",
  url: "https://corentis.ai",
  email: "hello@corentis.co.uk",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/platform/", label: "Platform" },
  { href: "/financial-services/", label: "Financial Services" },
  { href: "/life-sciences/", label: "Life Sciences" },
  { href: "/investors/", label: "Investors" },
  { href: "/government-funding/", label: "Funding" },
  { href: "/contact/", label: "Contact" },
];

export const platformModules = [
  {
    title: "Policy Composer",
    description:
      "Convert plain-English policy into operational control plans for AI-assisted work.",
  },
  {
    title: "Human approval workflows",
    description:
      "Route sensitive outputs to named reviewers with thresholds, escalation paths, and recorded decisions.",
  },
  {
    title: "Workflow visibility",
    description:
      "Track workflow events, interventions, exceptions, and review activity without relying on retrospective reconstruction.",
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
  "Investor overview",
  "Assurance / governance summary",
  "Government / funding readiness",
  "Financial services workflow brief",
  "Life sciences bounded use case brief",
  "Sample evidence pack",
  "Design partnership or other conversation",
] as const;

export type InterestType = (typeof interestTypes)[number];
