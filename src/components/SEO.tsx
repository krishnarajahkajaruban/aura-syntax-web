import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  canonicalUrl?: string;
}

const SEO = ({
  title = 'AuraSyntax | Software Development Company | Web & AI Solutions',
  description = 'AuraSyntax is a leading software development company providing expert web development, mobile apps, AI, machine learning, blockchain, and cloud computing services.',
  keywords = 'AuraSyntax, software development, web development, mobile apps, AI, machine learning, blockchain, cloud computing, DevOps, UI/UX design, e-commerce, system integration, IT consulting, custom software, web applications, mobile applications',
  image = 'https://www.aurasyntax.com/og-image.png',
  url,
  type = 'website',
  canonicalUrl,
  noindex = false
}: SEOProps & { noindex?: boolean }) => {
  const finalTitle = title.includes('AuraSyntax') ? title : `${title} | AuraSyntax`;
  const finalDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  // Use provided canonicalUrl, or url, or current path as fallback
  // In an SPA, we want the canonical to match the actual page content
  const currentPath = typeof window !== 'undefined' ? window.location.origin + window.location.pathname : 'https://www.aurasyntax.com/';
  let finalUrl = canonicalUrl || url || currentPath;

  // Normalize homepage URL to have a trailing slash
  if (finalUrl === 'https://aurasyntax.com' || finalUrl === 'https://www.aurasyntax.com') {
    finalUrl = 'https://www.aurasyntax.com/';
  }

  const siteName = 'AuraSyntax';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={finalUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      <meta name="googlebot" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@aurasyntax" />
      <meta name="twitter:creator" content="@aurasyntax" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={finalTitle} />

      {/* Structured Data for WebPage */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": finalTitle,
          "description": finalDescription,
          "url": finalUrl,
          "inLanguage": "en-US",
          "isPartOf": {
            "@type": "WebSite",
            "name": "AuraSyntax",
            "url": "https://www.aurasyntax.com"
          },
          "about": {
            "@type": "Organization",
            "name": "AuraSyntax",
            "url": "https://www.aurasyntax.com"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.aurasyntax.com"
            }]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

