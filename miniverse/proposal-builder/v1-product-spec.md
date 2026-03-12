# Proposal Hub v1

## 1. Product Direction

Build a client-facing proposal portal that turns a static deck into an interactive deal workspace.

Core shift:
- From: linear presentation slides
- To: configurable scope + live commercials + collaborative approval flow

Primary users:
- Buyer (founder/marketing/product lead)
- Economic approver (finance/procurement)
- Spacekayak internal owner (sales/design lead)

Success in v1:
- Faster proposal turnaround
- Fewer clarification calls
- Higher approval rate
- Shorter time from `Sent` to `Approved`

---

## 2. What We Keep From Current Figma

Retain:
- Dark editorial tone
- Typography pairing (`Victor Serif` + `Inter Display`)
- Minimal, high-contrast layout language
- Narrative framing around outcomes, scope, timeline, team, commercials

Fix immediately:
- Timeline copy inconsistencies (example: inverted date ranges on current timeline screen)
- Placeholder pricing rows (`$x,x00 USD`)

---

## 3. Experience Model

Top-level switch:
- `Story Mode` (narrative, emotionally persuasive)
- `Builder Mode` (interactive, decision-oriented)

Persistent right rail in both modes:
- `Deal Summary`
- Live budget total
- Timeline impact
- Selected scope blocks
- CTA actions: `Approve`, `Request Changes`, `Book Call`

---

## 4. Information Architecture

1. Overview
2. Scope Builder
3. Timeline Planner
4. Commercials
5. Team & Operating Model
6. Proof (work samples/case studies)
7. Approvals & Signoff
8. Activity Log

---

## 5. Screen-by-Screen v1 Spec

## Screen 1: Overview
Goal:
- Set context fast and establish trust.

Content:
- Proposal title, client name, status badge, version
- 3 headline outcomes
- Snapshot cards: budget, duration, engagement model
- “What changed since last version”

Interactions:
- `Switch to Builder Mode`
- `Jump to Commercials`
- `Leave Comment`

States:
- Draft (internal-only)
- Sent
- Viewed by client

## Screen 2: Scope Builder
Goal:
- Let client shape scope without ambiguity.

Content:
- Phase cards (Phase 1, Phase 2)
- Deliverable checklist per phase
- Optional add-ons
- Dependencies/assumptions module

Interactions:
- Toggle add-ons on/off
- Adjust complexity tier (`Lean`, `Standard`, `Extended`)
- Reveal impact chips (`+5 days`, `+$2,000`)

States:
- Changes pending
- Validated combination
- Needs review (invalid dependency combo)

## Screen 3: Timeline Planner
Goal:
- Visualize schedule and tradeoffs clearly.

Content:
- Milestone timeline (kickoff, review checkpoints, delivery)
- Dependency links
- Availability constraints

Interactions:
- Drag milestone date
- Lock anchor dates
- Auto-recalculate downstream dates

States:
- On track
- At risk
- Date conflict

## Screen 4: Commercials
Goal:
- Make price structure understandable and negotiable without spreadsheet churn.

Content:
- Line-item table (service, qty, unit cost, subtotal)
- Discount module
- Tax and payment terms
- Multi-currency view (if needed later)

Interactions:
- Toggle package presets
- Apply discount with reason
- Download PDF summary

States:
- Pending approval
- Discount exceeds threshold (internal approval needed)

## Screen 5: Team & Operating Model
Goal:
- Make delivery ownership explicit.

Content:
- Team roster with role, ownership, availability
- Meeting cadence
- Communication channels
- Escalation path

Interactions:
- Expand role detail
- Click owner to see responsibility matrix

## Screen 6: Proof
Goal:
- Reduce buyer risk with relevant credibility.

Content:
- Filterable case studies
- Outcome metrics
- Related client logos

Interactions:
- Filter by industry/problem type
- Open mini case-story modal

## Screen 7: Approvals & Signoff
Goal:
- Complete commercial acceptance in one flow.

Content:
- Final scope summary
- Legal terms
- Signer details
- Payment handoff block

Interactions:
- Approve and sign
- Request redlines
- Share with another approver

States:
- Awaiting signature
- Signed
- Reopened for edits

## Screen 8: Activity Log
Goal:
- Keep a clear trail of decisions.

Content:
- Version history
- Comment threads
- Approval events
- Change diffs (budget/timeline/scope)

Interactions:
- Compare version A vs B
- Resolve comment

---

## 6. Component Inventory (v1)

1. `ProposalHeader`
- Props: `clientName`, `proposalName`, `status`, `version`, `lastUpdatedAt`

2. `ModeToggle`
- Props: `mode`, `onChange`

3. `OutcomeCard`
- Props: `title`, `description`, `metric`, `icon`

4. `ScopeModule`
- Props: `phaseId`, `deliverables[]`, `addons[]`, `assumptions[]`

5. `ImpactChip`
- Props: `label`, `type` (`time|cost|risk`)

6. `TimelineBoard`
- Props: `milestones[]`, `dependencies[]`, `lockedDates[]`

7. `CommercialTable`
- Props: `rows[]`, `currency`, `discount`, `tax`, `terms`

8. `SummaryRail`
- Props: `selectedScope`, `totalCost`, `duration`, `risks[]`

9. `ApprovalPanel`
- Props: `signers[]`, `legalDocVersion`, `paymentStatus`

10. `ActivityFeed`
- Props: `events[]`, `filters`, `compareTargetVersion`

---

## 7. Data Model (MVP)

## Entities
- `Proposal`
- `ProposalVersion`
- `ScopeItem`
- `TimelineMilestone`
- `CommercialLineItem`
- `Comment`
- `ApprovalRequest`
- `ApprovalAction`
- `ClientUser`

## Status machine
- `draft`
- `internal_review`
- `sent`
- `viewed`
- `negotiation`
- `approved`
- `declined`

Rule:
- Any structural edit after `sent` creates a new `ProposalVersion`.

---

## 8. Visual System (Derived from Current Figma)

Typography:
- Display/Narrative: `Victor Serif`
- Body/UI: `Inter Display`

Known token baselines from sampled nodes:
- `fontSize/H1 = 128`
- `fontSize/H3 = 64`
- `fontSize/Body = 20`
- `letterSpacing/H1 = -1.5`
- `letterSpacing/H3 = -1`

Color direction:
- Background: near-black (`#0c0c0c` to `#0f0f0f`)
- Primary text: near-white
- Secondary text: reduced opacity neutrals
- Accent: use a restrained red for emphasis only

Motion:
- Story Mode: progressive reveal, section fade/slide, no heavy parallax
- Builder Mode: quick deterministic transitions (<200ms perceived)

---

## 9. MVP Scope and Exclusions

In v1:
- Interactive scope + timeline + commercials
- Comments and version compare
- Approval flow with audit trail
- PDF export snapshot

Out of v1:
- AI auto-writing full proposal copy
- Deep CRM/billing integrations
- Complex procurement workflows
- Full white-label theming

---

## 10. Engineering Plan (6 Weeks)

Week 1:
- Finalize IA, data model, UI kit primitives

Week 2:
- Build Overview + Scope Builder

Week 3:
- Build Timeline Planner + dependency engine

Week 4:
- Build Commercials + Summary rail calculations

Week 5:
- Build comments, versions, activity feed

Week 6:
- Build approvals/signoff + export + QA hardening

---

## 11. Key Metrics

North-star:
- Proposal approval rate

Operational:
- Median days from sent to approval
- Avg number of revision cycles
- Time spent in commercials negotiation
- % proposals approved without live walkthrough call

---

## 12. Open Decisions

1. Should approvals include embedded e-sign in v1, or redirect to an external signer?
2. Should discounts require role-based internal approval in v1?
3. Do you want one universal template first, or two templates (startup and enterprise)?
