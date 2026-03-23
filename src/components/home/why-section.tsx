import { FeatureCard } from "@/components/home/feature-card";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";
import { differentiators } from "@/lib/content";

export function WhySection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Why AITeam CLI"
            title="Built for structured repository work, not a generic agent platform."
            description="Most AI coding tools are good at single sessions. AITeam CLI adds explicit roles, workflow files, and on-disk artifacts so planning, implementation, review, and handoff stay legible."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {differentiators.map((item, index) => (
            <Reveal key={item.title} delay={0.04 * index}>
              <FeatureCard title={item.title} description={item.description} eyebrow={`0${index + 1}`} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
