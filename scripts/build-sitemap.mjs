// Builds build/sitemap.xml from the generated HTML. See spec/sitemap/index.md.
import { readdirSync, writeFileSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const BUILD = process.argv[2] ?? 'build';
const SITE = 'https://public-value-metrics.github.io';
const LIMIT = 50000;
const today = new Date().toISOString().slice(0, 10);

function walk(dir, out = []) {
	for (const e of readdirSync(dir, { withFileTypes: true })) {
		const p = join(dir, e.name);
		if (e.isDirectory()) walk(p, out);
		else if (e.name === 'index.html') out.push(p);
	}
	return out;
}

const xml = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const urls = walk(BUILD)
	.map((file) => relative(BUILD, file).split(sep).slice(0, -1))
	// A bare two-letter first segment (/cs/, /pl/) is a redirect alias of its -001 locale: not a canonical page.
	.filter((segments) => !(segments.length > 0 && /^[a-z]{2}$/.test(segments[0])))
	.map((segments) => `${SITE}/${segments.map(encodeURIComponent).join('/')}${segments.length ? '/' : ''}`)
	.sort();

if (urls.length > LIMIT) throw new Error(`sitemap has ${urls.length} URLs; the limit is ${LIMIT} per file. Split it into a sitemap index.`);

writeFileSync(
	join(BUILD, 'sitemap.xml'),
	`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
		urls.map((u) => `\t<url><loc>${xml(u)}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
		`\n</urlset>\n`
);
console.log(`sitemap: ${urls.length} URLs`);
