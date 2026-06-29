# Loop Support in Multi-Agent-Spec v0.9.0 and AssistantKit v0.14.0

We're excited to announce first-class loop support in [multi-agent-spec v0.9.0](https://github.com/plexusone/multi-agent-spec) and [AssistantKit v0.14.0](https://github.com/plexusone/assistantkit). These releases introduce REAL and VEAL loop patterns—autonomous, bounded execution patterns for multi-agent systems.

## Why Loops Matter

Multi-agent systems need more than one-shot task execution. Real-world workflows require iteration: validate, find issues, fix them, repeat. But unbounded iteration is dangerous—agents could loop forever, accumulate costs, or diverge from the goal.

Loops solve this with **bounded autonomy**: agents iterate toward a goal within configurable limits, then escalate to humans when stuck.

For the conceptual framework behind this pattern, see ProductBuildersHQ's [Loop Engineering](https://productbuildershq.com/frameworks/loop-engineering/) article, which covers loop theory across REPL, REAL, VEAL, and OODA patterns.

## Two Loop Patterns

### REAL — Read Eval Act Loop

Mission-driven loops for open-ended tasks:

```
R - Read (mission, requirements, goals)
E - Eval (assess situation against goals)
A - Act (take action toward goals)
L - Loop (until mission complete or escalate)
```

Use REAL for tasks like "implement feature X" or "migrate to API v2"—where the goal is defined by a mission statement, not validation checks.

```yaml
name: feature-impl
type: REAL
actor: developer
mission: |
  Implement user authentication with OAuth2 support.
  Must include login, logout, and session management.
max_attempts: 10
escalation: human
success_criteria: |
  All authentication flows work correctly.
  Tests pass. Documentation updated.
```

### VEAL — Validate Eval Act Loop

State-driven loops that converge toward valid state:

```
V - Validate (check current state)
E - Eval (compare to expected → GO/NO-GO)
A - Act (correct state if NO-GO)
L - Loop (until valid or escalate)
```

VEAL is ideal for QA validation, documentation completeness, and security compliance—any workflow where you have specific checks that must pass.

```yaml
name: qa-fix
type: VEAL
validator: qa
actor: code-fixer
max_attempts: 3
escalation: human
checks:
  - id: build
    type: command
    command: go build ./...
    required: true
  - id: tests
    type: command
    command: go test ./...
    required: true
  - id: lint
    type: command
    command: golangci-lint run
    required: true
```

## Key Features

### Bounded Execution

Every loop has limits:

| Field | Default | Description |
|-------|---------|-------------|
| `max_attempts` | 3 | Maximum iterations before escalation |
| `escalation` | `human` | Policy when max reached |
| `success_criteria` | — | Description of success conditions |

### Escalation Policies

When loops hit their limits, configurable escalation kicks in:

- **human** — Stop and request human intervention (default)
- **abort** — Stop and fail the workflow
- **continue** — Proceed despite unresolved issues
- **fallback** — Invoke a specialist agent

### Dual-Agent Pattern (VEAL)

VEAL loops use separate validator and actor agents:

- **Validator**: Read-only agent that checks state
- **Actor**: Agent that fixes issues found by validator

This separation ensures the agent fixing issues can't modify the tests judging it.

## Go SDK Usage

### AssistantKit Integration

AssistantKit v0.14.0 loads loops and injects participation instructions into referenced agents:

```go
import "github.com/plexusone/assistantkit/generate"

result, err := generate.Generate("specs", "local", ".")
fmt.Printf("Loaded %d loops\n", result.LoopCount)
// Agents referenced as validator/actor get loop instructions injected
```

### Multi-Agent-Spec SDK

Create loops programmatically:

```go
import mas "github.com/plexusone/multi-agent-spec/sdk/go"

// VEAL loop with checks
qaLoop := mas.NewVEALLoop("qa-fix", "qa", "code-fixer").
    WithMaxAttempts(3).
    AddCheck(mas.LoopCheck{
        ID:      "build",
        Type:    mas.CheckTypeCommand,
        Command: "go build ./...",
    })

// REAL loop with mission
featureLoop := mas.NewREALLoop(
    "feature-impl",
    "developer",
    "Implement OAuth2 authentication",
).WithMaxAttempts(10)
```

### Loading from Files

```go
import "github.com/plexusone/assistantkit/loops"

// Load all loops from directory
loopSet, err := loops.LoadLoopSet("specs/loops")

// Filter by type
vealLoops := loopSet.VEALLoops()
realLoops := loopSet.REALLoops()
```

## Workflow Integration

Loops integrate with team workflows as first-class steps:

```json
{
  "workflow": {
    "type": "chain",
    "steps": [
      { "name": "validate-scope", "agent": "pm" },
      { "name": "qa-fix", "loop": "qa-fix" },
      { "name": "docs-fix", "loop": "docs-fix" },
      { "name": "tag-release", "agent": "release" }
    ]
  }
}
```

This pattern powers our release workflows—QA and documentation validation run as bounded loops before the release agent tags the version.

## Directory Structure

Loops live alongside agents in the specs directory:

```
specs/
├── agents/
│   ├── qa.md
│   └── code-fixer.md
├── loops/
│   ├── qa-fix.yaml
│   └── docs-fix.yaml
└── deployments/
    └── local.json
```

## Getting Started

### Install

```bash
go get github.com/plexusone/multi-agent-spec/sdk/go@v0.9.0
go get github.com/plexusone/assistantkit@v0.14.0
```

### Create Your First Loop

1. Define a VEAL loop in `specs/loops/qa-fix.yaml`
2. Reference validator and actor agents
3. Run `assistantkit generate` to inject loop instructions
4. Use in your workflow

## Learn More

- [Multi-Agent-Spec Loops Schema](https://plexusone.github.io/multi-agent-spec/schemas/loop/)
- [AssistantKit Loops Documentation](https://plexusone.github.io/assistantkit/plugins/loops/)
- [Loop Engineering Framework](https://productbuildershq.com/frameworks/loop-engineering/) — The conceptual model behind REAL/VEAL patterns
