type WorkflowCardProps = {
  name: string;
  description: string;
  steps: string[];
};

export function WorkflowCard({ description, name, steps }: WorkflowCardProps) {
  return (
    <article className="panel-surface h-full p-6">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-mono text-sm text-white/86">{name}</h3>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[0.68rem] uppercase tracking-[0.2em] text-white/45">
          built-in
        </span>
      </div>
      <p className="mt-4 text-sm leading-7 text-white/65">{description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {steps.map((step) => (
          <span
            key={`${name}-${step}`}
            className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/58"
          >
            {step}
          </span>
        ))}
      </div>
    </article>
  );
}
