import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
}

const SITE_URL = "https://wifire.com.br";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "WI-FIRE Engenharia Contra Incêndio";

const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage,
  jsonLd,
}: SEOProps) => {
  const location = useLocation();
  const fullTitle = title.includes("WI-Fire") ? title : `${title} | WI-Fire Engenharia Contra Incêndio`;
  const canonicalUrl = canonical || `${SITE_URL}${location.pathname}`;
  const image = ogImage || DEFAULT_IMAGE;

  useEffect(() => {
    // Title
    document.title = fullTitle;

    // Meta tags
    const setMeta = (name: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("robots", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    // Canonical
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalUrl;

    // Open Graph
    setMeta("og:title", fullTitle, true);
    setMeta("og:description", description, true);
    setMeta("og:type", ogType, true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", image, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:site_name", SITE_NAME, true);
    setMeta("og:locale", "pt_BR", true);

    // Twitter
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    // JSON-LD
    if (jsonLd) {
      let script = document.querySelector('script[data-seo="dynamic"]') as HTMLScriptElement;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "dynamic");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(jsonLd);
    }

    return () => {
      const dynamicScript = document.querySelector('script[data-seo="dynamic"]');
      if (dynamicScript) dynamicScript.remove();
    };
  }, [fullTitle, description, keywords, canonicalUrl, ogType, image, jsonLd]);

  return null;
};

export default SEO;

// Reusable JSON-LD schemas
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "WI-Fire Engenharia Contra Incêndio",
  "description": "Empresa especializada em engenharia contra incêndio: PPCI, RPCI, AVCB, Habite-se, Alvarás, Laudos Técnicos e Inspeções Preventivas. Atuação em Santa Catarina, Paraná e Rio Grande do Sul.",
  "url": "https://wifire.com.br",
  "telephone": "+5547997689880",
  "email": "wifireengenharia@gmail.com",
  "image": "https://wifire.com.br/og-image.jpg",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "R. Gervasio Regis Jr, Lote Q2 - São Vicente",
    "addressLocality": "Itajaí",
    "addressRegion": "SC",
    "postalCode": "88309-600",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -26.9078,
    "longitude": -48.6655
  },
  "areaServed": [
    { "@type": "State", "name": "Santa Catarina" },
    { "@type": "State", "name": "Paraná" },
    { "@type": "State", "name": "Rio Grande do Sul" }
  ],
  "knowsAbout": [
    "NBR 13714: Sistemas de Hidrantes",
    "NBR 12693: Extintores de Incêndio",
    "ABNT NBR 9077: Saídas de Emergência",
    "ITC BMSC: Instruções Técnicas do Corpo de Bombeiros"
  ],
  "serviceType": [
    "Projeto Preventivo Contra Incêndio (PPCI)",
    "Relatório Preventivo Contra Incêndio (RPCI)",
    "Auto de Vistoria do Corpo de Bombeiros (AVCB)",
    "Habite-se",
    "Alvarás e Laudos Técnicos",
    "Inspeções Preventivas de Equipamentos"
  ],
  "sameAs": [
    "https://instagram.com/wifireengenharia",
    "https://facebook.com/wifireengenharia",
    "https://linkedin.com/company/wifireengenharia"
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export const createBlogPostSchema = (post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": post.title,
  "description": post.excerpt,
  "image": post.image,
  "datePublished": post.date,
  "dateModified": post.date,
  "author": {
    "@type": "Organization",
    "name": "WI-Fire Engenharia Contra Incêndio",
    "url": "https://wifire.com.br"
  },
  "publisher": {
    "@type": "Organization",
    "name": "WI-Fire Engenharia Contra Incêndio",
    "url": "https://wifire.com.br"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `https://wifire.com.br/blog/${post.slug}`
  }
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const faqSchema = (questions: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": questions.map((q) => ({
    "@type": "Question",
    "name": q.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": q.answer
    }
  }))
});
