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
	'nl-nl': 'Nederlands - Nederland'
};

export const DEFAULT_LOCALE = 'en-gb-oxendict';

export function localeLabel(code) {
	return LOCALE_LABELS[code] ?? code;
}
