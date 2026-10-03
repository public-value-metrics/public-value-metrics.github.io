import { error } from '@sveltejs/kit';
import { topic } from '#lib/server/book.js';
import { locales, localeAliases, topicSlugs } from '#lib/server/content.js';

// Slugs can differ by locale (see book.js), so the full (locale, slug) pair
// set is enumerated explicitly here rather than relying on a naive cross
// product with the parent [locale] entries — a per-locale slug list crossed
// blindly against every locale would try to prerender slugs that don't exist
// in some locales and miss the locale-specific ones that do.
//
// A two-letter alias ("en") uses its target locale's ("en-001") own slugs —
// the alias never reaches this file's own load(), since the parent layout's
// redirect runs first, but each (alias, slug) pair still needs its own
// prerendered page for that redirect to exist at.
export function entries() {
	const aliases = localeAliases();
	const direct = locales().flatMap((locale) => topicSlugs(locale).map((slug) => ({ locale, slug })));
	const aliased = Object.entries(aliases).flatMap(([alias, target]) =>
		topicSlugs(target).map((slug) => ({ locale: alias, slug }))
	);
	return [...direct, ...aliased];
}

export function load({ params }) {
	const page = topic(params.locale, params.slug);
	if (!page) error(404, `No topic named ${params.slug} in locale ${params.locale}`);
	return page;
}
