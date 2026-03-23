import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";
import { pillars } from "@/lib/content";

function PillarIcon({ type }: { type: string }) {
  if (type === "Adapters") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 7h8M8 12h8M8 17h8" />
        <path d="M4 5.5h16v13H4z" />
      </svg>
    );
  }

  if (type === "Roles") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M4.5 18c.7-2.7 2.4-4 5-4s4.3 1.3 5 4" />
        <path d="M13.5 18c.4-1.6 1.6-2.7 3.5-2.7 1.7 0 2.9.9 3.5 2.7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 6h14M5 12h10M5 18h6" />
      <path d="M17 10l2 2-2 2" />
    </svg>
  );
}

export function PillarsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="How It Works"
            title="Three building blocks keep the system simple."
            description="AITeam CLI combines shell adapters, role definitions, and workflow files so a run is inspectable from the command you launch to the artifacts it writes."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={0.06 * index}>
              <article className="panel-surface h-full p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/88">
                  <PillarIcon type={pillar.title} />
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/64">{pillar.description}</p>
                <p className="mt-5 border-t border-white/8 pt-5 text-sm leading-7 text-white/56">{pillar.whyItMatters}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

