import type { Metadata } from "next";

import { ButtonLink } from "@/components/site/button-link";
import { CodePanel } from "@/components/site/code-panel";
import { Container } from "@/components/site/container";
import { SectionHeader } from "@/components/site/section-header";
import { concepts, exampleCommands, firstRunSteps } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Install AITeam CLI from source, configure real role commands, preview a run, then inspect or resume it from the persisted run folder.",
  alternates: {
    canonical: "/docs",
  },
};

const installCommand = `
npm install
npm run build
npm link
aiteam --help
`;

const exampleCommandBlock = `
aiteam init
aiteam roles set planner --cmd claude --read-only
aiteam roles set implementer --cmd codex --allow-write
aiteam validate
aiteam doctor
aiteam dry-run plan-implement-review --task-file examples/tasks/fix-bug.md
aiteam run plan-implement-review --task-file examples/tasks/fix-bug.md
aiteam inspect <runId>
`;

const docsNav = [
  { href: "#overview", label: "Overview" },
  { href: "#install", label: "Install" },
  { href: "#first-run", label: "First run" },
  { href: "#commands", label: "Commands" },
  { href: "#concepts", label: "Core concepts" },
  { href: "#repository", label: "Repository" },
];

export default function DocsPage() {
  return (
    <main className="py-14 sm:py-20">
      <Container>
        <SectionHeader
          badge="Docs"
          title="A lightweight getting-started guide for the first run."
          description="AITeam CLI is shell-first orchestration for role-based AI CLI workflows. It is terminal-native, inspectable on disk, resumable after interruption, and explicit about the limits of external CLI automation."
          actions={
            <>
              <ButtonLink href={siteConfig.links.github} variant="primary">
                View on GitHub
              </ButtonLink>
              <ButtonLink href="/" variant="secondary">
                Back Home
              </ButtonLink>
            </>
          }
        />
      </Container>

      <Container className="mt-10">
        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav className="panel-surface p-4" aria-label="Docs navigation">
              <div className="mb-3 px-2 text-[0.72rem] uppercase tracking-[0.18em] text-white/42">On this page</div>
              <div className="space-y-1">
                {docsNav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm text-white/62 transition hover:bg-white/[0.04] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
          </aside>

          <div className="space-y-10">
            <section id="overview" className="panel-surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">What AITeam CLI does</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/64">
                Most AI coding tools are good at a single session. AITeam CLI gives you a structured way to coordinate
                planning, implementation, review, QA, and handoff through explicit roles and explicit workflows.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/64">
                The product is designed around shell execution, not a fake unified provider contract. Runs write
                artifacts, transcripts, logs, approvals, and reports to disk so humans can inspect, debug, or resume
                with the run folder as the source of truth.
              </p>
            </section>

            <section id="install" className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
              <div className="panel-surface p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-white">Install</h2>
                <p className="mt-4 text-base leading-7 text-white/64">
                  The README currently documents source install. Use Node.js 20+, build the CLI locally, then link the
                  binary before creating a workspace in the repository you want to orchestrate.
                </p>
              </div>
              <CodePanel
                title="Source install"
                label="terminal"
                code={installCommand}
                footer="After linking the binary, run `aiteam init` in the project you want to orchestrate."
              />
            </section>

            <section id="first-run" className="panel-surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">First-run flow</h2>
              <ol className="mt-6 space-y-4">
                {firstRunSteps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-medium text-white/82">
                      {index + 1}
                    </span>
                    <p className="pt-0.5 text-base leading-7 text-white/64">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section id="commands" className="grid gap-4 xl:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div className="panel-surface p-6 sm:p-8">
                <h2 className="text-2xl font-semibold tracking-tight text-white">Example commands</h2>
                <div className="mt-5 space-y-3">
                  {exampleCommands.map((command) => (
                    <div key={command} className="rounded-2xl border border-white/8 bg-black/45 px-4 py-3 font-mono text-sm text-white/82">
                      {command}
                    </div>
                  ))}
                </div>
              </div>
              <CodePanel
                title="Command overview"
                label="shell"
                code={exampleCommandBlock}
                footer="Use `validate` for workspace checks, `doctor` for command availability, then dry-run before a real execution."
              />
            </section>

            <section id="concepts" className="panel-surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Core concepts</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {concepts.map((concept) => (
                  <article key={concept.title} className="rounded-3xl border border-white/8 bg-black/35 p-5">
                    <h3 className="text-lg font-semibold tracking-tight text-white">{concept.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/62">{concept.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="repository" className="panel-surface p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-white">Repository and full docs</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-white/64">
                For the full README, workflow examples, compatibility notes, and safety limitations, use the repository
                as the source of truth.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={siteConfig.links.github} variant="primary">
                  Open GitHub
                </ButtonLink>
                <ButtonLink href={siteConfig.links.readme} variant="secondary">
                  Read README
                </ButtonLink>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </main>
  );
}
