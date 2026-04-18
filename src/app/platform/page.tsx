import { PageHero } from "@/components/page-hero";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const corePlatform = [
  {
    title: "Workflow inventory",
    description: "Record what each AI workflow does, where it is used, and why it matters.",
  },
  {
    title: "Testing and evaluation",
    description: "Run structured checks before release, including scenario testing and control verification.",
  },
  {
    title: "Approval workflows",
    description: "Make sure important outputs are reviewed by the right people at the right moments.",
  },
  {
    title: "Runtime monitoring",
    description: "Track live activity, exceptions, drift, and override patterns over time.",
  },
  {
    title: "Evidence generation",
    description: "Export clear materials that support internal assurance, external review, and practical governance.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform"
        title="A platform for governed AI deployment"
        description="Corentis is a platform for governing how advanced AI is used in important workflows. It helps teams test before launch, apply human oversight where needed, monitor live behaviour, and produce evidence that stands up to review."
        imageSrc="/images/platform-architecture.jpg"
        imageAlt="Modern reflective office building"
        ctaHref="/contact/"
        ctaLabel="Register for more information"
      />

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="The Core Platform"
            title="The foundations of safe deployment"
            description="Corentis provides a reusable control layer around the workflows that matter most."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {corePlatform.map((module) => (
              <div key={module.title} className="glass-panel reveal-card p-6">
                <h2 className="text-xl font-semibold text-white">{module.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{module.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/8 bg-[rgba(255,255,255,0.02)] py-20 sm:py-24">
        <Container className="grid gap-6 lg:grid-cols-2">
          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              What Corentis Is Designed To Solve
            </p>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>Serious organisations need practical answers to questions such as:</p>
              <p>Can we see how this workflow behaved?</p>
              <p>Are the right approvals in place?</p>
              <p>What evidence would we show if asked to justify this process?</p>
              <p>Where are the weak points in live use?</p>
              <p>How do we build confidence without slowing innovation to a standstill?</p>
            </div>
          </div>

          <div className="glass-panel p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-soft)]">
              A Better Path To Adoption
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
              AI adoption does not need to mean blind trust or total paralysis.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[var(--color-text-muted)]">
              <p>
                Too often, teams are left with two poor options: move quickly without enough control, or delay useful
                adoption because no one is comfortable with the risk.
              </p>
              <p>
                Corentis is designed to make the middle path workable at platform level: thoughtful deployment, human
                accountability, and evidence that can travel with the workflow.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
