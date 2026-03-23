import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { SectionHeader } from "@/components/site/section-header";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy information for the AITeam CLI public website, including a note that the site is static-first and does not collect personal data by default.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Static site by default",
    body: "This website is a public product site for an open source CLI. It does not include an account system, user profiles, or built-in forms that collect personal information by default.",
  },
  {
    title: "Analytics",
    body: "Basic privacy-friendly analytics may be added later to understand aggregate traffic and documentation usage. If analytics are added, this page should be updated to describe the provider and data collected.",
  },
  {
    title: "External services",
    body: "Links to GitHub, npm, Vercel, or other third-party services are governed by those services' own privacy policies once you leave this website.",
  },
  {
    title: "Updates",
    body: "This page is intentionally simple and placeholder-ready. As the project evolves, the privacy notice should be updated to reflect any new integrations or telemetry choices.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          badge="Privacy"
          title="A minimal privacy notice for a public open source tool website."
          description="The current site is designed to be static-friendly and lightweight. No account system is present, and personal data is not collected by default."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.title} className="panel-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold tracking-tight text-white">{section.title}</h2>
              <p className="mt-4 text-base leading-7 text-white/64">{section.body}</p>
            </section>
          ))}
        </div>
      </Container>
    </main>
  );
}

