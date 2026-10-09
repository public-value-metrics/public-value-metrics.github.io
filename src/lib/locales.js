// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`#lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-gb-oxendict': 'English - Great Britain, Oxford Spelling',
	'en-001': 'English',
	'en-us': 'English - United States',
	'en-gb': 'English - Great Britain',
	'cy-gb': 'Cymraeg - Y Deyrnas Unedig',
	'cy-001': 'Cymraeg',
	'zh-001': '中文',
	'zh-cn': '中文 - 中国大陆',
	'hi-001': 'हिन्दी',
	'ar-001': 'العربية',
	'es-001': 'Español',
	'fr-001': 'Français',
	'ru-001': 'Русский',
	'bn-001': 'বাংলা',
	'pt-001': 'Português',
	'id-001': 'Bahasa Indonesia',
	'ur-001': 'اردو',
	'de-de': 'Deutsch - Deutschland',
	'de-001': 'Deutsch',
	'ja-jp': '日本語 - 日本',
	'ja-001': '日本語',
	'ar-eg': 'العربية - مصر',
	'bn-bd': 'বাংলা - বাংলাদেশ',
	'hi-in': 'हिन्दी - भारत',
	'es-es': 'Español - España',
	'fr-fr': 'Français - France',
	'ru-ru': 'Русский - Россия',
	'pt-pt': 'Português - Portugal',
	'ur-pk': 'اردو - پاکستان',
	'id-id': 'Bahasa Indonesia - Indonesia',
	'ko-kr': '한국어 - 대한민국',
	'ko-001': '한국어',
	'sv-se': 'Svenska - Sverige',
	'sv-001': 'Svenska',
	'nl-nl': 'Nederlands - Nederland',
	'nl-001': 'Nederlands',
	'vi-001': 'Tiếng Việt',
	'da-001': 'Dansk',
	'et-001': 'Eesti',
	'it-001': 'Italiano',
	'tr-001': 'Türkçe',
	'pl-001': 'Polski',
	'uk-001': 'Українська',
	'cs-001': 'Čeština',
	'ro-001': 'Română',
	'hu-001': 'Magyar',
	'el-001': 'Ελληνικά',
	'fi-001': 'Suomi',
	'is-001': 'Íslenska',
	'sw-001': 'Kiswahili',
	'th-001': 'ไทย',
	'zh-tw': '中文 - 台灣'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}

/**
 * Chooses which available locale best matches the browser's preferred
 * languages (`navigator.language` / `navigator.languages`), or `null` if none
 * does. Tags are normalised first, so `cy_GB`, `cy-GB` and `CY-gb` are all
 * `cy-gb`. For each preferred tag in order, the first of these that exists
 * wins: the exact locale (`cy-gb`); the language's World locale (`de-AT` →
 * `de-001`); any other locale in that language (`pt-AO` → `pt-pt`).
 */
export function matchLocale(preferred, available) {
	const set = new Set(available);
	for (const raw of preferred) {
		if (!raw) continue;
		const tag = String(raw).trim().toLowerCase().replace(/_/g, '-');
		const language = tag.split('-')[0];
		if (!language) continue;
		if (set.has(tag)) return tag;
		if (set.has(`${language}-001`)) return `${language}-001`;
		const sameLanguage = available.find((code) => code.split('-')[0] === language);
		if (sameLanguage) return sameLanguage;
	}
	return null;
}
