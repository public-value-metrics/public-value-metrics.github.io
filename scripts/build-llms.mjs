// Writes llms.txt and llms.json into each directory given (default: build): a machine-readable map of the book for AI agents.
// Source of truth is content/README.md (parts + topics, in reading order) and content/locales/.
// See https://llmstxt.org/ for the llms.txt format.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUT_DIRS = process.argv.length > 2 ? process.argv.slice(2) : ['build'];
const SITE = 'https://public-value-metrics.github.io';
const REPO = 'https://github.com/public-value-metrics/public-value-metrics';
const DEFAULT = 'en-gb-oxendict';

const readme = readFileSync('content/README.md', 'utf8');
const title = /^#\s+(.+)$/m.exec(readme)?.[1] ?? 'Public Value Metrics';
const summary = readme.split('\n').find((l) => l.trim() && !l.startsWith('#') && !l.startsWith('New here')) ?? '';

const parts = [];
for (const line of readme.split('\n')) {
	const h = /^##\s+(.+)$/.exec(line);
	if (h) { parts.push({ title: h[1].trim(), topics: [] }); continue; }
	const t = /^-\s+\[([^\]]+)\]\(locales\/[\w-]+\/topics\/([^/)]+)\/\)\s*(?:[—–-]\s*(.*))?$/.exec(line);
	if (t && parts.length) {
		parts.at(-1).topics.push({
			title: t[1], slug: t[2], summary: (t[3] ?? '').trim(),
			url: `${SITE}/${DEFAULT}/topics/${t[2]}/`
		});
	}
}
const bookParts = parts.filter((p) => p.topics.length);
const locales = readdirSync('content/locales', { withFileTypes: true })
	.filter((e) => e.isDirectory()).map((e) => e.name).sort();
const topicCount = bookParts.reduce((n, p) => n + p.topics.length, 0);

const txt = [
	`# ${title}`, '',
	`> ${summary}`, '',
	`${topicCount} topics in ${bookParts.length} parts, published in ${locales.length} locales. Canonical locale: \`${DEFAULT}\` (English, Oxford spelling); the other locales are AI-translated. Each topic page covers: definition, why it matters, the maths, a worked example, the software engineering connection, pitfalls, sources.`, '',
	`Topic URLs follow \`${SITE}/<locale>/topics/<slug>/\`. Slugs are English in the English locales and translated in every other locale; \`/<locale>/topics/\` lists a locale's slugs. Source and conventions: ${REPO} (see AGENTS.md).`, '',
	...bookParts.flatMap((p) => [`## ${p.title}`, '', ...p.topics.map((t) => `- [${t.title}](${t.url})${t.summary ? `: ${t.summary}` : ''}`), '']),
	'## Optional', '',
	`- [All locales](${SITE}/): choose a language`,
	`- [Search index](${SITE}/search-index.json): full-text search data`,
	`- [Source repository](${REPO}): Markdown, specs, maintainer skills`, ''
].join('\n');

const json = JSON.stringify({
	title, summary, site: SITE, repository: REPO, defaultLocale: DEFAULT, locales,
	topicUrlPattern: `${SITE}/<locale>/topics/<slug>/`,
	parts: bookParts
}, null, 2) + '\n';
for (const dir of OUT_DIRS) {
	writeFileSync(join(dir, 'llms.txt'), txt);
	writeFileSync(join(dir, 'llms.json'), json);
}
console.log(`llms: ${topicCount} topics, ${locales.length} locales`);
