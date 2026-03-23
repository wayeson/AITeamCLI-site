import Link from "next/link";

import { BrandMark } from "@/components/site/brand-mark";
import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { navigation, siteConfig } from "@/lib/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-black/70 backdrop-blur-xl">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 rounded-full pr-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
          <BrandMark />
          <div className="space-y-0.5">
            <div className="text-sm font-semibold tracking-[0.02em] text-white">AITeam CLI</div>
            <div className="text-xs text-white/45">The orchestration layer for AI CLIs</div>
          </div>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Primary">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm text-white/68 transition hover:bg-white/[0.04] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href={siteConfig.links.github} variant="primary" className="px-4 py-2.5 text-sm">
            GitHub
          </ButtonLink>
        </nav>
      </Container>
    </header>
  );
}
