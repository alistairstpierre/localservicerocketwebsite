# Hooking `/blueprint` to Kit (step by step)

Your website **always** shows **your** design on `/blueprint`. Kit does not replace the layout. You only copy a **Form URL** and sometimes **hidden fields** from Kit into this repo so submissions go to your list.

Official Kit reference: [Form embedding basics](https://help.kit.com/en/articles/4009572-form-embedding-basics) (Kit Help Center).

---

## 1. Form — not a Landing Page

| Use this | Skip this for `/blueprint` |
|----------|---------------------------|
| **Form** — a signup block Kit expects you to put on *your* site | **Landing page** — a **full page hosted by Kit**. It is **not** something you “paste into” your Astro form the same way |

If you only created a **Landing page**, create a **Form** as well (or use an existing Form). The **Embed** flow below is for **Forms** only.

---

## 2. Where “Embed → HTML” lives in Kit

Kit moves UI sometimes, but as of their docs the path is:

1. Log in to **Kit** ([app.kit.com](https://app.kit.com)).
2. Open the **Grow** section in the main navigation.
3. Click **Landing Pages & Forms** (or go straight to [app.kit.com/forms](https://app.kit.com/forms)).
4. In the list, click the **name of your Form** (not a landing page) to open the **Form builder**.
5. In the **top right** of the Form builder, click **Embed**.
6. In the modal/panel that opens, you should see **tabs or options** along the top, e.g. **JavaScript** (Kit’s default) and **HTML**.
7. Choose **HTML** (raw HTML). That code is what contains a plain `<form action="https://...">` you can align with our Astro form.

**If you don’t see “HTML”:** you might be on a **Landing page** share screen (it looks different). Go back to **Forms**, open a **Form**, then **Embed** again.

**If you only see JavaScript:** switch the embed type to **HTML** in that Embed UI — Kit documents a separate **HTML** option specifically for editing / stripping styling.

**If Kit only gave you a `<script>` plus a `<form>` (JavaScript embed):** you can still use it. The real submit address is the **`action`** on that `<form>` (example: `https://app.kit.com/forms/9282778/subscriptions`). We **do not** paste Kit’s script on `/blueprint` so your styling stays yours; the browser sends a normal form `POST` to that URL with `email_address`.

---

## 3. What to copy into this project

1. Open the **HTML** embed snippet from Kit.
2. Find the opening tag, e.g.  
   `<form action="https://..." method="post" ...>`
3. Copy the full **quoted `action` URL** (everything inside `action="…"`).
4. Paste it into **`KIT_PLAYBOOK_FORM_ACTION`** in `src/data/site.ts` (keep the quotes in code: it’s a string).
5. Inside that same HTML snippet, look for **`<input type="hidden" ...>`** fields. If any exist, copy them **inside** `<form id="blueprint-form">` in `blueprint.astro` (ours had none for form `9282778`).
6. Make sure Kit’s email field **`name`** matches your input. Kit often uses **`email_address`**. Our blueprint form already uses `name="email_address"` — if Kit’s HTML uses a different name, change our input to match Kit.

---

## 4. After subscribe: send people to your site

Your embed’s `data-options` JSON may say **`"action":"message"`** with **`"redirect_url":""`**. That means after submit, people see Kit’s success text (or a Kit page), **not** your `/blueprint/thanks`.

In the **Form builder** in Kit (same form → **Settings** / **Incentive** / after-subscribe options — exact labels vary), switch **after subscribe** to **redirect** (or add a redirect URL) and set:

- **`https://YOUR-DOMAIN.com/blueprint/thanks`** (your real production domain, `https://` included)

Then a successful signup will land on your site’s thank-you page.

---

## 5. Testing

- **`KIT_PLAYBOOK_FORM_ACTION` set to `null` in `site.ts`:** the site fakes success and redirects to `/blueprint/thanks` in the browser (no Kit call). Good for layout/testing.
- **Set to Kit’s `action` URL (production):** submit a **real** test email, confirm the subscriber in Kit, and confirm Kit redirects to your live **`/blueprint/thanks`** after you change the form settings above.

---

## Summary

1. Create or pick a **Form** (not only a landing page).  
2. **Grow → Landing Pages & Forms → [your Form] → Embed → HTML.**  
3. Put **`action`** in `site.ts`, **`hidden` inputs** in `blueprint.astro`, align **`email_address`**.  
4. Set Kit’s post-signup redirect to **`https://yourdomain.com/blueprint/thanks`**.
