import { CodePanel } from "@/components/site/code-panel";
import { Container } from "@/components/site/container";
import { Reveal } from "@/components/site/reveal";
import { SectionHeader } from "@/components/site/section-header";

const roleConfig = `
roles:
  planner:
    command: claude
    prompt: prompts/planner.md
    transport: stdin
    read_only: true
  implementer:
    command: codex
    prompt: prompts/implementer.md
    transport: file
    allow_write: true
  reviewer:
    command: gemini
    prompt: prompts/reviewer.md
    transport: args
    read_only: true
`;

const workflowConfig = `
name: plan-implement-review
steps:
  - id: plan
    role: planner
    output: plan.md
  - id: implement
    role: implementer
    input:
      - step: plan
    output: implementation.md
  - id: review
    role: reviewer
    input:
      - step: implement
  - id: finalize
    role: finalizer
    input:
      - step: review
`;

const commandExample = `
aiteam init
aiteam roles set planner --cmd claude --read-only
aiteam roles set implementer --cmd codex --allow-write
aiteam validate
aiteam dry-run plan-implement-review --task-file examples/tasks/fix-bug.md
aiteam run plan-implement-review --task-file examples/tasks/fix-bug.md
aiteam inspect <runId>
`;

export function ConfigSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Config Examples"
            title="Readable files keep the workflow honest."
            description="The README positions configuration as plain files: role definitions, workflow YAML, and shell commands that a developer can inspect before trusting any run."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          <Reveal>
            <CodePanel
              title="Role config"
              label=".aiteam/roles.yaml"
              code={roleConfig}
              footer="Roles point to real commands, prompt files, transport strategy, and write posture instead of hiding behind one provider abstraction."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <CodePanel
              title="Workflow YAML"
              label=".aiteam/workflows/plan-implement-review.yaml"
              code={workflowConfig}
              footer="Workflows keep ordered steps, handoff inputs, and output artifacts in a hand-editable file."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <CodePanel
              title="CLI invocation"
              label="shell"
              code={commandExample}
              footer="Init, validate, dry-run, inspect, and resume are part of the product's first-run loop, not afterthoughts."
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
