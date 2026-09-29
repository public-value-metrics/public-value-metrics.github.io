#!/usr/bin/env node
// Copy the Lily Design System theme stylesheets this site offers from the
// @lilydesignsystem/themes npm package into static/, so adapter-static picks
// them up as plain files at /assets/themes/<theme>.css.
//
// Themes are published as CSS, not JS, so they can't be `import`ed like the
// picker/headless packages — they have to be copied into static/ by hand.
// This runs on every `pnpm install` (see package.json's "postinstall"), so
// static/assets/themes/ is reproducible from node_modules and is gitignored
// rather than committed — no local Lily checkout, LILY env var, or manual
// "vendor" step required any more.
//
// Every theme the package ships is copied — not a curated subset — matching
// PickerBar's own DEFAULT_THEMES catalog, so the theme picker never offers a
// theme this site can't actually load.

import { copyFile, mkdir, readdir, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const themesSrc = resolve(siteRoot, 'node_modules', '@lilydesignsystem', 'themes', 'dist');

if (!existsSync(themesSrc)) {
	console.log('No node_modules/@lilydesignsystem/themes found (not installed yet) — skipping.');
	process.exit(0);
}

const themesOut = join(siteRoot, 'static', 'assets', 'themes');

const themeFiles = (await readdir(themesSrc)).filter((name) => name.endsWith('.css')).sort();

await rm(themesOut, { recursive: true, force: true });
await mkdir(themesOut, { recursive: true });

for (const file of themeFiles) {
	await copyFile(join(themesSrc, file), join(themesOut, file));
}

console.log(`Synced ${themeFiles.length} Lily theme(s) from @lilydesignsystem/themes.`);
