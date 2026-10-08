# public-value-metrics.github.io

The website for **[Public Value Metrics](https://github.com/public-value-metrics/public-value-metrics)** — a comprehensive introduction to public value math, examples, and reasoning, written for software engineers building for governmental and social sector organizations worldwide.

Published at <https://public-value-metrics.github.io/>.

## How it works

A [SvelteKit](https://svelte.dev/docs/kit) site built with [adapter-static](https://svelte.dev/docs/kit/adapter-static). Every page is prerendered to plain HTML at build time, so GitHub Pages serves files and nothing else — no server, no database, no tracking.

The book's Markdown is **vendored** into `content/` rather than read across repositories, so a fresh clone builds on its own. The site's user interface is built from the [Lily Design System](https://github.com/LilyDesignSystem): the headless components, the theme/locale/text-size/share pickers, and the theme stylesheets (`@lilydesignsystem/themes`) are all ordinary npm dependencies — see `package.json`. The theme stylesheets are CSS, not JS, so they can't be `import`ed like the components; `bin/sync-themes.mjs` copies them from `node_modules` into `static/assets/themes/` automatically on every `pnpm install` (see `postinstall`), so that directory is gitignored rather than committed.

### The book's README is the table of contents

`content/README.md` defines the structure, and the site derives everything else from it:

- each `## Heading` becomes a **part** of the book
- each `- [Title](locales/en-gb-oxendict/topics/slug/) — blurb` under it becomes a **topic**, in reading order
- that order drives the sidebar, the contents page, and previous/next

Reorder the README upstream, run `pnpm run sync`, and the site follows. A topic file that the README never links to is still published, under an "Also in this book" part, so nothing becomes unreachable.

## Develop

```sh
pnpm install
pnpm run dev
```

## Build

```sh
pnpm run build     # -> build/
pnpm run preview
```

## Sync from upstream

```sh
pnpm run sync           # book Markdown -> content/
```

The book sync defaults to a sibling checkout and can be pointed elsewhere:

```sh
BOOK=/path/to/public-value-metrics pnpm run sync:content
```

Vendored content carries a "do not edit here" banner. Change it upstream, then re-sync. Lily theme stylesheets are not vendored by hand any more — bump `@lilydesignsystem/themes` in `package.json` and reinstall, same as any other Lily dependency (`@lilydesignsystem/svelte-headless`, `@lilydesignsystem/svelte-picker-bar`, ...).

## Layout

```
bin/sync-content.mjs   vendor the book's Markdown into content/
bin/sync-themes.mjs    copy Lily's theme CSS from node_modules into static/ (postinstall)
content/               the book, verbatim (generated — do not edit)
src/lib/markdown.js    Markdown -> HTML: link rewriting, heading ids
src/lib/paths.js       content path <-> site route mapping
src/lib/server/        content access and book structure (server-only)
scripts/                post-build: search-index.json, llms.txt, llms.json, sitemap.xml
src/routes/            home, contents, topics A-Z, topic pages, search, about
static/assets/style.css  the site's own styling; Lily ships none
static/assets/themes/  Lily theme CSS, synced from node_modules (generated — do not edit, not committed)
```

The Lily headless components (`ArticleLayout`, `Header`, `Card`, ...) come from `@lilydesignsystem/svelte-headless`; the header's link/search/theme/locale/text-size/share row comes from `@lilydesignsystem/svelte-picker-bar`. Both are regular npm dependencies — see `package.json`.

Content lives under `$lib/server`, so the book's Markdown can never reach a browser bundle: pages read it from `+page.server.js` loads, which run at build time under prerendering.

## Locales

This book publishes in 48 locales — canonical English (Oxford spelling), three further English variants, and AI translations into 44 other locales (see the book's README for the list). The site never hardcodes this list: `content.js`'s `locales()` discovers it from whatever `content/locales/*/` directories `sync-content.mjs` vendored, so a new locale in the book publishes here with no code change beyond its UI strings (`src/lib/i18n.js`) and label (`src/lib/locales.js`).

In the book, every non-English locale translates both the `topics/` directory name and each topic slug (for example `locales/cs-001/témata/veřejná-hodnota/`). `sync-content.mjs` finds each locale's topics directory (the subdirectory whose children carry a `.locale-peer-id`), vendors it back as `topics/`, and rewrites the locale index's intro links to match, so routes stay `/<locale>/topics/<slug>/`. Slugs are native-script and therefore percent-encoded in URLs. The locale switcher finds "the same page" through the topic's peer-id, so differing slugs never need special-casing.

## Sitemap

`scripts/build-sitemap.mjs` (part of `pnpm run build`) writes `build/sitemap.xml` from the generated HTML — one entry per canonical page, percent-encoded — and `static/robots.txt` points to it. See `spec/sitemap/index.md`.

## AI-readable outputs

`scripts/build-llms.mjs` (part of `pnpm run build`) writes `build/llms.txt` ([llmstxt.org](https://llmstxt.org/) format) and `build/llms.json`: the book's parts and topics in reading order, with canonical-locale URLs, derived from `content/README.md` and `content/locales/` so they never go stale; `pnpm run sync` also commits copies at the repository root and in `static/`. The repository's `AGENTS.md` describes the conventions for agents.

## Themes

All Lily default themes ship in `static/assets/themes/` — not a curated subset. `PickerBar` offers them in its own default order, so the site never hand-maintains a theme list. The site's stylesheet is written against Lily's semantic tokens (`--lily-surface`, `--lily-text`, `--lily-space-*`), so every theme works without a per-theme branch. Theme and text size choices persist in the reader's browser.

`bin/sync-themes.mjs` re-copies every theme stylesheet the `@lilydesignsystem/themes` package ships, on every `pnpm install` — there is no per-site curation to edit.

## Deploy

`.github/workflows/pages.yml` builds and deploys on every push to `main`. In the repository settings, set **Pages → Source** to **GitHub Actions**.

The configuration follows the SvelteKit guidance for [GitHub Pages](https://svelte.dev/docs/kit/adapter-static#GitHub-Pages):

- **`fallback: '404.html'`** — every route is prerendered, so the fallback is only reached by a URL that does not exist. GitHub Pages serves `404.html` for those, which replaces its default 404 page with this site's own (`src/routes/+error.svelte`).
- **`static/.nojekyll`** — stops Jekyll from stripping paths that begin with an underscore, such as `_app/`.
- **`paths.base`** — this repository is named `<org>.github.io`, so the site is served from the domain root and the base path is **empty**. The docs set `BASE_PATH` to the repository name; that is correct for a *project* site served from `/<repo>/`, and wrong here — it would serve the site from `/public-value-metrics.github.io/`. The workflow therefore leaves `BASE_PATH` unset.

To deploy this source somewhere that *is* under a subpath, set it at build time:

```sh
BASE_PATH=/some-subpath pnpm run build
```

Links in the built output are relative (SvelteKit's `paths.relative` default), so the site also survives being moved without a rebuild.
