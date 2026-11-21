export type CategorySlug = 'wlosy' | 'pielegnacja-skory' | 'kosmetyki' | 'uroda';

export interface Category {
  slug: CategorySlug;
  name: string;
  shortName: string;
  description: string;
  editorialIntro: string;
  seoTitle: string;
  seoDescription: string;
}

export interface Author {
  id: string;
  name: string;
  role: string;
  specialization: string;
  bio: string;
  initials: string;
}

export interface ArticleSubsection {
  id: string;
  heading: string;
  paragraphs: string[];
}

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  subsections?: ArticleSubsection[];
  pullQuote?: string;
  keyPoints?: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  authorId: string;
  publishedAt: string; // ISO YYYY-MM-DD
  readTimeMinutes: number;
  image: string;
  imageAlt: string;
  imageCaption: string;
  featured?: boolean;
  popularRank?: number;
  isGuide?: boolean;
  tags: string[];
  sections: ArticleSection[];
}
