import { FeatureCard } from "@/components/home/feature-card";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";
import { capabilities } from "@/lib/content";

export function CapabilitiesSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Capabilities"
            title="Focused features for real command-line workflows."
            description="AITeam CLI keeps the feature set practical: enough orchestration to coordinate AI tools well, without turning the product into a closed runtime or a fake dashboard."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <Reveal key={item.title} delay={0.03 * index}>
              <FeatureCard title={item.title} description={item.description} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

