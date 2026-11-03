// 42 मार्गदर्शक पानांचो एकठांय आदार (content index).
import type { Guide, GuideCategory, GuideCategoryMeta } from './types';
import { historyGuides } from './history';
import { visitCoreGuides } from './visit-core';
import { visitPracticalGuides } from './visit-practical';
import { nearbyGuides } from './nearby';
import { foodGuides } from './food';
import { itineraryGuides } from './itinerary';

export type {
  Guide,
  GuideCategory,
  GuidePriority,
  GuideCopy,
  GuideSection,
  GuideFaq,
  GuideCategoryMeta
} from './types';

// सगळीं पानां एका क्रमान (श्रेणी-गटानुसार).
export const guides: Guide[] = [
  ...historyGuides,
  ...visitCoreGuides,
  ...visitPracticalGuides,
  ...nearbyGuides,
  ...foodGuides,
  ...itineraryGuides
];

export const GUIDE_CATEGORIES: GuideCategoryMeta[] = [
  { id: 'history', en: 'Fort history & culture', kok: 'किल्ल्याचो इतिहास आनी संस्कृती' },
  { id: 'visit', en: 'Plan your visit', kok: 'भेट नियोजन' },
  { id: 'nearby', en: 'Nearby places & walks', kok: 'भोंवतणीचीं थळां आनी वाट' },
  { id: 'food', en: 'Food & cafés', kok: 'जेवण आनी कॅफे' },
  { id: 'itinerary', en: 'Itineraries', kok: 'भोंवडी-मार्ग' }
];

export function guidesByCategory(category: GuideCategory): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function categoryLabel(category: GuideCategory, locale: 'en' | 'kok'): string {
  const meta = GUIDE_CATEGORIES.find((c) => c.id === category);
  return meta ? meta[locale] : category;
}
