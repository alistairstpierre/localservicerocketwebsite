// Shared URLs and site-wide constants for Local Service Rocket pages (single source of truth).

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
