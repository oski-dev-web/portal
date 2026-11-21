import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

interface SeoOptions {
  title: string;
  description: string;
  type?: 'website' | 'article';
}

export function useSeo({ title, description, type = 'website' }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_CONFIG.name)
      ? title
      : `${title} | ${SITE_CONFIG.name}`;

    document.title = fullTitle;

    const updateMeta = (selector: string, attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMeta('meta[name="description"]', 'name', 'description', description);
    updateMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    updateMeta('meta[property="og:description"]', 'property', 'og:description', description);
    updateMeta('meta[property="og:type"]', 'property', 'og:type', type);
  }, [title, description, type]);
}
