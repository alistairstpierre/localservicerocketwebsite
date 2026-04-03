// Shared URLs and site-wide constants for Local Service Rocket pages (single source of truth).
// SEO/NAP: keep in sync with footer, contact page, and JSON-LD (`src/lib/jsonLd.ts`).

/** Production site origin — also set in `astro.config.mjs` for builds & sitemap. */
export const SITE_URL = "https://localservicerocket.com";

export const BUSINESS_NAME = "Local Service Rocket";

/** One sentence for meta/schema; US-first audience, honest NZ registered office. */
export const BUSINESS_DESCRIPTION =
  "AI-assisted websites, local SEO, and advertising for local service businesses — most clients in the United States; we also serve Australia and New Zealand from our Wellington office.";

export const BUSINESS_EMAIL = "hello@localservicerocket.com";

export const BUSINESS_PHONE_DISPLAY = "+64 27 726 6282";

/** E.164 for `tel:` links and schema `telephone`. */
export const BUSINESS_PHONE_E164 = "+64277266282";

export const BUSINESS_ADDRESS = {
  streetAddress: "Rutherford House, 23 Lambton Quay, Pipitea",
  addressLocality: "Wellington",
  addressRegion: "Wellington",
  postalCode: "6011",
  addressCountry: "NZ",
} as const;

/** Consistent Google Maps search link for directions (NAP). */
export const BUSINESS_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rutherford+House%2C+23+Lambton+Quay%2C+Pipitea%2C+Wellington+6011%2C+New+Zealand";

export const BUSINESS_LOGO_PATH = "/logo-no-text.webp";

/** Default social/OG image (`optimize-public-rasters.mjs` from `lsr-logo.png`). */
export const DEFAULT_OG_IMAGE_PATH = "/lsr-logo.webp";

export const BUSINESS_WEBSITE_ID = `${SITE_URL}/#website`;

export const BUSINESS_ENTITY_ID = `${SITE_URL}/#business`;

export const AREAS_SERVED = [
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "Australia" },
  { "@type": "Country", name: "New Zealand" },
] as const;

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export function postalAddressSchema(): Record<string, string> {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS_ADDRESS.streetAddress,
    addressLocality: BUSINESS_ADDRESS.addressLocality,
    addressRegion: BUSINESS_ADDRESS.addressRegion,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressCountry: BUSINESS_ADDRESS.addressCountry,
  };
}

export const SKOOL_URL = "https://www.skool.com/60-minute-marketing-5841";

/** Post–playbook opt-in; same path for ESP “success redirect” (absolute URL in production) */
export const BLUEPRINT_THANKS_PATH = "/blueprint/thanks";

/**
 * Playbook → Kit: `action` from your Form embed (HTML). Ours: SEO playbook form id `9282778`.
 * In Kit, set “after subscribe” to redirect to your live `.../blueprint/thanks` (not only the in-form success message), or users stay on Kit’s confirmation page.
 * `null` = local test only (no POST to Kit).
 */
export const KIT_PLAYBOOK_FORM_ACTION: string | null = "https://app.kit.com/forms/9282778/subscriptions";

/** Set when you add a Calendly (or other) booking URL for strategy calls */
export const STRATEGY_CALL_BOOKING_URL: string | null = null;
