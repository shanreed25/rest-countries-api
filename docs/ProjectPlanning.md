# Project Planning Template

Make a copy of this template for each new project and replace every `[bracketed placeholder]` with your own answer. The sections follow the 12 phases in the Project Ownership Guide, so keep the guide open beside the template for each phase's questions.

Add rows to any table as needed, and delete a section only when you can write one line on why it does not apply. A filled-in copy doubles as the source for your README, your reflection, and interview stories.



## Contents

- [Project overview](#project-overview)
- [Phase tracker](#phase-tracker)
- [Phase sections](#phase-sections)
- [Stuck log](#stuck-log)

## Project overview

| Field | Answer |
| --- | --- |
| Project name | [Project name] |
| One-sentence description | [What the app does and for whom] |
| Type | [Class assignment, portfolio piece, client work, personal tool] |
| Tech stack | [For example: HTML, CSS, JavaScript] |
| Repo link | [GitHub URL] |
| Live link | [Deployed URL] |
| Due date | [Date, or "none"] |
| Requirement sources | [Brief, rubric, designs, style guide, user stories] |

**Primary user:** [Who uses the app]

**The two or three things the user must be able to do:**

1. [Core action 1]
2. [Core action 2]
3. [Core action 3]

## Phase tracker

Tick a phase only when every item in its Done when list in the guide is true.

- [ ] Phase 1: Understand the requirements
- [ ] Phase 2: Explore the inputs
- [ ] Phase 3: Plan the architecture
- [ ] Phase 4: Set up the repo and deploy early
- [ ] Phase 5: Build the foundation
- [ ] Phase 6: Build the data layer
- [ ] Phase 7: Build the core features one slice at a time
- [ ] Phase 8: Handle states and edge cases
- [ ] Phase 9: Responsive and accessibility passes
- [ ] Phase 10: Test
- [ ] Phase 11: Deploy and verify
- [ ] Phase 12: Document, reflect, and review

## Phase sections
> Click any section below to expand it.

<details>
<summary><strong>Phase 1: Requirements</strong></summary>

<br>

### Requirements checklist

Rewrite each requirement as a statement you could test by using the app.

| Requirement | Source | Testable statement | Done |
| --- | --- | --- | --- |
| [Requirement] | [Brief, rubric row, design, user story] | [For example: typing "ger" shows only matching items] | [ ] |
| [Requirement] | [Source] | [Testable statement] | [ ] |
| [Requirement] | [Source] | [Testable statement] | [ ] |

### Graded but not stated as features

- [For example: accessibility, commit history, README, performance]

### Out of scope

- [Something the project will not do, and why]

### States missing from the designs

- [Loading, error, empty, hover, focus, long content]

</details>

<details>
<summary><strong>Phase 2: Inputs and constraints</strong></summary>

<br>

### Inputs

| Input | Type | Limits and quirks | Experiment result |
| --- | --- | --- | --- |
| [For example: data.json] | [Data file, API, design, library, host] | [Keys, rate limits, CORS, versions, missing fields] | [What your throwaway test showed] |
| [Input] | [Type] | [Limits and quirks] | [Result] |

### Data fields and fallbacks

| Field | Shape | Can be missing or empty? | Display fallback |
| --- | --- | --- | --- |
| [Field name] | [String, number, array of objects] | [Yes or no] | [For example: "None" or hide the row] |
| [Field name] | [Shape] | [Yes or no] | [Fallback] |

### New to me

- [Tool or concept]: [smallest experiment that proves I can use it]

### Secrets check

- [Does any key or password need to stay out of front-end code? How will you handle it?]

</details>

<details>
<summary><strong>Phase 3: Architecture plan</strong></summary>

<br>

### File structure

```text
[project-name]/
  index.html
  [css/ folder and files]
  [js/ folder and modules]
  [assets/ or data/]
  README.md
```

### Views and navigation

| View | URL or route | How the user gets there | What refresh and Back do |
| --- | --- | --- | --- |
| [View name] | [For example: index.html or #/detail/ID] | [Link, button, direct URL] | [Expected behavior] |
| [View name] | [Route] | [How] | [Behavior] |

### State

| State | Where it lives | Who can change it | Persists between visits? |
| --- | --- | --- | --- |
| [For example: search text] | [Variable, URL, localStorage] | [Module or function] | [Yes or no] |

### Decision log

| Decision | Choice | Reason | Rejected alternative |
| --- | --- | --- | --- |
| [For example: routing] | [Your choice] | [One-line reason] | [Option you did not pick] |
| [Decision] | [Choice] | [Reason] | [Alternative] |

</details>

<details>
<summary><strong>Phase 4: Setup and early deployment</strong></summary>

<br>

| Item | Answer |
| --- | --- |
| How to run locally | [Command or steps, for example: Live Server or `npx serve`] |
| Host | [GitHub Pages, Netlify, Vercel] |
| Special host settings | [Build command, subpath, redirects, or "none"] |
| Commit convention | [For example: feat:, fix:, style:, docs:, refactor:] |
| Branching approach | [Work on main, or one branch per feature] |
| Never commit | [Keys, .env, node_modules] |
| Placeholder live on | [Date] |

</details>

<details>
<summary><strong>Phases 5 and 6: Foundation and data layer</strong></summary>

<br>

### Design tokens

| Token | Light value | Dark value (if themed) | Used for |
| --- | --- | --- | --- |
| [--color-bg] | [Value] | [Value] | [Page background] |
| [--color-text] | [Value] | [Value] | [Body text] |
| [--font-body] | [Font family] | [Same] | [All text] |
| [--space-md] | [Value] | [Same] | [Card padding] |

### Breakpoints

- [Mobile up to ___px, tablet ___px, desktop ___px and up]

### Data layer

| Question | Answer |
| --- | --- |
| Module that owns data access | [File name] |
| Data source now | [Local file, API URL] |
| Data source later | [If it will change] |
| Cached or reloaded? | [Answer and reason] |
| How failures are detected | [For example: check `response.ok`] |
| How each failure was tested | [Wrong URL, offline mode, throttling] |

</details>

<details>
<summary><strong>Phase 7: Feature build order</strong></summary>

<br>

List features in the order you will build them. Each row is one vertical slice: markup, style, logic, and states together.

| Order | Feature | Depends on | Combines with | Done |
| --- | --- | --- | --- | --- |
| 1 | [Highest-value feature] | [Data layer, another feature] | [Features that affect the same result] | [ ] |
| 2 | [Feature] | [Dependency] | [Related feature] | [ ] |
| 3 | [Feature] | [Dependency] | [Related feature] | [ ] |

### Ideas that grew past scope

- [Idea]: [move to the README's future improvements list]

</details>

<details>
<summary><strong>Phase 8: States and edge cases</strong></summary>

<br>

| Scenario | View | Expected behavior | Tested |
| --- | --- | --- | --- |
| Data is loading | [View] | [What the user sees] | [ ] |
| Request fails | [View] | [Message and retry option] | [ ] |
| No results | [View] | [Message, and how it is announced] | [ ] |
| Empty or whitespace input | [View] | [Behavior] | [ ] |
| Very long text or name | [View] | [How it wraps] | [ ] |
| Missing data field | [View] | [Fallback from Phase 2] | [ ] |
| Slow or lost network | [View] | [Behavior] | [ ] |
| Browser storage unavailable | [View] | [Behavior] | [ ] |
| [Project-specific case] | [View] | [Behavior] | [ ] |

</details>

<details>
<summary><strong>Phase 9: Responsive and accessibility checks</strong></summary>

<br>

### Screen sizes

- [ ] 320px: [notes]
- [ ] [Tablet width]px: [notes]
- [ ] [Desktop width]px: [notes]
- [ ] 1920px and wider: [notes]
- [ ] 200% zoom: [notes]

### Accessibility

- [ ] Keyboard only, with visible focus throughout: [notes]
- [ ] Every image has useful alt text: [notes]
- [ ] Every input has a label: [notes]
- [ ] Dynamic changes are announced or move focus: [notes]
- [ ] Contrast passes in every theme: [notes]
- [ ] Custom widgets follow an ARIA Authoring Practices pattern: [pattern used]
- [ ] Screen reader walk-through ([VoiceOver or NVDA]): [notes]

| Tool | Score or result | Issues left and why |
| --- | --- | --- |
| Lighthouse accessibility | [Score] | [Notes] |
| axe DevTools | [Issue count] | [Notes] |

</details>

<details>
<summary><strong>Phases 10 and 11: Test script and live verification</strong></summary>

<br>

### Test script

Run the script locally, then again on the live URL.

| Journey | Steps | Expected result | Local | Live |
| --- | --- | --- | --- | --- |
| [For example: search] | [1. Type ___ 2. ___] | [What should appear] | [ ] | [ ] |
| [Journey] | [Steps] | [Expected result] | [ ] | [ ] |
| [Journey] | [Steps] | [Expected result] | [ ] | [ ] |

### Browsers and devices tested

- [Browser and version]
- [Real phone and browser]

### Live site checks

- [ ] No 404s in the Network tab
- [ ] No console errors
- [ ] Refresh and shared links work on every view
- [ ] No keys, debug logs, or test data in deployed code
- [ ] Page title, description, and favicon set

### Known limitations

- [Bug or gap not fixed, and why]

</details>

<details>
<summary><strong>Phase 12: Documentation, reflection, and self-review</strong></summary>

<br>

### README outline

- [ ] Project name and one-sentence description
- [ ] Live link and repo link
- [ ] Screenshots: [which views and sizes]
- [ ] Features: [list]
- [ ] How to run locally: [steps from Phase 4]
- [ ] Tech stack and why: [pull from the decision log]
- [ ] Data source: [from Phase 2]
- [ ] Known limitations and future improvements: [from Phases 7 and 10]

### Reflection notes

Word count requirement: [for example, 200 to 300 words]

- **Development process:** [How you moved through the phases]
- **Hardest challenge:** [The problem, from the stuck log]
- **Solution:** [What you tried and what worked]
- **What I would change:** [Process or code]
- **Future improvements:** [Features or fixes]

### Self-review

| Criterion or rubric row | Points possible | My honest score | Gap and fix |
| --- | --- | --- | --- |
| [Criterion] | [Points] | [Score] | [What would close the gap] |
| [Criterion] | [Points] | [Score] | [Gap] |

### Interview story

- **Situation:** [Project context]
- **Problem:** [Specific challenge]
- **Approach:** [Decisions and why]
- **Result:** [Outcome and what you learned]

</details>

## Stuck log

<details>
<summary><strong>Stuck log</strong></summary>

<br>

Add a row each time you are stuck for more than a few minutes. The log feeds your reflection's challenges section and your interview stories.

| Date | Problem in one sentence | What I tried | What worked | Added to my notes? |
| --- | --- | --- | --- | --- |
| [Date] | [Expected ___, got ___] | [Attempts] | [Solution] | [ ] |
| [Date] | [Problem] | [Attempts] | [Solution] | [ ] |

</details>