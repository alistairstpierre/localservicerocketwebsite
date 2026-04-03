// JSON-LD @graph builders for BaseLayout: one script per page per docs/SITE-STRUCTURE-AND-SEO-GUIDE.md (Part 5).
// Imports NAP/IDs from `src/data/site.ts`; homepage defines LocalBusiness + WebSite; inner pages reference #business and #website only.

import {
  AREAS_SERVED,
  BUSINESS_DESCRIPTION,
  BUSINESS_EMAIL,
  BUSINESS_ENTITY_ID,
  BUSINESS_LOGO_PATH,
  BUSINESS_NAME,
  BUSINESS_PHONE_E164,
  BUSINESS_WEBSITE_ID,
  DEFAULT_OG_IMAGE_PATH,
  SITE_URL,
  absoluteUrl,
  postalAddressSchema,
} from "../data/site";

const areaServedJson = AREAS_SERVED.map((a) => ({ ...a }));

export function buildHomepageJsonLd(pageTitle: string, pageDescription: string): string {
  const logoUrl = absoluteUrl(BUSINESS_LOGO_PATH);
  const imageUrl = absoluteUrl(DEFAULT_OG_IMAGE_PATH);
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": BUSINESS_WEBSITE_ID,
      name: BUSINESS_NAME,
      url: SITE_URL,
      description: BUSINESS_DESCRIPTION,
      inLanguage: "en-US",
      publisher: { "@id": BUSINESS_ENTITY_ID },
    },
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ENTITY_ID,
      name: BUSINESS_NAME,
      url: SITE_URL,
      description: BUSINESS_DESCRIPTION,
      telephone: BUSINESS_PHONE_E164,
      email: BUSINESS_EMAIL,
      address: postalAddressSchema(),
      image: imageUrl,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
      areaServed: areaServedJson,
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: BUSINESS_PHONE_E164,
          email: BUSINESS_EMAIL,
          contactType: "customer service",
          areaServed: areaServedJson,
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: pageTitle,
      description: pageDescription,
      inLanguage: "en-US",
      isPartOf: { "@id": BUSINESS_WEBSITE_ID },
      about: { "@id": BUSINESS_ENTITY_ID },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    },
  ];
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": graph,
  });
}

export type InnerSchemaPageType = "WebPage" | "AboutPage" | "ContactPage";

export function buildInnerPageJsonLd(input: {
  pathname: string;
  pageType: InnerSchemaPageType;
  title: string;
  description: string;
  /** Relative path (e.g. /alistair-profile.webp) for About/hero when applicable */
  primaryImagePath?: string;
}): string {
  const path = input.pathname.endsWith("/") && input.pathname !== "/"
    ? input.pathname.slice(0, -1)
    : input.pathname;
  const url = `${SITE_URL.replace(/\/$/, "")}${path === "/" ? "" : path}`;
  const webpageId = `${url}#webpage`;

  const node: Record<string, unknown> = {
    "@type": input.pageType,
    "@id": webpageId,
    url,
    name: input.title,
    description: input.description,
    inLanguage: "en-US",
    isPartOf: { "@id": BUSINESS_WEBSITE_ID },
    mainEntity: { "@id": BUSINESS_ENTITY_ID },
  };

  if (input.primaryImagePath) {
    node.primaryImageOfPage = {
      "@type": "ImageObject",
      url: absoluteUrl(input.primaryImagePath),
    };
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [node],
  });
}
