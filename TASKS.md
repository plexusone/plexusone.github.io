# PlexusOne Tasks

## Priority 1: Apply PlexusOne Theme to Featured Product Sites

Sites shown in the mega menu that need the unified theme (overrides/main.html + plexusone.css):

| Site | Category | Has Theme | Has Presentation |
|------|----------|-----------|------------------|
| omnillm | Library | ✅ | ✅ |
| omnivault | Library | ❌ | ✅ |
| omniserp | Library | ❌ | ✅ |
| omniobserve | Library | ❌ | ✅ |
| agentkit | Library | ❌ | ✅ |
| assistantkit | Library | ❌ | ✅ |
| omniagent | Agent | ❌ | ❌ |
| agent-team-stats | Agent | ❌ | ✅ |
| agent-team-release | Agent | ❌ | ❌ |
| w3pilot | Application | ❌ | ❌ |
| multi-agent-spec | Specification | ❌ | ❌ |
| ax-spec | Specification | ❌ | ❌ |
| design-system-spec | Specification | ❌ | ❌ |

### Theme Application Order (by usage/importance)

1. [ ] omnivault - High usage library
2. [ ] omniserp - High usage library
3. [ ] omniobserve - High usage library
4. [ ] agentkit - Core agent framework
5. [ ] omniagent - Flagship agent
6. [ ] agent-team-stats - Actively used
7. [ ] agent-team-release - Actively used
8. [ ] assistantkit - Plugin generator
9. [ ] multi-agent-spec - Core specification
10. [ ] w3pilot - Web automation
11. [ ] ax-spec - Agent experience spec
12. [ ] design-system-spec - Design system

---

## Priority 2: Create Missing Presentations

Products in mega menu without presentations:

| Product | Category | Priority | Notes |
|---------|----------|----------|-------|
| OmniAgent | Agent | High | Flagship production agent |
| Agent Team Release | Agent | High | Actively used for releases |
| Multi-Agent Spec | Specification | High | Core spec others build on |
| W3Pilot | Application | Medium | Web automation tool |
| AX Spec | Specification | Medium | Agent experience guidelines |
| Design System Spec | Specification | Medium | UI/UX standards |
| PlexusOne App | Application | Low | Desktop app (needs more dev) |

### Presentation Creation Order

1. [ ] OmniAgent - Flagship agent, high visibility
2. [ ] Agent Team Release - Actively used, good demo material
3. [ ] Multi-Agent Spec - Foundation for other specs
4. [ ] W3Pilot - Visual demos possible
5. [ ] AX Spec - Guidelines document
6. [ ] Design System Spec - Visual system
7. [ ] PlexusOne App - When app is more mature

---

## Priority 3: Other MkDocs Sites (Non-Featured)

Sites with MkDocs but not in mega menu:

- [ ] agent-a11y
- [ ] agent-code-review
- [ ] agentcomms
- [ ] agentpair
- [ ] agentsentinel
- [ ] elevenlabs-go / go-elevenlabs
- [ ] omnichat
- [ ] omnivoice / omnivoice-core / omnivoice-deepgram
- [ ] opik-go
- [ ] shap-go
- [ ] vaultguard
- [ ] omnillm-evals
- [ ] dashforge

---

## Theme Files to Copy

From `omnillm/docs/`:

```
docs/
├── overrides/
│   └── main.html          # PlexusOne unified nav integration
└── stylesheets/
    └── plexusone.css      # PlexusOne design system
```

Also update `mkdocs.yml`:

```yaml
theme:
  name: material
  custom_dir: docs/overrides
  palette:
    - scheme: slate
      primary: custom
      accent: custom
      toggle:
        icon: material/brightness-4
        name: Switch to light mode
    - scheme: default
      primary: custom
      accent: custom
      toggle:
        icon: material/brightness-7
        name: Switch to dark mode

extra_css:
  - stylesheets/plexusone.css
```
