import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
};

export function BrandMark({ className }: BrandMarkProps) {
  return (
    <span
      className={cn(
        "relative flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] subtle-ring",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-1 rounded-xl border border-white/8" />
      <span className="h-4 w-4 rounded-md border border-white/35" />
      <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-white/80" />
    </span>
  );
}

