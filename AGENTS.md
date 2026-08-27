# AGENTS.md

Compact guidance for working in this repo. Every line is something an agent would likely miss.

## Commands
- `npm run dev` — Vite dev server.
- `npm run build` — `vite build` → outputs `dist/`. This is what Vercel deploys.
- `npm run preview` — serve the built `dist/`.
- No test, lint, typecheck, or formatter is configured. Don't invent `npm test`/`npm run lint`.

## CSS is a two-layer system (easy to break)
- `src/main.jsx` imports `./originkit.css` **then** `./styles.css`. Portfolio CSS wins by load order.
- `src/originkit.css` is the Tailwind v4 entry: `@import "tailwindcss"` + originkit theme files. PostCSS (`postcss.config.mjs`) uses `@tailwindcss/postcss`.
- Tailwind utilities are scanned **only** from `src/components/originkit` (`@source "./components/originkit"`). They do NOT apply to the root portfolio components.
- Root portfolio components (`src/components/*.jsx`) use **plain hand-written CSS classes** defined in `src/styles.css` (e.g. `.hero`, `.lane`, `.section`, `.cta`). Add styling there, not as Tailwind classes.
- Watch CSS specificity when editing `styles.css`: element/class selectors like `.section` vs `.cta` can cancel each other's padding/margins.

## Originkit components are external, not hand-written
- `src/components/originkit/**` (.tsx) come from the Originkit MCP (`components.json`, baseUrl `https://mcp.originkit.dev`). They pull in `three`, `ogl`, `d3-geo`, `animejs`.
- Treat them as generated/framework code. Prefer wrapping or configuring over rewriting. Rewrites are easy to silently break (WebGL shaders, globe data fetch, etc.).

## Gotchas
- **Images with spaces in `public/`**: `Grupo 1.png`, `Grupo 2.png`, `Grupo 3.png`. Reference them URL-encoded in code: `/Grupo%201.png`, `/Grupo%202.png`, `/Grupo%203.png`. Raw spaces break the request.
- **Vite `@` alias** maps to `src` (see `vite.config.js`). There is no `tsconfig.json` path mapping; TypeScript isn't set up, so the alias only resolves at bundler time.
- **Vercel** (`vercel.json`): build command is `chmod -R +x node_modules && node node_modules/vite/bin/vite.js build`, output `dist`. Don't "fix" it to `npm run build` without reason.
- Accessibility baseline to preserve: components use `useReducedMotion` (from `motion/react`) and a `prefers-reduced-motion` block in `styles.css`. Keep new motion behind that.
- `opencode.json` wires a remote Vercel MCP — use it for deploys rather than manual `vercel` CLI guesses.
