import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
};

export function FeatureCard({ className, description, eyebrow, title }: FeatureCardProps) {
  return (
    <article className={cn("panel-surface h-full p-6", className)}>
      {eyebrow ? (
        <div className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-white/42">{eyebrow}</div>
      ) : null}
      <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{description}</p>
    </article>
  );
}

