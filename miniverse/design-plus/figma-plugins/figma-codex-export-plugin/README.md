# Codex Design System Export (Figma Plugin)

Export local Figma variables, styles, components, plus page-scoped structure into a Codex-ready JSON bundle.

## New features
- Multi-page selection before export (`Current page`, `All pages`, or custom checkbox mix)
- `typeSystem` section in JSON
  - families, size scale, line-heights, letter-spacing, text style catalog
- `colorSystem` section in JSON
  - palette, style colors, gradients, variable colors, semantic groupings
- `pageInventory` section
  - selected page node counts and top frames/sections

## What it exports
- Variables
  - Collections, modes, values by mode
- Styles
  - Paint, text, effect, and grid styles
- Components
  - Local components and component sets
  - Variant definitions and component property metadata
- Page scope and selection hint
  - Selected pages and current selection

## Install in Figma (Development plugin)
1. Open Figma Desktop.
2. Go to `Plugins` -> `Development` -> `Import plugin from manifest...`
3. Select this file:
   - `/Users/pluto/Documents/Playground/miniverse/design-plus/figma-plugins/figma-codex-export-plugin/manifest.json`
4. Run it from `Plugins` -> `Development` -> `Codex Design System Export`.

## If you see errors
- If Figma shows:
  `This plugin template uses TypeScript... generate code.js`
  then you imported a different template plugin. Remove that entry and re-import using the manifest path above.

- If console shows:
  `Syntax error on line ... Unexpected token ...`
  it means the runtime hit unsupported syntax from an older file. This plugin version avoids object spread and is runtime-safe.

- CORS/network errors in DevTools (for example `gravatar`, `ERR_NETWORK_CHANGED`, `ERR_QUIC_PROTOCOL_ERROR`) are usually Figma/webview network noise, not plugin logic errors.

## Use
1. Choose pages in `Page Scope`.
2. Click `Export`.
3. Click `Copy JSON` or `Download`.
4. Paste into Codex and ask it to use as design-source-of-truth.

## Suggested Codex prompt
`Use this JSON export as source-of-truth for page scope, tokens, type system, and color system, then generate implementation decisions for my landing page.`

## Notes
- This plugin exports **local** styles/components/variables available in the open file.
- If your system relies on remote libraries, ensure those styles/components are present in file context.
