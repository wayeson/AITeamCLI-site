export const trustItems = [
  "Shell-first",
  "Workflow-driven",
  "Human approval gates",
  "Dry-run previews",
  "Inspectable run folders",
  "Open source",
];

export const differentiators = [
  {
    title: "Built for more than single sessions",
    description:
      "Most AI coding tools are good at one session. AITeam CLI adds explicit planning, implementation, review, verification, and handoff structure for real repository work.",
  },
  {
    title: "Shell execution stays explicit",
    description:
      "Some tools prefer stdin, some prefer prompt files, and some need wrapper scripts. The shell is the source of truth instead of a fake provider abstraction.",
  },
  {
    title: "Structured handoffs beat vague autonomy",
    description:
      "Roles, approvals, retries, and review loops are defined in plain workflow files so every step stays understandable before you trust it.",
  },
  {
    title: "Runs stay inspectable on disk",
    description:
      "Every run keeps prompts, artifacts, transcripts, logs, approvals, and reports under `.aiteam/runs/<runId>/` so inspect and resume have a real source of truth.",
  },
  {
    title: "Safety claims stay honest",
    description:
      "Permissions, path rules, dry-run, and approvals are practical guardrails, but the product is explicit that external CLIs are still best-effort automation.",
  },
];

export const pillars = [
  {
    title: "Adapters",
    description: "Run real commands with explicit prompt transport through stdin, args, files, or command templates.",
    whyItMatters: "You can integrate anything you can reliably run from the terminal, including wrapper scripts.",
  },
  {
    title: "Roles",
    description: "Define prompt files, permissions, timeout, env overrides, and write posture for each responsibility.",
    whyItMatters: "Read-only planning or review roles stay separate from write-capable implementation roles.",
  },
  {
    title: "Workflows",
    description: "Keep ordered steps, handoff inputs, approvals, review loops, and artifacts in hand-editable YAML.",
    whyItMatters: "A workflow-driven run is easier to validate, debug, resume, and explain to a human reviewer.",
  },
];

export const workflows = [
  {
    name: "plan-implement-review",
    description: "Best for general repo changes with structured planning and review.",
    steps: ["planner", "implementer", "reviewer", "review-loop", "finalizer"],
  },
  {
    name: "audit-fix-verify",
    description: "Best for existing codebases and patch loops.",
    steps: ["auditor", "implementer", "reviewer", "qa", "finalizer"],
  },
  {
    name: "spec-design-build",
    description: "Best for turning a scoped spec into a structured build flow.",
    steps: ["planner", "designer", "architect", "implementer", "reviewer", "finalizer"],
  },
];

export const capabilities = [
  {
    title: "Shell adapter first",
    description: "The core adapter is a real shell execution path rather than a provider-specific abstraction layer.",
  },
  {
    title: "Prompt transport modes",
    description: "Use stdin, args, files, or command templates depending on how a given CLI actually behaves.",
  },
  {
    title: "Role-based orchestration",
    description: "Different tools can plan, implement, review, and verify with explicit responsibility boundaries.",
  },
  {
    title: "Approval gates",
    description: "Pause on the steps that matter so a human can approve before execution continues.",
  },
  {
    title: "Dry-run previews",
    description: "Preview resolved steps, command strategy, prompt files, and artifacts before running anything.",
  },
  {
    title: "Resume support",
    description: "Continue an interrupted or approval-paused run from persisted state instead of restarting it.",
  },
  {
    title: "Inspectable run folders",
    description: "Runs persist `run.json`, `state.json`, artifacts, prompts, transcripts, logs, and reports on disk.",
  },
  {
    title: "Best-effort safety model",
    description: "Permissions, path rules, and approvals are built in, while limits around external CLIs stay explicit.",
  },
];

export const firstRunSteps = [
  "Run `aiteam init` to create the local `.aiteam/` workspace.",
  "Point each role at commands you actually have installed, such as `claude`, `codex`, or `gemini`.",
  "Use `aiteam validate` to check workspace files and references before relying on PATH lookups.",
  "Run `aiteam doctor` to verify command availability, prompt transport hints, and workflow setup.",
  "Preview the workflow with `aiteam dry-run plan-implement-review --task-file examples/tasks/fix-bug.md`.",
  "Execute the run, inspect the run folder, and resume later if the workflow pauses or fails.",
];

export const exampleCommands = [
  "aiteam doctor",
  "aiteam roles list",
  "aiteam dry-run plan-implement-review --task-file examples/tasks/fix-bug.md",
  'aiteam run plan-implement-review --task "Fix the failing signup test"',
  "aiteam inspect <runId> --json",
  'aiteam resume <runId> --approve --note "Reviewed dependency changes"',
];

export const concepts = [
  {
    title: "Adapters",
    description: "Thin execution definitions that tell AITeam CLI whether a command expects stdin, args, files, or a command template.",
  },
  {
    title: "Roles",
    description: "Named responsibilities with prompt files, shell commands, permissions, timeout, env overrides, and cwd strategy.",
  },
  {
    title: "Workflows",
    description: "Hand-editable step sequences that define execution order, handoff inputs, approvals, review loops, and outputs.",
  },
  {
    title: "Artifacts",
    description: "Persisted outputs such as `run.json`, `state.json`, artifacts, prompts, transcripts, logs, and reports.",
  },
];
