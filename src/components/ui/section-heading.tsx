type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-electric-soft)]">
        {eyebrow}
      </p>
      <h2 className="text-balance text-[1.9rem] font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
