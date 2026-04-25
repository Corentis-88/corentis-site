export type PackSlug =
  | "investor-overview"
  | "assurance-summary"
  | "financial-services-workflow-brief"
  | "life-sciences-brief"
  | "sample-evidence-pack";

export type RequestType =
  | "Investor overview"
  | "Assurance / governance summary"
  | "Government / funding readiness"
  | "Financial services workflow brief"
  | "Life sciences bounded use case brief"
  | "Sample evidence pack"
  | "Design partnership or other conversation";

export type PackRequest = {
  slug: PackSlug;
  requestType: RequestType;
  title: string;
  description: string;
  ctaLabel: string;
  successLabel: string;
  successHeading: string;
  successDescription: string;
  successFollowUp: string;
  fileName: string;
  downloadHref: string;
};

export type RequestOption = {
  requestSlug: string;
  requestType: RequestType;
  title: string;
  description: string;
  ctaLabel: string;
  formHeading: string;
  formHint: string;
  successHeading: string;
  successDescription: string;
  successFollowUp: string;
  successLabel?: string;
  successHref?: string;
  packSlug?: PackSlug;
};

export const packRequests: Record<PackSlug, PackRequest> = {
  "investor-overview": {
    slug: "investor-overview",
    requestType: "Investor overview",
    title: "Investor Overview",
    description: "A commercially literate pack for investors, angels, and advisors assessing category need, wedge, and route to scale.",
    ctaLabel: "Request investor overview",
    successLabel: "Download investor overview",
    successHeading: "Your investor overview is ready",
    successDescription:
      "This pack is designed to support an early but serious investor conversation around category need, product logic, initial wedge, and near-term validation.",
    successFollowUp:
      "If the thesis resonates, the natural next step is a focused conversation about workflow wedge, commercial path, and what the company is validating now.",
    fileName: "corentis-investor-overview.pdf",
    downloadHref: "/packs/corentis-investor-overview.pdf",
  },
  "assurance-summary": {
    slug: "assurance-summary",
    requestType: "Assurance / governance summary",
    title: "Assurance / Governance Summary",
    description: "A grounded governance pack for assurance, public-interest, audit, and review-focused readers.",
    ctaLabel: "Request assurance summary",
    successLabel: "Download assurance summary",
    successHeading: "Your assurance summary is ready",
    successDescription:
      "This pack is intended to make Corentis easier to assess from a governance, assurance, or public-interest perspective, with careful scope and clear claim boundaries.",
    successFollowUp:
      "If it would be helpful, Corentis can continue the conversation around oversight logic, evidence structure, and why bounded deployment matters in practice.",
    fileName: "corentis-assurance-governance-summary.pdf",
    downloadHref: "/packs/corentis-assurance-governance-summary.pdf",
  },
  "financial-services-workflow-brief": {
    slug: "financial-services-workflow-brief",
    requestType: "Financial services workflow brief",
    title: "Financial Services Workflow Brief",
    description: "A buyer-facing workflow brief for operations, conduct, risk, compliance, and transformation readers.",
    ctaLabel: "Request financial-services walkthrough",
    successLabel: "Download workflow brief",
    successHeading: "Your financial services workflow brief is ready",
    successDescription:
      "This brief is built to help teams picture where Corentis sits in an operational workflow, what gets checked, where people intervene, and what evidence can be exported afterwards.",
    successFollowUp:
      "A useful next step is a workflow discussion around one operational use case, such as complaints triage, vulnerable-customer escalation, or a similarly review-heavy process.",
    fileName: "corentis-financial-services-workflow-brief.pdf",
    downloadHref: "/packs/corentis-financial-services-workflow-brief.pdf",
  },
  "life-sciences-brief": {
    slug: "life-sciences-brief",
    requestType: "Life sciences bounded use case brief",
    title: "Life Sciences / Bounded Use Case Brief",
    description: "A careful operational brief for life sciences teams evaluating bounded, review-heavy workflow support.",
    ctaLabel: "Request life sciences brief",
    successLabel: "Download life sciences brief",
    successHeading: "Your life sciences brief is ready",
    successDescription:
      "This brief is intended for cautious operational readers who need scope clarity, human sign-off, and evidence support rather than broad automation claims.",
    successFollowUp:
      "If the bounded approach feels relevant, the next step is usually a careful conversation around one operational workflow and the review structure around it.",
    fileName: "corentis-life-sciences-bounded-use-case-brief.pdf",
    downloadHref: "/packs/corentis-life-sciences-bounded-use-case-brief.pdf",
  },
  "sample-evidence-pack": {
    slug: "sample-evidence-pack",
    requestType: "Sample evidence pack",
    title: "Sample Evidence Pack",
    description: "A structured prototype-style export showing the kind of review-ready material Corentis is designed to produce.",
    ctaLabel: "Request sample evidence pack",
    successLabel: "Download sample evidence pack",
    successHeading: "Your sample evidence pack is ready",
    successDescription:
      "This sample is designed to make the product direction more tangible by showing how workflow summary, controls, approvals, exceptions, and export metadata can sit together in one reviewable pack.",
    successFollowUp:
      "If the format is useful, Corentis can continue with a more specific discussion about evidence requirements, oversight expectations, and pack structure for your environment.",
    fileName: "corentis-sample-evidence-pack.pdf",
    downloadHref: "/packs/corentis-sample-evidence-pack.pdf",
  },
};

export const requestOptions: RequestOption[] = [
  {
    requestSlug: "investor-overview",
    requestType: "Investor overview",
    title: "Investor overview",
    description: "A concise company and market pack for investors, angels, advisors, and commercial supporters.",
    ctaLabel: "Request investor overview",
    formHeading: "Request the investor overview",
    formHint: "Use this route for investor, angel, advisor, or strategic support conversations around category need, wedge, and commercial path.",
    successHeading: packRequests["investor-overview"].successHeading,
    successDescription: packRequests["investor-overview"].successDescription,
    successFollowUp: packRequests["investor-overview"].successFollowUp,
    successLabel: packRequests["investor-overview"].successLabel,
    packSlug: "investor-overview",
  },
  {
    requestSlug: "assurance-governance-summary",
    requestType: "Assurance / governance summary",
    title: "Assurance / governance summary",
    description: "A low-hype governance pack for assurance readers, reviewers, auditors, and public-interest evaluators.",
    ctaLabel: "Request assurance summary",
    formHeading: "Request the assurance summary",
    formHint: "Use this route for governance, public-interest, audit, or assurance conversations where careful scope and accountability matter most.",
    successHeading: packRequests["assurance-summary"].successHeading,
    successDescription: packRequests["assurance-summary"].successDescription,
    successFollowUp: packRequests["assurance-summary"].successFollowUp,
    successLabel: packRequests["assurance-summary"].successLabel,
    packSlug: "assurance-summary",
  },
  {
    requestSlug: "government-funding-readiness",
    requestType: "Government / funding readiness",
    title: "Government / funding readiness",
    description: "A clear public-value route for reviewers assessing responsible AI, UK growth potential, regulated-sector adoption, and funding readiness.",
    ctaLabel: "Request funding readiness overview",
    formHeading: "Request the funding readiness overview",
    formHint: "Use this route for Innovate UK, public funding, public-interest, or strategic AI capability conversations where responsible deployment and evidence matter.",
    successHeading: "Your funding readiness overview is ready",
    successDescription:
      "Thank you. The most relevant next step is the Government / Funding Readiness page, which explains the public-interest case, responsible deployment posture, and current stage without implying funding or approval.",
    successFollowUp:
      "Corentis can follow up with a more focused discussion about evidence generation, regulated-sector adoption, UK capability, or design-partner validation where useful.",
    successLabel: "View funding readiness page",
    successHref: "/government-funding/",
  },
  {
    requestSlug: "financial-services-workflow-brief",
    requestType: "Financial services workflow brief",
    title: "Financial services walkthrough",
    description: "A practical complaints-assistant and workflow brief for financial-services teams assessing controls, review gates, and operational rollout.",
    ctaLabel: "Request financial-services walkthrough",
    formHeading: "Request the financial-services walkthrough",
    formHint: "Use this route for operations, conduct, transformation, risk, compliance, or technical discussions around one regulated workflow, especially complaints handling.",
    successHeading: packRequests["financial-services-workflow-brief"].successHeading,
    successDescription: packRequests["financial-services-workflow-brief"].successDescription,
    successFollowUp: packRequests["financial-services-workflow-brief"].successFollowUp,
    successLabel: packRequests["financial-services-workflow-brief"].successLabel,
    packSlug: "financial-services-workflow-brief",
  },
  {
    requestSlug: "life-sciences-bounded-use-case-brief",
    requestType: "Life sciences bounded use case brief",
    title: "Life sciences bounded use case brief",
    description: "A bounded operational brief for life sciences readers who need scope clarity, sign-off discipline, and evidence framing.",
    ctaLabel: "Request life sciences brief",
    formHeading: "Request the life sciences brief",
    formHint: "Use this route for QA, governance, operations, protocol review, or document-heavy life sciences workflows where careful scope matters.",
    successHeading: packRequests["life-sciences-brief"].successHeading,
    successDescription: packRequests["life-sciences-brief"].successDescription,
    successFollowUp: packRequests["life-sciences-brief"].successFollowUp,
    successLabel: packRequests["life-sciences-brief"].successLabel,
    packSlug: "life-sciences-brief",
  },
  {
    requestSlug: "sample-evidence-pack",
    requestType: "Sample evidence pack",
    title: "Sample evidence pack",
    description: "A prototype-style sample export showing the kind of review-ready material Corentis is designed to produce.",
    ctaLabel: "Request sample evidence pack",
    formHeading: "Request the sample evidence pack",
    formHint: "Use this route if you want to inspect the structure of a review-ready export rather than begin with a broader sector brief.",
    successHeading: packRequests["sample-evidence-pack"].successHeading,
    successDescription: packRequests["sample-evidence-pack"].successDescription,
    successFollowUp: packRequests["sample-evidence-pack"].successFollowUp,
    successLabel: packRequests["sample-evidence-pack"].successLabel,
    packSlug: "sample-evidence-pack",
  },
  {
    requestSlug: "design-partnership",
    requestType: "Design partnership or other conversation",
    title: "Design partnership or other conversation",
    description: "A simple route for design-partner, partnership, or broader company conversations.",
    ctaLabel: "Discuss design partnership",
    formHeading: "Discuss a design partnership",
    formHint: "Use this route for design-partner, partnership, or broader company conversations where a workflow discussion matters more than a PDF pack.",
    successHeading: "Thank you. Your message has been received",
    successDescription:
      "Your enquiry is now with Corentis. We will review it and reply with the most relevant next step for the conversation you requested.",
    successFollowUp:
      "Where useful, the follow-up may be a tailored overview, a workflow discussion, or a more focused conversation about partnership or design-partner fit.",
    successLabel: "Explore the platform",
    successHref: "/platform/",
  },
];

export const requestTypes: RequestType[] = requestOptions.map((option) => option.requestType);

const requestOptionByType = requestOptions.reduce(
  (accumulator, option) => {
    accumulator[option.requestType] = option;
    return accumulator;
  },
  {} as Record<RequestType, RequestOption>,
);

const requestOptionBySlug = requestOptions.reduce(
  (accumulator, option) => {
    accumulator[option.requestSlug] = option;
    return accumulator;
  },
  {} as Record<string, RequestOption>,
);

export function getRequestOptionByType(requestType?: string | null) {
  if (!requestType) {
    return null;
  }

  return requestOptionByType[requestType as RequestType] ?? null;
}

export function getRequestOptionBySlug(requestSlug?: string | null) {
  if (!requestSlug) {
    return null;
  }

  return requestOptionBySlug[requestSlug] ?? null;
}

export function getPackBySlug(slug?: string | null) {
  if (!slug) {
    return null;
  }

  return packRequests[slug as PackSlug] ?? null;
}

export function getPackByRequestType(requestType?: string | null) {
  const option = getRequestOptionByType(requestType);
  return option?.packSlug ? packRequests[option.packSlug] : null;
}

export function getPackRequestHref(slug: PackSlug) {
  return `/contact/?pack=${slug}#request-form`;
}

export function getRequestHref(requestSlug: string) {
  return `/contact/?request=${requestSlug}#request-form`;
}
