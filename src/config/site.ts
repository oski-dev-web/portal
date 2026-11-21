import type { Category, CategorySlug } from '../types/editorial';

/**
 * Centralna konfiguracja portalu.
 * Aby zmienić nazwę serwisu w całej aplikacji, wystarczy zaktualizować wartość `name` poniżej.
 */
export const SITE_CONFIG = {
  name: 'BEAUTIVA',
  tagline: 'Artykuły i poradniki o świadomej pielęgnacji, włosach i kosmetykach',
  description:
    'BEAUTIVA to spokojny, czytelny portal z artykułami o tematyce beauty. Publikujemy rzetelne teksty i poradniki o pielęgnacji skóry, włosach, składach kosmetyków oraz codziennych rytuałach.',
  domain: 'beautiva.pl',
  contactEmail: 'kontakt@beautiva.pl',
  city: 'Warszawa',
  foundedYear: 2026,
  isDemo: true,
} as const;

export const CATEGORIES: Record<CategorySlug, Category> = {
  wlosy: {
    slug: 'wlosy',
    name: 'Włosy',
    shortName: 'Włosy',
    description: 'Świadoma pielęgnacja skóry głowy, równowaga PEH i rytuały wzmacniające pasma.',
    editorialIntro:
      'Zdrowe, elastyczne włosy zaczynają się od spokojnej, dobrze oczyszczonej skóry głowy i zrozumienia ich porowatości. W dziale Włosy łączymy wiedzę trychologiczną z praktycznymi schematami codziennej pielęgnacji.',
    seoTitle: `Włosy — artykuły i poradniki | ${SITE_CONFIG.name}`,
    seoDescription:
      'Praktyczne artykuły o pielęgnacji włosów i skóry głowy: porowatość, równowaga PEH, olejowanie, ochrona termiczna i delikatne oczyszczanie.',
  },
  'pielegnacja-skory': {
    slug: 'pielegnacja-skory',
    name: 'Pielęgnacja skóry',
    shortName: 'Pielęgnacja skóry',
    description: 'Odbudowa bariery hydrolipidowej, nowoczesne rutyny i łagodna pielęgnacja cery.',
    editorialIntro:
      'Zamiast mnożyć kolejne kroki w łazience, skupiamy się na fizjologii naskórka, barierze lipidowej i konsekwencji. Dział Pielęgnacja skóry porządkuje wiedzę o cerze wrażliwej, suchej, mieszanej i dojrzałej.',
    seoTitle: `Pielęgnacja skóry — rutyny i wiedza | ${SITE_CONFIG.name}`,
    seoDescription:
      'Merytoryczne poradniki pielęgnacji twarzy i ciała: bariera hydrolipidowa, oczyszczanie dwuetapowe, fotoprotekcja oraz masaż twarzy.',
  },
  kosmetyki: {
    slug: 'kosmetyki',
    name: 'Kosmetyki',
    shortName: 'Kosmetyki',
    description: 'Czytanie składów INCI, substancje aktywne i świadome budowanie kosmetyczki.',
    editorialIntro:
      'Zrozumienie etykiety pozwala oddzielić obietnice marketingowe od realnego działania formulacji. Wyjaśniamy mechanizmy składników aktywnych, różnice między konsystencjami oraz zasady bezpiecznego łączenia produktów.',
    seoTitle: `Kosmetyki — składy INCI i składniki aktywne | ${SITE_CONFIG.name}`,
    seoDescription:
      'Przewodniki po składnikach kosmetycznych: retinoidy, niacynamid, peptydy, filtry UV, kwasy PHA oraz czytanie INCI bez mitów.',
  },
  uroda: {
    slug: 'uroda',
    name: 'Uroda',
    shortName: 'Uroda',
    description: 'Naturalny makijaż, rytuały spowalniające tempo dnia i holistyczne podejście do estetyki.',
    editorialIntro:
      'Uroda rozumiana szerzej niż sam kosmetyk: to światło na skórze, komfort w codziennym makijażu, higiena snu i nawyki wspierające regenerację. Publikujemy teksty o subtelnym stylu i codziennym dobrostanie.',
    seoTitle: `Uroda — naturalny makijaż i codzienne nawyki | ${SITE_CONFIG.name}`,
    seoDescription:
      'Inspiracje i poradniki z działu Uroda: minimalistyczny makijaż dzienny, pielęgnacja dłoni i paznokci, sen a wygląd cery oraz rytuały wieczorne.',
  },
};

export const CATEGORY_LIST: Category[] = [
  CATEGORIES.wlosy,
  CATEGORIES['pielegnacja-skory'],
  CATEGORIES.kosmetyki,
  CATEGORIES.uroda,
];

export const EDITORIAL_IMAGES = {
  heroSkincareRitual: '/src/assets/images/hero_skincare_ritual_1795268599684.jpg',
  hairSilkCare: '/src/assets/images/hair_silk_care_1795268599184.jpg',
  hairScalpBotanical: '/src/assets/images/hair_scalp_botanical_1795268600416.jpg',
  skincareBarrierCream: '/src/assets/images/skincare_barrier_cream_1795268598897.jpg',
  skincareFacialMassage: '/src/assets/images/skincare_facial_massage_1795268599708.jpg',
  cosmeticsBotanicalLab: '/src/assets/images/cosmetics_botanical_lab_1795268599153.jpg',
  cosmeticsSpfMinimal: '/src/assets/images/cosmetics_spf_minimal_1795268599994.jpg',
  beautyEditorialPortrait: '/src/assets/images/beauty_editorial_portrait_1795268599709.jpg',
} as const;
