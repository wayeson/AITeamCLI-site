import { WorkflowCard } from "@/components/home/workflow-card";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";
import { workflows } from "@/lib/content";

export function WorkflowsSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Built-In Workflows"
            title="Start with opinionated defaults, then adapt."
            description="The README documents three built-in workflows that cover general delivery, audit-and-fix loops, and product-minded build flows without inventing a magic runtime."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {workflows.map((workflow, index) => (
            <Reveal key={workflow.name} delay={0.06 * index}>
              <WorkflowCard name={workflow.name} description={workflow.description} steps={workflow.steps} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
