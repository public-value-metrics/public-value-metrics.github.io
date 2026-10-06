<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import {
		ContentsList,
		ContentsListItem,
		ContentsNav
	} from '@lilydesignsystem/svelte-headless';
	import { ui } from '#lib/i18n.js';

	let { data } = $props();
	const t = $derived(ui(page.params.locale));

	/** Anchor id for a part, so the sidebar and deep links can target it. */
	function partId(title) {
		return title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/^-|-$/g, '');
	}
</script>

<svelte:head>
	<title>{t.navContents} — {data.bookTitle}</title>
	<meta name="description" content={t.contentsMetaDescription(data.bookTitle)} />
</svelte:head>

<div class="page page-contents">
	<header class="page-header">
		<h1>{t.navContents}</h1>
	</header>

	<ContentsNav class="contents" label={t.navContents}>
		<ContentsList class="contents-parts">
			{#each data.parts as part, i (part.title)}
				<ContentsListItem class="contents-part" id={partId(part.title)}>
					<span class="contents-part-title">{i + 1} {part.title}</span>
					<ContentsList class="contents-part-list">
						{#each part.entries as entry, j (entry.slug)}
							<ContentsListItem class="contents-entry">
								<a
									class="contents-entry-link"
									href={resolve(entry.href.slice(1))}
								>{i + 1}.{j} {entry.title}</a>
							</ContentsListItem>
						{/each}
					</ContentsList>
				</ContentsListItem>
			{/each}
		</ContentsList>
	</ContentsNav>
</div>
