import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CodePanelProps = {
  code: string;
  title: string;
  label?: string;
  footer?: ReactNode;
  className?: string;
};

export function CodePanel({ className, code, footer, label, title }: CodePanelProps) {
  const lines = code.trim().split("\n");

  return (
    <div className={cn("panel-surface overflow-hidden", className)}>
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="terminal-dot" />
          <span className="terminal-dot" />
          <span className="terminal-dot" />
        </div>
        <div className="text-xs uppercase tracking-[0.18em] text-white/45">{label ?? "Code"}</div>
      </div>
      <div className="space-y-4 px-5 py-5">
        <div className="text-sm font-medium text-white/78">{title}</div>
        <pre className="overflow-x-auto rounded-2xl border border-white/8 bg-black/60 p-4 font-mono text-[0.8rem] leading-7 text-white/88">
          <code>
            {lines.map((line, index) => (
              <span key={`${title}-${index}`} className="block">
                <span className="mr-4 inline-block w-6 select-none text-right text-white/30">{index + 1}</span>
                <span>{line}</span>
              </span>
            ))}
          </code>
        </pre>
        {footer ? <div className="text-sm leading-6 text-white/58">{footer}</div> : null}
      </div>
    </div>
  );
}

