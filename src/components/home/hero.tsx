import { Badge } from "@/components/site/badge";
import { ButtonLink } from "@/components/site/button-link";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { siteConfig } from "@/lib/site";

const heroRoles = [
  { name: "planner", detail: "scoped implementation plan", artifact: "plan.md" },
  { name: "implementer", detail: "targeted code change", artifact: "implementation.md" },
  { name: "reviewer", detail: "risk review and notes", artifact: "review.md" },
  { name: "finalizer", detail: "run summary", artifact: "report.md" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal className="max-w-3xl">
            <Badge>The orchestration layer for AI CLIs</Badge>
            <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tighter text-white sm:text-6xl lg:text-7xl">
              Make your AI coding tools work like a real team.
            </h1>
            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-white/66 sm:text-xl">
              Orchestrate Claude, Codex, Gemini, Aider, local models, and custom wrappers through role-based
              workflows from one CLI.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={siteConfig.links.github} variant="primary">
                View on GitHub
              </ButtonLink>
              <ButtonLink href="/docs" variant="secondary">
                Get Started
              </ButtonLink>
              <ButtonLink href="#demo" variant="secondary">
                See Demo
              </ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/48">
              <span>Structured workflows.</span>
              <span>Real handoffs.</span>
              <span>Human in control.</span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="panel-strong overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">session / prod-ready</div>
              </div>

              <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
                <div className="rounded-2xl border border-white/8 bg-black/65 p-4">
                  <pre className="overflow-x-auto font-mono text-[0.8rem] leading-7 text-white/86">
                    <code>
                      <span className="block text-white/45">$ aiteam init</span>
                      <span className="block pl-3 text-white/72">creating .aiteam/</span>
                      <span className="block pl-3 text-white/72">starter roles: planner, implementer, reviewer</span>
                      <span className="mt-4 block text-white/45">
                        $ aiteam dry-run plan-implement-review --task-file examples/tasks/fix-bug.md
                      </span>
                      <span className="mt-4 block text-white/86">planner      -&gt; artifacts/plan.md</span>
                      <span className="block text-white/86">implementer  -&gt; artifacts/implementation.md</span>
                      <span className="block text-white/86">reviewer     -&gt; artifacts/review.md</span>
                      <span className="block text-white/86">finalizer    -&gt; report.md</span>
                    </code>
                  </pre>
                </div>

                <div className="space-y-3">
                  {heroRoles.map((role) => (
                    <div key={role.name} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="font-mono text-sm text-white/88">{role.name}</div>
                          <div className="mt-1 text-sm text-white/56">{role.detail}</div>
                        </div>
                        <div className="rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                          {role.artifact}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/8 px-5 py-4 text-sm text-white/52">
                Approval gates available. Dry-run supported. Runs can be inspected or resumed from disk.
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
