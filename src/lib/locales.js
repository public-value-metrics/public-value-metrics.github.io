// Locale display metadata shared between the root locale-picker page and the
// header's language picker. The set of *available* locales always comes from
// the vendored content (`$lib/server/content.js` locales()) — this module
// only supplies how to label/order codes that content already declared.

/** Human-readable name for each locale code, in its own language where possible. */
export const LOCALE_LABELS = {
	'en-gb-oxendict': 'English (Great Britain, Oxford Spelling)',
	'en-001': 'English (World)',
	'en-us': 'English (United States)',
	'en-gb': 'English (Great Britain)',
	'cy-gb': 'Cymraeg (Y Deyrnas Unedig)',
	'cy-001': 'Cymraeg (Byd)',
	'zh-001': '中文（世界）',
	'hi-001': 'हिन्दी (विश्व)',
	'ar-001': 'العربية (العالم)',
	'es-001': 'Español (Mundo)',
	'fr-001': 'Français (Monde)',
	'ru-001': 'Русский (Мир)',
	'bn-001': 'বাংলা (বিশ্ব)',
	'pt-001': 'Português (Mundo)',
	'id-001': 'Bahasa Indonesia (Dunia)',
	'ur-001': 'اردو (دنیا)'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}
