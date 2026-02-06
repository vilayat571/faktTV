// src/hooks/useMetaTags.ts
import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
  publishedTime?: string;
  category?: string;
  keywords?: string;
}

export const useMetaTags = ({
  title,
  description,
  image = 'https://www.fact-news.info/og-image.jpg',
  url = 'https://www.fact-news.info/',
  author,
  publishedTime,
  category,
  keywords,
}: MetaTagsProps) => {
  useEffect(() => {
    // Update document title
    document.title = `${title} | Fact News`;

    // Helper function to set or update meta tags
    const setMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    setMetaTag('description', description, false);
    if (keywords) {
      setMetaTag('keywords', keywords, false);
    }
    if (author) {
      setMetaTag('author', author, false);
    }

    // Open Graph tags
    setMetaTag('og:title', title);
    setMetaTag('og:description', description);
    setMetaTag('og:image', image);
    setMetaTag('og:url', url);
    setMetaTag('og:type', 'article');
    setMetaTag('og:site_name', 'Fact News');
    setMetaTag('og:locale', 'az_AZ');

    // Open Graph Image dimensions
    setMetaTag('og:image:width', '1200');
    setMetaTag('og:image:height', '630');
    setMetaTag('og:image:alt', title);

    // Article specific tags
    if (publishedTime) {
      setMetaTag('article:published_time', publishedTime);
    }
    if (author) {
      setMetaTag('article:author', author);
    }
    if (category) {
      setMetaTag('article:section', category);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image', false);
    setMetaTag('twitter:title', title, false);
    setMetaTag('twitter:description', description, false);
    setMetaTag('twitter:image', image, false);
    setMetaTag('twitter:image:alt', title, false);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Cleanup function to reset to default on unmount
    return () => {
      document.title = 'Fact News | Azərbaycan və Dünya Xəbərləri';
      setMetaTag('og:title', 'Fact News | Azərbaycan və Dünya Xəbərləri');
      setMetaTag('og:description', 'Azərbaycan və dünya üzrə ən son xəbərlər');
      setMetaTag('og:image', 'https://www.fact-news.info/og-image.jpg');
      setMetaTag('og:url', 'https://www.fact-news.info/');
      canonical.href = 'https://www.fact-news.info/';
    };
  }, [title, description, image, url, author, publishedTime, category, keywords]);
};