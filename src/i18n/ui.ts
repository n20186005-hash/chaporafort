// i18n मूळ (UI कोश) — कोंकणी (मूळ) व इंग्रजी.
// सगळे दृश्यमान UI मजकूर (नेव्हिगेशन, बटणां, चुकीचें पान, फूटर लेबल) हांगा केंद्रीत आसात,
// म्हणजे घटकांतलो कोंकणी/इंग्रजी परत-परत लिखपाचो भंय ना.
import {
  type Locale, LOCALES, DEFAULT_LOCALE, localeBase, otherLocale, hreflangFor
} from './utils';

export type { Locale };
export { LOCALES, DEFAULT_LOCALE, localeBase, otherLocale, hreflangFor };

type Entry = { kok: string; en: string };
type Dict = Record<string, Entry>;

// --- UI कोश (साधे वेवसाय-विरहीत मजकूर; {gp}/{country} हे बदली चिन्नां आसात) ---
export const ui: Dict = {
  // भास-बदल (बटण दुसरे भासेचें नांव दाखयता)
  languageEnglish: { kok: 'English', en: 'English' },
  languageKonkani: { kok: 'कोंकणी', en: 'कोंकणी' },

  // CTA / बटण
  openMap: { kok: 'नकाशो उगडात', en: 'Open map' },
  backHome: { kok: 'मुखेल पानार वचात', en: 'Back to home' },

  // aria-label
  mainNav: { kok: 'मुखेल नेव्हिगेशन', en: 'Main navigation' },
  topicsNav: { kok: 'पानांतलीं मुखेल प्रकरणां', en: 'Page topics' },

  // फूटर
  footerIntro: {
    kok: 'हें संकेतथळ स्वतंत्र, नाफायद्याचें प्रवासी माहिती मार्गदर्शक प्रकल्प आसा. ताचो कसलोच सरकारी विभाग, किल्ला व्यवस्थापन संस्था वा अधिकृत संघटनेकडेन संबंद ना.',
    en: 'This site is an independent, non-commercial tourist-information guide project. It is not affiliated with any government department, fort management body, or official organisation.'
  },
  footerInfo: {
    kok: 'हांगाची पर्यटन माहिती {gp} हद्दीची {country} सरकारांत नोंद, {country} सरकार, गोवा पर्यटन विकास महामंडळ आनी भारत सरकारच्या पर्यटन मंत्रालयाच्या सार्वजनिक माहितीकडेन ताळो घालून तयार केल्या; ह्यात व्यावसायिक शिफारशी नात.',
    en: 'The tourism information here is compiled in line with public information from the {gp} (under {country} government records), the {country} government, the Goa Tourism Development Corporation (GTDC) and the Ministry of Tourism, Government of India; it contains no commercial endorsements.'
  },
  imgRights: {
    kok: 'चित्र हक्क: ह्या संकेतथळार दाखयल्ल्या छायाचित्रांचो कॉपीराइट मूळ छायाचित्रकारांकडेन आसा; परवान्यांची माहिती ',
    en: 'Image rights: copyright of the photographs shown on this site belongs to the original photographers; licence details are given in the '
  },
  termsLink: { kok: 'सेवा अटींत', en: 'Terms of Service' },
  copyright: {
    kok: '© 2026 चापोरा किल्ला प्रवासी मार्गदर्शक. सगळे हक्क राखीव.',
    en: '© 2026 Chapora Fort Tourist Guide. All rights reserved.'
  },
  footerTopics: { kok: 'मुखेल प्रकरणां', en: 'Main topics' },
  footerPrivacy: { kok: 'गोपनीयता धोरण', en: 'Privacy policy' },
  footerTerms: { kok: 'सेवा अटी', en: 'Terms of service' },
  footerCookies: { kok: 'कुकी मांडावळ', en: 'Cookie policy' },

  // 404 (चुकीचें पान)
  nfTitle: { kok: 'पान मेळ्ळें ना', en: 'Page not found' },
  nfDesc: { kok: 'मागिल्लें पान मेळ्ळें ना.', en: 'The requested page was not found.' },
  nfH1: { kok: 'हें पान मेळ्ळें ना', en: 'This page was not found' },
  nfP: {
    kok: 'मुखेल प्रवासी मार्गदर्शकाक परत वचून किल्ल्याची माहिती, नकाशो आनी भेट नियोजन पळयात.',
    en: 'Go back to the main tourist guide to see the fort info, map and visit planning.'
  }
};

// --- भास-निश्चित नेव्हिगेशन (अँकर सगळ्यांक सामायिक, इंग्रजी slugs) ---
type NavEntry = { id: string; label: Entry };
const SECTION_NAV: NavEntry[] = [
  { id: 'history', label: { kok: 'इतिहास', en: 'History' } },
  { id: 'visit', label: { kok: 'भेट नियोजन', en: 'Visit planning' } },
  { id: 'weather', label: { kok: 'हवामान', en: 'Weather' } },
  { id: 'season', label: { kok: 'ऋतूनुरूप योजना', en: 'Seasonal plan' } },
  { id: 'transport', label: { kok: 'कशें पावचें', en: 'How to reach' } },
  { id: 'facilities', label: { kok: 'सुविधा', en: 'Facilities' } },
  { id: 'map', label: { kok: 'नकाशो', en: 'Map' } },
  { id: 'around', label: { kok: 'भोंवतणी', en: 'Around' } },
  { id: 'itinerary', label: { kok: 'वावर-मार्ग', en: 'Itineraries' } },
  { id: 'responsibility', label: { kok: 'जबाबदारी', en: 'Responsibility' } },
  { id: 'stories', label: { kok: 'कथा', en: 'Stories' } },
  { id: 'faq', label: { kok: 'प्रश्नोत्तर', en: 'FAQ' } }
];

/** भासानुसार नेव्हिगेशन यादी; ids दिल्यार तांचीच उप-यादी मेळता. */
export function navItems(locale: Locale, ids?: string[]): { id: string; label: string }[] {
  const list = ids ? SECTION_NAV.filter((n) => ids.includes(n.id)) : SECTION_NAV;
  return list.map((n) => ({ id: n.id, label: n.label[locale] }));
}

/** एका चावीक एका भासेचो मजकूर (बदली चिन्न {var} भरपाची सोय). */
export function t(locale: Locale, key: string, vars?: Record<string, string>): string {
  const entry = ui[key];
  let s = entry ? entry[locale] : key;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) s = s.split('{' + k + '}').join(v);
  }
  return s;
}

/** सगळ्यो UI चावयो एका भासेक निश्चित करून ऑब्जेक्ट म्हणून दिता. */
export function getI18n(locale: Locale, vars?: Record<string, string>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of Object.keys(ui)) out[key] = t(locale, key, vars);
  return out;
}
