import type { ReactNode } from "react";

import { Badge } from "@/components/site/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  badge?: string;
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
  actions?: ReactNode;
};

export function SectionHeader({
  actions,
  align = "left",
  badge,
  className,
  description,
  eyebrow,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-3xl",
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-3">
        {badge ? <Badge>{badge}</Badge> : null}
        {eyebrow ? <span className="text-sm text-white/55">{eyebrow}</span> : null}
      </div>
      <div className="space-y-3">
        <h2 className="text-balance text-3xl font-semibold tracking-tighter text-white md:text-4xl">{title}</h2>
        <p className="text-balance text-base leading-7 text-white/68 md:text-lg">{description}</p>
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-3">{actions}</div> : null}
    </div>
  );
}

