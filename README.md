# Sanctuary Parc

Sanctuary Parc is the main monorepo for your active projects. The goal is simple: one home base, clean folders, predictable branch names, and fewer accidental commits from the wrong tool or IDE.

## Local git identity

This repo is set up to use:

- `user.name = 0xbeam`
- `user.email = p@spacekayak.xyz`

## Project layout

- `dashboard/`
  Shared notes for the separate Saakets' Sanctuary Parc dashboard fork.
- `miniverse/`
  Home for core product projects: Proposal Builder, Andromeda, and Design+.
- `bangalore/`
  Smaller Bangalore-focused projects and experiments.
- `data/`
  Debug assets, data utilities, and smaller research-heavy work.

## Preferred branches

- `main`
  Shared repo structure, docs, scripts, and multi-project changes.
- `project/proposal-builder`
  `miniverse/proposal-builder`
- `project/andromeda`
  `miniverse/andromeda`
- `project/design-plus`
  `miniverse/design-plus`
- `project/bangalore`
  `bangalore`
- `project/data`
  `data`
- `project/dashboard-fork`
  `dashboard`

## Daily workflow

1. Run `git workon <project>` before starting.
2. Work inside that project's folder.
3. Run `git context` any time you want a quick branch/path sanity check.
4. Commit normally. The pre-commit hook will stop obvious branch/path mismatches.

Examples:

```bash
git workon proposal-builder
git workon andromeda
git context
```

## Remote layout

- `origin`
  Sanctuary Parc master repo.
- `dashboard-fork`
  Separate dashboard fork remote.

## Notes

- `dashboard/` is intentionally documentation-only inside this monorepo. Keep the actual dashboard fork as its own repo and use the `dashboard-fork` remote when you need it.
- `miniverse/andromeda` is ready as the personal CRM workspace, with `project/andromeda` reserved for Claude or any other agent.
- `miniverse/design-plus` is the umbrella for design builds, experiments, and Figma plugin work.
