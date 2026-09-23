// भास-निवड (i18n) – कोंकणी (मूळ) व इंग्रजी (नवीन).
// सगळे दृश्यमान मजकूर प्रत्येक घटकांत `L` अॅब्जेक्ट म्हणून जोडला आसा,
// म्हणजे कोंकणी आनी इंग्रजी प्रतिकडेन सारकेच आसात (चुकीचें राहना जाय ना).
export type Locale = 'kok' | 'en';

export const LOCALES: Locale[] = ['kok', 'en'];
export const DEFAULT_LOCALE: Locale = 'kok';

// कोंकणी (default) पानावर इंग्रजी आवृत्ती `/en/`; इंग्रजी पानावर कोंकणी `/`.
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'kok' : 'en';
}

// hreflang सूचक: कोंकणीचो x-default म्हणून वापर.
export function hreflangFor(locale: Locale): string {
  return locale === 'en' ? 'en' : 'x-default';
}

// भासानुसार पानाचो पाय रस्तो (default locale प्रीफिक्स ना).
export function localeBase(locale: Locale): string {
  return locale === 'en' ? '/en' : '';
}
