import type { AnchorHTMLAttributes, ReactNode } from "react";

import Link from "next/link";

import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black";

const variants = {
  primary:
    "border border-white bg-white text-black shadow-[0_12px_35px_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:bg-white/90",
  secondary:
    "border border-white/12 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]",
  ghost: "border border-transparent bg-transparent px-0 text-white/70 hover:text-white",
};

export function ButtonLink({
  children,
  className,
  href,
  rel,
  target,
  variant = "secondary",
  ...props
}: ButtonLinkProps) {
  const styles = cn(baseStyles, variants[variant], className);
  const isExternal = href.startsWith("http");

  if (isExternal) {
    return (
      <a href={href} target={target ?? "_blank"} rel={rel ?? "noreferrer"} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}

