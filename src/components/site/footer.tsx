import Link from "next/link";

import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: siteConfig.links.github, label: "GitHub", external: true },
  { href: siteConfig.links.docs, label: "Docs", external: false },
  { href: siteConfig.links.privacy, label: "Privacy", external: false },
  { href: siteConfig.links.license, label: "License (MIT)", external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-5 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
        <p>AITeam CLI. The orchestration layer for AI CLIs.</p>
        <nav className="flex flex-wrap items-center gap-4" aria-label="Footer">
          {footerLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-white">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </Container>
    </footer>
  );
}

