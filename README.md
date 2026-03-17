# 💎 superfigma — design intelligence platform

**One monorepo. Full-stack Figma sync, designer velocity tracking, session reconstruction, live gallery, and collaboration network analysis.**

Built for studios that want to *know* how design actually happens — not guess.

[![Node.js](https://img.shields.io/badge/Node.js-22+-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4/5-000000?logo=express)](https://expressjs.com)
[![SQLite](https://img.shields.io/badge/SQLite-better--sqlite3-003B57?logo=sqlite)](https://github.com/WiseLibs/better-sqlite3)
[![Figma API](https://img.shields.io/badge/Figma-API-F24E1E?logo=figma&logoColor=white)](https://www.figma.com/developers)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev)

---

## What it does

| Capability | What you get |
|---|---|
| **Real-time Figma sync** | Pull files, versions, comments, and components from your entire Figma team. Automatic sync every N minutes via cron or manual trigger. |
| **Session reconstruction** | Infer design sessions from version history. 30-min gap heuristic, confidence scoring (high/medium/low), per-file and cross-file. |
| **Designer velocity** | Per-designer profiles: total hours, weekly/monthly trends, active days, 7x24 heatmaps, session patterns. |
| **Workload monitoring** | After-hours %, weekend %, workload scores (0-100), risk levels (green/amber/red). Burnout detection before it happens. |
| **Collaboration network** | Who works with whom. Co-work scores, shared file counts, isolation detection, collaboration edges. |
| **Comment intelligence** | Thread analysis, response times, review status, open thread tracking, resolution metrics. |
| **Component governance** | Component inventory, coverage trends, changelogs, description quality scores, undocumented component detection. |
| **Live gallery** | Thumbnail grid of every file in the team, sorted by last activity. |
| **Weekly digests** | Auto-generated summaries: top designers, busiest projects, stale file alerts, milestone tracking. |
| **Project reports** | Per-project velocity, multi-project comparison, file timelines. |
| **OAuth** | Google and Figma login. Session cookies, allowlist, optional auth gating. |

## Quick start

### Gravity (Figma management dashboard)

```bash
cd miniverse/gravity
cp .env.example .env          # add FIGMA_PAT + FIGMA_TEAM_ID
npm install
npm run dev                   # http://localhost:3847
```

Hit `POST /api/sync` to pull your team's Figma data. Sessions reconstruct automatically.

### Brane (feedback intelligence)

```bash
cd brane
cp .env.example .env          # add SLACK_BOT_TOKEN
npm install
npm run dev                   # Vite + Express dev server
```

Scrape feedback from Slack threads, Figma comments, Twitter, or any URL. Categorizes into blockers, revisions, questions, approvals, context.

```bash
npx brane scrape <url>        # scrape a single source
npx brane dispatch            # process queued jobs
```

## API reference (Gravity)

40+ endpoints. Key ones:

| Endpoint | What |
|---|---|
| `GET /api/status` | Sync state, record counts |
| `POST /api/sync` | Trigger full Figma sync |
| `GET /api/sessions` | Design sessions (filter by designer, project, date range) |
| `GET /api/sessions/summary` | Aggregated velocity by period |
| `GET /api/designers` | All designers with hours, trends, active days |
| `GET /api/designers/:name/pattern` | 7x24 heatmap grid |
| `GET /api/designers/:name/profile` | Full designer profile |
| `GET /api/projects` | Projects with file counts, weekly hours, open comments |
| `GET /api/projects/:name/velocity` | Project velocity over time |
| `GET /api/comments` | All comments (filter by file, resolution) |
| `GET /api/comments/threads` | Threaded comment view |
| `GET /api/comments/threads/open` | Open threads needing attention |
| `GET /api/comments/response-times` | Response time analytics |
| `GET /api/comments/review-status` | Per-file review health |
| `GET /api/components` | Component inventory |
| `GET /api/components/governance` | Coverage, documentation quality |
| `GET /api/components/changelog` | Component change history |
| `GET /api/gallery` | File thumbnails, sorted by activity |
| `GET /api/dashboard` | Unified dashboard payload |
| `GET /api/workload/current` | Current workload scores + risk levels |
| `GET /api/workload/balance` | Team balance analysis |
| `GET /api/collaboration/network` | Collaboration graph edges |
| `GET /api/collaboration/isolation` | Designers working in silos |
| `GET /api/digest/weekly` | Auto-generated weekly digest |
| `GET /api/reports/project` | Full project report |
| `GET /api/reports/multi` | Multi-project comparison |
| `GET /api/milestones` | Labeled version milestones |
| `GET /api/alerts/stale` | Files with no activity |
| `POST /api/webhook` | Figma webhook receiver |

## Architecture

```
superfigma/
├── miniverse/
│   ├── gravity/              # Figma management dashboard (Express + SQLite + vanilla HTML)
│   │   ├── server/
│   │   │   ├── index.js      # 40+ API endpoints, 1500 lines
│   │   │   ├── sync-engine.js    # Figma API sync (files, versions, comments, components)
│   │   │   ├── session-engine.js # Session reconstruction from version history
│   │   │   ├── figma-client.js   # Rate-limited Figma API client (Bottleneck)
│   │   │   ├── db.js             # SQLite with better-sqlite3
│   │   │   ├── auth.js           # Google + Figma OAuth
│   │   │   └── schema.sql        # 12 tables, 15 indexes
│   │   └── index.html        # Single-file dashboard UI
│   ├── parc/                 # Shared workspace tooling + CLI
│   ├── proposal-builder/     # Client-facing proposal engine
│   ├── andromeda/            # Personal CRM for relationship tracking
│   └── design-plus/          # Figma plugins, design experiments, builds
├── brane/                    # Feedback intelligence (React + Vite + Express)
│   ├── core/
│   │   ├── adapters/         # Slack, Figma, Twitter, URL scrapers
│   │   ├── dispatch.js       # Job queue and processing
│   │   ├── types.js          # Unified InstructionSet data model
│   │   └── store.js          # Persistence layer
│   ├── src/                  # React 19 frontend (Tailwind v4)
│   ├── server/               # Express 5 API + Vite dev middleware
│   └── bin/                  # CLI (scrape, dispatch, seed)
├── bangalore/                # Bangalore-focused projects (attnc-preview)
├── dashboard/                # Organizational layer for dashboard docs
├── data/                     # Debug assets and research
└── scripts/                  # git-workon, git-context, git-project-map
```

## Data model (Gravity)

12 tables. The important ones:

- **figma_files** — every file in the team, with project mapping and thumbnails
- **figma_versions** — full version history per file (user, timestamp, label)
- **design_sessions** — reconstructed sessions with duration, confidence, designer
- **figma_comments** — all comments with threading, resolution tracking
- **figma_components** — component inventory with descriptions and frames
- **workload_snapshots** — weekly workload scores, after-hours %, risk levels
- **collaboration_edges** — designer-pair co-work scores and shared file counts
- **digests** — generated weekly/monthly summary reports

## Branch strategy

| Branch | Scope |
|---|---|
| `main` | Repo structure, docs, cross-project changes |
| `project/proposal-builder` | Proposal engine work |
| `project/andromeda` | CRM workspace |
| `project/design-plus` | Design systems + plugins |
| `project/bangalore` | Bangalore projects |

```bash
git workon proposal-builder   # switch context
git context                    # verify branch vs. path alignment
```

Pre-commit hooks enforce branch/path alignment.

## Stack

| Layer | Tech |
|---|---|
| Gravity server | Node.js, Express 4, better-sqlite3, Bottleneck (rate limiting) |
| Gravity frontend | Vanilla HTML/JS (single 163KB file — zero build step) |
| Brane server | Node.js, Express 5 |
| Brane frontend | React 19, Vite 7, Tailwind CSS v4 |
| Brane adapters | Slack Web API, Figma API, Cloudflare Browser Rendering, Lightpanda |
| Auth | Google OAuth 2.0, Figma OAuth, cookie sessions |
| Deploy | Vercel (serverless + cron) |

## License

Private.
