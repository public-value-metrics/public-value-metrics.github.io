#!/usr/bin/env node
// Work around a pnpm bug where a *nested* dependency's semver range resolves
// to a stale version even though a newer one satisfying the same range is
// published and resolves correctly for direct/pinned installs.
//
// Concretely: @lilydesignsystem/svelte-picker-bar depends on
// @lilydesignsystem/svelte-{locale,theme,text-size,share}-picker at "^0.1.0".
// Each of those was fixed in 0.1.2 to depend on svelte-headless "^0.2.0"
// (0.1.1 depended on "^0.1.0", which never resolves to the 0.2.0 API those
// components actually call — see each package's own 0.1.2 CHANGELOG entry).
// 0.1.2 is published and pnpm resolves it correctly for a direct dependency
// (this site pins all four to exactly "0.1.2" for that reason), but
// svelte-picker-bar's own *nested* "^0.1.0" resolution keeps landing on 0.1.1
// regardless — reproducible even against a fully cleared pnpm store and
// metadata cache, and even with `pnpm.overrides` set (silently ignored by
// this pnpm version for nested ranges). Filed upstream; not yet root-caused.
//
// Until that's fixed, this script repoints svelte-picker-bar's nested
// node_modules/@lilydesignsystem/<picker> symlinks to this site's own
// root-level (correctly-resolved) 0.1.2 copies. Idempotent — safe to run
// even when pnpm's resolution is already correct (a no-op in that case).
// Run automatically via package.json's "postinstall" script.

import { readdir, readlink, symlink, unlink, lstat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pnpmDir = join(siteRoot, 'node_modules', '.pnpm');

const PICKERS = [
	'svelte-locale-picker',
	'svelte-theme-picker',
	'svelte-text-size-picker',
	'svelte-share-picker'
];

if (!existsSync(pnpmDir)) {
	console.log('No node_modules/.pnpm found (not using pnpm, or not installed yet) — skipping.');
	process.exit(0);
}

const entries = await readdir(pnpmDir, { withFileTypes: true });

function findStoreDir(pickerName, version) {
	const prefix = `@lilydesignsystem+${pickerName}@${version}`;
	const match = entries.find((e) => e.isDirectory() && e.name.startsWith(prefix));
	return match ? join(pnpmDir, match.name) : null;
}

// This site's own root-level dependency pins the correct version (see
// package.json) — read it back from the root node_modules symlink rather
// than hardcoding "0.1.2" a second time here, so this script keeps working
// if that pin is ever bumped.
async function rootPinnedVersion(pickerName) {
	const rootLink = join(siteRoot, 'node_modules', '@lilydesignsystem', pickerName);
	if (!existsSync(rootLink)) return null;
	const target = await readlink(rootLink).catch(() => null);
	if (!target) return null;
	const m = target.match(new RegExp(`\\+${pickerName}@([0-9.]+)_`));
	return m ? m[1] : null;
}

const pickerBarDirs = entries.filter((e) => e.isDirectory() && e.name.startsWith('@lilydesignsystem+svelte-picker-bar@'));

let fixed = 0;
for (const pickerBarDir of pickerBarDirs) {
	const pickerBarNodeModules = join(pnpmDir, pickerBarDir.name, 'node_modules', '@lilydesignsystem');
	if (!existsSync(pickerBarNodeModules)) continue;

	for (const picker of PICKERS) {
		const correctVersion = await rootPinnedVersion(picker);
		if (!correctVersion) continue; // this site doesn't pin it (yet) — nothing to correct against

		const linkPath = join(pickerBarNodeModules, picker);
		if (!existsSync(linkPath)) continue;

		const stat = await lstat(linkPath);
		if (!stat.isSymbolicLink()) continue; // unexpected layout — don't touch it

		const currentTarget = await readlink(linkPath);
		if (currentTarget.includes(`@${correctVersion}_`)) continue; // already correct

		const storeDir = findStoreDir(picker, correctVersion);
		if (!storeDir) {
			console.warn(`Could not find a store entry for ${picker}@${correctVersion} — leaving ${linkPath} unchanged.`);
			continue;
		}

		const newTarget = relative(dirname(linkPath), join(storeDir, 'node_modules', '@lilydesignsystem', picker));
		await unlink(linkPath);
		await symlink(newTarget, linkPath);
		console.log(`Fixed: ${picker} in svelte-picker-bar's nested resolution (${currentTarget} -> ${newTarget})`);
		fixed += 1;
	}
}

console.log(fixed > 0 ? `Corrected ${fixed} stale nested symlink(s).` : 'Nothing to fix — pnpm resolved everything correctly this time.');
