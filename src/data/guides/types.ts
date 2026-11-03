// 42 प्रवासी मार्गदर्शक पानां खातीर आदर्श (data model).
// दर पान द्विभाषी (इंग्रजी + कोंकणी) आसा; कोंकणी देवनागरी लिपींत.

export type GuideCategory = 'history' | 'visit' | 'nearby' | 'food' | 'itinerary';
export type GuidePriority = 'P0' | 'P1' | 'P2';

// एक प्रकरण: शीर्षक + परिच्छेद; वैकल्पिक बिंदू-यादी.
export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  q: string;
  a: string;
}

// एका भासेचो सगळो मजकूर.
export interface GuideCopy {
  /** SEO शीर्षक (साइट नांव वेगळें जोडटा). */
  title: string;
  /** पानाचो मुखेल शीर्षक (h1). */
  h1: string;
  /** मेटा वर्णन. */
  description: string;
  /** प्रस्तावना परिच्छेद. */
  intro: string[];
  sections: GuideSection[];
  faqs?: GuideFaq[];
  /** तथ्य-तपासणी / स्रोत सूचना. */
  verifyNote: string;
}

export interface Guide {
  /** भासांत सामायिक URL स्लग (उदा. 'tickets-and-timings'). */
  slug: string;
  category: GuideCategory;
  priority: GuidePriority;
  /** संबंदीत पानांचे स्लग (आंतरिक दुवे). */
  related: string[];
  en: GuideCopy;
  kok: GuideCopy;
}

export interface GuideCategoryMeta {
  id: GuideCategory;
  en: string;
  kok: string;
}
