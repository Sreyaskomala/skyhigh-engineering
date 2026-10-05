# Skyhigh Engineering

A responsive Next.js App Router website for prefab, modular and container building solutions.

## Run locally

Requires Node.js 22 or later.

```bash
npm ci
npm run dev
```

## Production checks

```bash
npm run typecheck
npm run build
npm start
```

## Deploy to Vercel

Import this repository as a Next.js project. Use the repository root as the root directory, `npm run build` as the build command and the framework's default output settings.

Set `NEXT_PUBLIC_SITE_URL` to the actual production origin (including `https://`) and redeploy to populate the sitemap. No invented domain is included.

## Enquiry delivery

Without the following server-side environment variables, the form downloads a project brief locally and clearly explains that nothing is sent. The API returns HTTP 503 rather than claiming success.

- `RESEND_API_KEY`
- `ENQUIRY_FROM_EMAIL` — an address on a domain verified in Resend
- `ENQUIRY_TO_EMAIL` — the confirmed business enquiry recipient

With all three configured, the form sends through the server API. Browser and server validation, an origin check, input limits and a honeypot are included. Configure deployment-level rate limiting before enabling public email delivery at scale. Do not commit secrets. `.env.example` contains empty configuration keys only.

No real email was sent during QA. The supplied GitHub account email is not displayed or used as the business contact address.

## Content and assets

- `lib/solutions.ts`: eight solution categories, offerings, process and customization content.
- `lib/asset-provenance.json`: source filenames for the optimized supplied concept images.
- `public/images/`: 11 optimized WebP images, approximately 3 MB total.
- Company copy is based on the supplied SKYHIGH ENGINEERING document.
- Images are captioned as design concepts; no completed-project claims are made.
- Watermarked and small third-party-looking reference images were not included.
- The header uses a typography-based Skyhigh Engineering treatment. The supplied logo's alternate wording/tagline still needs brand-owner resolution.

## Remaining launch configuration

Confirm business contact details, image publication rights, preferred logo/tagline treatment and enquiry routing. Add the deployed origin to `NEXT_PUBLIC_SITE_URL`. The site does not invent phone numbers, addresses, prices, certifications, customers or testimonials.

## Pages

Home; solutions overview; eight solution detail pages; engineering approach; about; project enquiry; privacy information; custom 404; robots and sitemap endpoints.

## Official implementation references

- https://nextjs.org/docs/app/getting-started/installation
- https://vercel.com/docs/git
- https://resend.com/docs/api-reference/emails/send-email
