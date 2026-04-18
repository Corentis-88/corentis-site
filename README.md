# Corentis Website

Premium launch site for Corentis, built with Next.js, TypeScript, and Tailwind CSS and configured for static deployment to Cloudflare Pages.

## Included pages

- Home
- Platform
- Financial Services
- Clinical Trials
- About
- Contact / Register Interest
- Privacy Notice
- Cookie Policy
- Terms of Use

## Local setup

1. Install Node.js 22 or later.
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env.local` if you want to configure the form endpoint or future optional scripts:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

5. Open `http://localhost:3000`.

## Build commands

Create a production build and static export:

```bash
npm run build
```

The exported Cloudflare-ready files will be written to `out/`.

## Cloudflare Pages deployment

This site is configured as a static Next.js export because the launch version is a fast marketing site with a client-side form integration point.

Cloudflare Pages setup:

1. Push this repository to GitHub or GitLab.
2. In Cloudflare, create a new Pages project from that repository.
3. Use the `Next.js (Static HTML Export)` preset, or set the following manually:

- Build command: `npm run build`
- Build output directory: `out`
- Node version: `22`

4. Add any required environment variables in the Cloudflare Pages project settings.
5. Deploy.

Official reference used for this setup:
- [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/)

Cloudflare notes:
- Cloudflare recommends Workers for full SSR Next.js apps.
- This launch version is intentionally static for speed, simplicity, and straightforward Pages deployment.

## Form wiring

The Contact / Register Interest form is wired to Formspree through `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` and remains compatible with static export on Cloudflare Pages.

### Configure the endpoint

1. Create a form in Formspree.
2. Copy the Formspree endpoint. It will look like:

```text
https://formspree.io/f/yourFormId
```

3. Add it locally in `.env.local`:

```bash
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://formspree.io/f/yourFormId
```

4. Add the same variable in Cloudflare Pages for Preview and Production.

### Submitted field names

The form submits these exact field names to Formspree:

- `first_name`
- `last_name`
- `email`
- `organisation`
- `interest_type`
- `message`
- `consent`

### How submission works

- The endpoint comes only from `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`.
- The form uses the actual browser form element as the payload source and posts it to Formspree with `fetch` using `FormData`.
- Requests are sent with `Accept: application/json` so the site can show inline success and error states.
- If the endpoint is missing, the submit button is disabled and the page shows a clean inline message instead of pretending to submit.

### Development checks

In development only:

- the form shows a small status line at the bottom saying `Form endpoint loaded` or `Form endpoint missing`
- the browser console logs:
  - `form submit fired`
  - whether the endpoint value is present or missing
  - success or failure of the POST

### How to test

1. Set a real Formspree endpoint in `.env.local`.
2. Start the site with `npm run dev`.
3. Open the Contact page and confirm the debug line says `Form endpoint loaded`.
4. Submit the form with values in every field.
5. Confirm:
   - the submit button enters the loading state
   - the success message appears
   - the submission appears in Formspree Submissions
6. Open browser devtools and confirm the console logs the submit event and POST success.
7. To test missing endpoint handling, remove `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, restart the dev server, and confirm:
   - the debug line says `Form endpoint missing`
   - the submit button is disabled
   - the inline missing-endpoint message is shown

## Cookie consent and optional scripts

- The site includes a cookie consent banner.
- A consent-preference cookie/local storage value is used to remember the user’s choice.
- No non-essential external script is loaded unless consent is given and `NEXT_PUBLIC_OPTIONAL_SCRIPT_SRC` is configured.

## Environment variables

- `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`
  Use the full Formspree endpoint URL, for example `https://formspree.io/f/yourFormId`.

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
  Optional. The UI includes a clear placeholder block showing where Turnstile will be swapped in later.

- `NEXT_PUBLIC_OPTIONAL_SCRIPT_SRC`
  Optional. Reserved for a future non-essential external script. It will only load after cookie consent is given.

## Replacing brand assets, images, and content

- Logo assets live in `public/brand/`
  Current site variants:
  `corentis-logo-dark.png`
  `corentis-logo-light.png`
  `corentis-mark-icon.png`
  plus the original uploaded source file `corentis-logo-source.png`
- Editorial imagery lives in `public/images/`
- Shared platform and company copy is in `src/lib/site.ts`
- Page copy lives inside each page in `src/app/**/page.tsx`
- Image provenance is documented in `image-sources.md`

## Project structure

```text
src/
  app/
    about/
    clinical-trials/
    contact/
    cookies/
    financial-services/
    platform/
    privacy/
    terms/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
    ui/
    cookie-banner.tsx
    contact-form.tsx
    evidence-pack.tsx
    hero-architecture.tsx
    optional-scripts.tsx
    page-hero.tsx
  lib/
    site.ts
    utils.ts
public/
  brand/
  images/
```
