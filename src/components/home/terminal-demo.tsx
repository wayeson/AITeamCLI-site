import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";

const runTimeline = [
  { role: "auditor", note: "inspects the repo area first and records findings before any change is made" },
  { role: "implementer", note: "applies the fix using the selected write-capable role configuration" },
  { role: "reviewer", note: "checks the patch, flags risk, and requests follow-up if needed" },
  { role: "qa", note: "runs verification commands and records outputs in run artifacts" },
  { role: "finalizer", note: "writes the final handoff and keeps the run inspectable and resumable" },
];

const artifacts = ["run.json", "state.json", "artifacts/audit.md", "transcripts/implement.txt", "report.md"];

export function TerminalDemo() {
  return (
    <section id="demo" className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Terminal Demo"
            title="One command launches a real execution flow."
            description="The CLI coordinates roles, approvals, and artifacts without hiding what happened. You can dry-run first, inspect the run directory, and resume from the last completed step."
          />
        </Reveal>

        <div className="mt-10 grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <Reveal>
            <div className="panel-strong overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                  <span className="terminal-dot" />
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-white/45">run / audit-fix-verify</div>
              </div>
              <div className="space-y-5 p-5">
                <pre className="overflow-x-auto rounded-2xl border border-white/8 bg-black/65 p-4 font-mono text-[0.82rem] leading-7 text-white/86">
                  <code>
                    <span className="block text-white/45">
                      $ aiteam dry-run audit-fix-verify --task-file examples/tasks/audit-repo.md
                    </span>
                    <span className="mt-4 block text-white/72">[validate] workflow schema ok</span>
                    <span className="block text-white/72">[validate] transport: stdin, file, args</span>
                    <span className="block text-white/72">[validate] approvals: implementer</span>
                    <span className="block text-white/72">[validate] run folder: .aiteam/runs/run-2026-03-23...</span>
                    <span className="mt-4 block text-white/45">
                      $ aiteam run audit-fix-verify --task-file examples/tasks/audit-repo.md
                    </span>
                    <span className="mt-4 block text-white/86">auditor     wrote artifacts/audit.md</span>
                    <span className="block text-white/86">implementer wrote artifacts/implementation.md</span>
                    <span className="block text-white/86">reviewer    wrote artifacts/review.md</span>
                    <span className="block text-white/86">qa          wrote artifacts/qa.md</span>
                    <span className="block text-white/86">finalizer   wrote report.md</span>
                    <span className="mt-4 block text-white/45">$ aiteam inspect &lt;runId&gt;</span>
                    <span className="block text-white/45">$ aiteam resume &lt;runId&gt; --approve --note &quot;Reviewed dependency changes&quot;</span>
                  </code>
                </pre>
                <div className="grid gap-3 md:grid-cols-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/42">Dry-run</div>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Previews resolved steps, command strategy, prompt files, and approval gates before any role executes.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/42">Inspect</div>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Reads the persisted run directory so humans can review artifacts, transcripts, logs, and step history.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-white/42">Resume</div>
                    <p className="mt-2 text-sm leading-6 text-white/62">
                      Continues an interrupted or approval-paused workflow from persisted state instead of rerunning it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="space-y-6">
              <div className="panel-surface p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">Role timeline</div>
                <div className="mt-5 space-y-4">
                  {runTimeline.map((item, index) => (
                    <div key={item.role} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/80" />
                        {index < runTimeline.length - 1 ? <span className="mt-2 h-full w-px bg-white/10" /> : null}
                      </div>
                      <div className="pb-5">
                        <div className="font-mono text-sm text-white/88">{item.role}</div>
                        <div className="mt-1 text-sm leading-6 text-white/58">{item.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="panel-surface p-6">
                <div className="text-sm font-medium uppercase tracking-[0.18em] text-white/42">Run artifacts</div>
                <div className="mt-5 grid gap-3">
                  {artifacts.map((artifact) => (
                    <div
                      key={artifact}
                      className="flex items-center justify-between rounded-2xl border border-white/8 bg-black/45 px-4 py-3"
                    >
                      <span className="font-mono text-sm text-white/82">{artifact}</span>
                      <span className="text-xs uppercase tracking-[0.18em] text-white/42">written</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
