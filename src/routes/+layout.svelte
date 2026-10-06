<script>
	import SearchGate from '#lib/SearchGate.svelte';
	import { resolve } from '$app/paths';
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import { Footer, Header, SkipLink } from '@lilydesignsystem/svelte-headless';
	import PickerBar from '@lilydesignsystem/svelte-picker-bar';
	import { DEFAULT_LOCALE, localeLabel } from '#lib/locales.js';
	import { ui } from '#lib/i18n.js';

	let { data, children } = $props();

	// page.data is the merged data across the whole layout hierarchy, so on a
	// locale-scoped route this picks up that locale's own bookTitle (set by
	// [locale]/+layout.server.js, overriding this root layout's own
	// canonical-locale one) instead of always showing the English title in
	// the header/footer. The 404.html fallback is rendered without layout
	// data at all, so this falls back to something sensible rather than
	// throwing on a page that exists to be shown when something has already
	// gone wrong.
	const bookTitle = $derived(page.data?.bookTitle ?? data?.bookTitle ?? 'Public Value Metrics');
	const locales = $derived(data?.locales ?? []);
	const locale = $derived(page.params.locale);
	const t = $derived(ui(locale ?? DEFAULT_LOCALE));

	// Contents/Topics/Search only make sense once a locale is chosen; outside
	// a locale (the root picker, /about/) the nav only offers Home and About.
	const topLinks = $derived(
		locale
			? [
					{ href: `/${locale}/`, label: t.navHome },
					{ href: `/${locale}/contents/`, label: t.navContents },
					{ href: `/${locale}/topics/`, label: t.navTopicsAZ },
					{ href: `/${locale}/search/`, label: t.navSearch },
					{ href: '/about/', label: t.navAbout }
				]
			: [
					{ href: '/', label: t.navHome },
					{ href: '/about/', label: t.navAbout }
				]
	);

	const shareTargets = $derived([
		{
			id: 'email',
			label: t.shareEmailLabel,
			href: (url, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
		},
		{
			id: 'linkedin',
			label: t.shareLinkedinLabel,
			href: (url) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
		},
		{
			id: 'reddit',
			label: t.shareRedditLabel,
			href: (url, title) =>
				`https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
		},
		{
			id: 'bluesky',
			label: t.shareBlueskyLabel,
			href: (url, title) => `https://bsky.app/intent/compose?text=${encodeURIComponent(`${title} ${url}`)}`
		},
		{
			id: 'mastodon',
			label: t.shareMastodonLabel,
			href: (url, title) =>
				`https://mastodonshare.com/?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
		}
	]);

	const path = $derived(page.url.pathname);

	function current(href) {
		return path === resolve(`${href}`.slice(1)) || path === href;
	}

	// The locale picker only changes `lang`/`dir` and calls this — it never
	// navigates on its own. On a topic page, `localeLinks` (from book.js, via
	// each topic's .locale-peer-id) gives the exact URL for the same topic in
	// the target locale, since slugs can differ by locale. Off a topic page,
	// swapping the leading `/<code>/` segment is exact (home/contents/topics/
	// search have no per-locale slug). With no locale in the URL at all
	// (the root picker, /about/), there's nothing to preserve — go to that
	// locale's home.
	function navigateToLocale(next) {
		// The picker also calls this when it merely *follows* the URL (a
		// link, Back/Forward, a direct load): it applies the new locale and
		// fires onChange. Those are not user choices, and `page` can still
		// hold the previous route at that moment, so navigating from it
		// would bounce the reader back to the locale they just left. The
		// address bar is the source of truth: if it already names `next`,
		// there is nothing to do.
		if (typeof window !== 'undefined') {
			const urlLocale = window.location.pathname.split('/')[1];
			if (urlLocale === next) return;
		}
		const links = page.data?.localeLinks;
		if (links?.[next]) {
			goto(resolve(`${links[next]}`.slice(1)), { refreshAll: true });
			return;
		}
		if (locale) {
			goto(resolve(`${path.replace(/^\/[\w-]+/, `/${next}`)}`.slice(1)), { refreshAll: true });
			return;
		}
		// A search (/?<target>) is on the root page: the picker's automatic
		// restore of the stored locale must not navigate away and drop it.
		if (page.url.pathname === '/' && page.url.search) return;
		goto(resolve(`${next}/`), { refreshAll: true });
	}
</script>

<svelte:head>
	<meta name="theme-color" content="#ffffff" />
</svelte:head>

<SkipLink class="skip-link" href="#main" label={t.skipToContent} />

<Header class="site-header" label="Site">
	<div class="site-header-inner">
		<a class="site-brand" href={resolve('')}>
			<span class="site-brand-mark" aria-hidden="true">🏛️</span>
			<span class="site-brand-name">{bookTitle}</span>
		</a>

		<nav class="site-nav" aria-label="Main">
			{#each topLinks as link (link.href)}
				<a
					href={resolve(link.href.slice(1))}
					aria-current={current(link.href) ? 'page' : undefined}
				>{link.label}</a>
			{/each}
			<a href="https://github.com/public-value-metrics/public-value-metrics">GitHub</a>
		</nav>

		{#snippet shareIcon()}
			<!-- Outline arrow, matching testingexamples.github.io's share-picker
			     icon: an explicit-size SVG (not an em-scaled text glyph), so it
			     sidesteps the --lily-picker-icon-scale font-size math entirely. -->
			<svg
				class="share-picker-icon"
				viewBox="0 0 16 16"
				width="1.05rem"
				height="1.05rem"
				fill="none"
				stroke="currentColor"
				stroke-width="1.6"
				stroke-linecap="round"
				stroke-linejoin="round"
				aria-hidden="true"
			><path d="M2.5 8h11M9 3.5 13.5 8 9 12.5"></path></svg>
		{/snippet}

		<PickerBar
			class="site-controls"
			labels={{
				theme: t.pickerTheme,
				locale: t.pickerLanguage,
				textSize: t.pickerTextSize,
				share: t.pickerShare
			}}
			themesUrl={resolve('assets/themes/')}
			themeProps={{
				defaultValue: 'light',
				detectFromSystem: true,
				storageKey: 'public-value-metrics.theme'
			}}
			locales={locales}
			localeProps={{
				value: locale ?? '',
				defaultValue: DEFAULT_LOCALE,
				storageKey: 'public-value-metrics.locale',
				localeLabels: Object.fromEntries(locales.map((code) => [code, localeLabel(code)])),
				onChange: navigateToLocale
			}}
			textSizeProps={{
				defaultValue: 'normal',
				storageKey: 'public-value-metrics.text-size'
			}}
			shareTargets={shareTargets}
			shareProps={{
				title: bookTitle,
				copyLabel: t.shareCopyLink,
				copiedLabel: t.shareCopied,
				copyFailedLabel: t.shareCopyFailed,
				children: shareIcon
			}}
		/>
	</div>
</Header>

<div class="site-body">
	<main id="main" class="site-main">
		<SearchGate {children} />
	</main>
</div>

<Footer class="site-footer" label="Site">
	<div class="site-footer-inner">
		<p>
			<strong>{bookTitle}</strong>{t.footerTaglineSuffix}
		</p>
		<p class="site-footer-note">
			{t.footerNote}
		</p>
		<p>
			{t.footerLedBy}
			<a href="https://linkedin.com/in/joelparkerhenderson" rel="noopener">Joel Parker Henderson</a>.
		</p>
		<nav class="site-footer-links" aria-label="Footer">
			{#if locale}
				<a href={resolve(`${locale}/contents/`)}>{t.navContents}</a>
				<a href={resolve(`${locale}/topics/`)}>{t.navTopicsAZ}</a>
				<a href={resolve(`${locale}/search/`)}>{t.navSearch}</a>
			{/if}

			<a href={resolve('about/')}>{t.navAbout}</a>

			<a
				href="https://github.com/public-value-metrics/public-value-metrics"
			>{t.footerSourceLink}</a>
		</nav>
	</div>
</Footer>
