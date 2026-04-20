type FaqItem = {
  question: string;
  answer: string;
};

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <div key={item.question} className="glass-panel p-6">
          <h3 className="text-lg font-semibold text-white">{item.question}</h3>
          <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
