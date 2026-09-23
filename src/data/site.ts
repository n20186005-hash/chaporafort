// चापोरा किल्ला (Chapora Fort) – सगळीं स्थिर तथ्यां (NAP / भूगोल / नकाशो / गुणांकन) एकाच जाग्यार.
// साइट-व्यापी SEO नांव, JSON-LD, नकाशो, हिरो कार्ड हांतूंतल्यान हेंच मूल्य वापरतात.

export const DOMAIN_NAME = 'www.chaporafort.com';
export const SITE_ORIGIN = `https://${DOMAIN_NAME}`;

// --- संस्था (entity) नांवां -------------------------------------------------
export const ATTRACTION_FULL_NAME = 'Chapora Fort';
export const ATTRACTION_FULL_NAME_LOCAL = 'चापोरा किल्ला';
export const ATTRACTION_SHORT_NAME = 'चपोरा फोर्ट';
export const ATTRACTION_ALT_NAMES = [
  'चापोरा किल्लो',
  'Chapora Fort Vagator',
  'Chapora Fort Goa',
  'Chapora Fort Vagator Goa',
  'Dil Chahta Hai Fort'
];

// --- भूगोल / पत्तो ---------------------------------------------------------
export const CITY_NAME = 'Vagator';
export const CITY_NAME_LOCAL = 'वागातोर';
export const LOCALITY_NAME = 'Chapora';
export const LOCALITY_NAME_LOCAL = 'चापोरा';
export const STATE_PROVINCE = 'Goa';
export const STATE_PROVINCE_LOCAL = 'गोवा';
export const COUNTRY_NAME = 'India';
export const COUNTRY_NAME_LOCAL = 'भारत';
export const COUNTRY_CODE_2LETTER = 'IN';
export const POSTAL_CODE = '403509';
export const STREET_ADDRESS = 'Chapora Fort Trail, Vagator, Anjuna, Chapora';

export const LATITUDE = 15.604637485009572;
export const LONGITUDE = 73.73438817702883;
export const PLUS_CODE = 'JP3P+VQ Vagator, Goa, India';

// --- नकाशो आनी अधिकृत स्रोत ------------------------------------------------
export const MAPS_SHARE_URL = 'https://maps.app.goo.gl/3z6axsvdHe2spoFg8';
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6834.903368503735!2d73.73438817702883!3d15.604637485009572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfe9c66255a1e7%3A0x370be2005b85a107!2sChapora%20Fort!5e1!3m2!1skok!2sin!4v1788420890371!5m2!1skok!2sin&hl=kok&gl=IN';

export const NEARBY_LANDMARK_1 = 'Vagator Beach';
export const NEARBY_LANDMARK_1_LOCAL = 'वागातोर किनारो';
export const NEARBY_LANDMARK_2 = 'Anjuna Beach';
export const NEARBY_LANDMARK_2_LOCAL = 'अंजुना किनारो';

export const GOVT_TOURISM_URL = 'https://www.goa.gov.in/places/chapora-fort/';
export const GTDC_URL = 'https://goa-tourism.com/fort/chapora-fort/';
export const INDIA_TOURISM_URL = 'https://tourism.gov.in/';

// --- गुणांकन (गूगल नकाशा स्नॅपशॉट) ---------------------------------------
export const RATING_VALUE = 4.2;
export const REVIEW_COUNT = 27239;
export const ATTRACTION_TYPE = 'Fortress';
export const TELEPHONE = '+91 832 249 4500';

// --- SEO साइट नांव (संस्था + शार + प्रवासी मार्गदर्शक) ----------------------
export const SITE_NAME = `Chapora Fort (${ATTRACTION_FULL_NAME_LOCAL}) ${CITY_NAME_LOCAL} — प्रवासी मार्गदर्शक`;

/** उप-पानांच्या शीर्षकाक साइट नांव जोडटा (उदा. 'गोपनीयता धोरण | ...'). */
export function withSiteName(suffix: string): string {
  return `${suffix} | ${SITE_NAME}`;
}

// --- भूगोलीय श्रेणी (ब्रेडक्रंब / मजकूर बंधन) -----------------------------
export const GEO_HIERARCHY = [
  { label: COUNTRY_NAME_LOCAL, latin: COUNTRY_NAME },
  { label: STATE_PROVINCE_LOCAL, latin: STATE_PROVINCE },
  { label: `${CITY_NAME_LOCAL} / ${LOCALITY_NAME_LOCAL}`, latin: `${CITY_NAME} / ${LOCALITY_NAME}` },
  { label: ATTRACTION_FULL_NAME_LOCAL, latin: ATTRACTION_FULL_NAME }
];
