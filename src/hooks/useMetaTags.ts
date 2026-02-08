// hooks/useMetaTags.ts
import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  image?: string;
  url: string;
  author?: string;
  publishedTime?: string;
  category?: string;
  keywords?: string;
  generateDynamicImage?: boolean;
}

export const useMetaTags = ({
  title,
  description,
  image,
  url,
  author,
  publishedTime,
  category,
  keywords}: MetaTagsProps) => {
  useEffect(() => {
    // Update title
    document.title = `${title} | Fakt TV`;

    // Helper function to update or create meta tag
    const updateMetaTag = (property: string, content: string, isProperty = true) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${property}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, property);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary meta tags
    updateMetaTag('description', description, false);
    if (keywords) updateMetaTag('keywords', keywords, false);
    if (author) updateMetaTag('author', author, false);

    // Open Graph tags
    updateMetaTag('og:type', 'article');
    updateMetaTag('og:url', url);
    updateMetaTag('og:title', title);
    updateMetaTag('og:description', description);
    updateMetaTag('og:site_name', 'Fakt TV');
    updateMetaTag('og:locale', 'az_AZ');

    if (image) {
      updateMetaTag('og:image', image);
      updateMetaTag('og:image:secure_url', image);
      updateMetaTag('og:image:alt', title);
    }

    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime);
    }

    if (author) {
      updateMetaTag('article:author', author);
    }

    if (category) {
      updateMetaTag('article:section', category);
    }

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', false);
    updateMetaTag('twitter:url', url, false);
    updateMetaTag('twitter:title', title, false);
    updateMetaTag('twitter:description', description, false);
    
    if (image) {
      updateMetaTag('twitter:image', image, false);
      updateMetaTag('twitter:image:alt', title, false);
    }

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": title,
      "description": description,
      "image": image || 'https://www.fact-news.info/og-image.jpg',
      "datePublished": publishedTime || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": author || "Fakt TV"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Fakt TV",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.fact-news.info/logo.png"
        }
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      }
    };

    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

  }, [title, description, image, url, author, publishedTime, category, keywords]);
};