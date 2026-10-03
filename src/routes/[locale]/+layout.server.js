import { error, redirect } from '@sveltejs/kit';
import { resolve } from '$app/paths';
import { book } from '#lib/server/book.js';
import { locales, localeAliases } from '#lib/server/content.js';

// `entries()` for the [locale] segment lives in +page.server.js (this
// directory's own) and in topics/[slug]/+page.server.js — `entries()` is only
// a valid export from +page.js/+page.server.js/+server.js, not from a layout.

export function load({ params, url }) {
	const aliasTarget = localeAliases()[params.locale];
	if (aliasTarget) {
		// A bare two-letter code ("en") for a "World" locale ("en-001") — one
		// canonical address per locale, so redirect rather than rendering the
		// same content under two URLs. Runs for every route under [locale],
		// so the whole subtree (not just the locale root) follows the alias.
		const tail = url.pathname.slice(`/${params.locale}`.length) || '/';
		redirect(301, resolve(`${aliasTarget}${tail}`));
	}
	if (!locales().includes(params.locale)) {
		error(404, `Unknown locale: ${params.locale}`);
	}
	// This locale's own book title (translated locales/<locale>/index.md when
	// it has one, else canonical English — see book.js). Set here, once, for
	// the whole /[locale]/ subtree, rather than in every leaf page's
	// own load: the root +layout.svelte reads it off the merged page.data,
	// where it overrides the root layout's canonical-locale bookTitle used
	// for the locale-agnostic routes (the root picker, /about/).
	return { locale: params.locale, bookTitle: book(params.locale).title };
}
