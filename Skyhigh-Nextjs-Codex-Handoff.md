# Skyhigh Engineering — website review and Codex handoff

Reviewed 5 October 2026 for the planned build after 20:00 IST. This is a preparation brief; no website has been built or deployed.

Source: https://drive.google.com/drive/folders/1-V7iohHKYvsdBzI-t6EnJiBB27YLPIFs

## Review coverage

Read the complete extracted text of SKYHIGH ENGINEERING.docx, listed all nine subfolders, downloaded and visually inspected all 35 standalone images in contact sheets, and opened the logo ZIP containing two PNG variants. Image dimensions were checked. The Word document's original page layout and any embedded artwork were not visually audited. Image ownership and whether depicted structures are completed Skyhigh projects remain unverified.

| Folder | Images | Findings |
|---|---:|---|
| Prefab & Modular Buildings | 5 | Consistent wide architectural visuals; good candidates for primary website imagery. |
| Accommodation & Residential | 3 | Housing, boutique cabins and luxury retreat imagery; distinct audiences need clear captions. |
| Commercial & Industrial | 3 | Site office, security entrance and industrial complex visuals. |
| Restaurant & Retail Spaces | 5 | Cohesive café/food-court imagery, with considerable visual overlap. |
| Shipping Container Solutions | 5 | Mixed square product images and café references; one AVIF has a visible lower-left watermark. |
| Portable & Utility Solutions | 4 | Primarily office/storage cabin images; the advertised toilets, healthcare units and classrooms lack clearly matching visuals. |
| Transport & Mobile Solutions | 4 | Two trailer visuals, one standalone office unit and one small reference image. Do not imply every pictured unit is vehicle mounted. |
| Hospitality & Leisure | 6 | Two larger visuals and four small reference images; good concepts but uneven image quality. |
| Logo | 2 PNGs in ZIP | Black and white background variants, each 6250 × 6250; large margins around the mark. |

## Main findings

1. **Resolve brand wording.** The document says “SKYHIGH ENGINEERING” and “Built Smart. Built Strong. Built by Skyhigh.” The artwork says “SKY HIGH” and “ENGINEERED TO RISE.” These may intentionally serve different purposes, but choose the official display name and use taglines deliberately. Obtain a vector or transparent, tightly framed logo for header use; retain the supplied originals.
2. **Make the website enquiry-led.** The source describes customized structures and turnkey work, without prices or a standardized purchasable catalogue. A solutions website with “Discuss Your Project” / “Request a Quote” is the appropriate proposed first release.
3. **Reduce repetition.** Engineering, customization, precision fabrication and turnkey delivery recur throughout the document. Give each a purposeful section instead of copying the document verbatim onto the homepage.
4. **Manage overlapping services.** Container restaurants, cafés, accommodation and offices appear in several categories. Preserve the eight business categories but maintain one canonical content record per offering, with cross-links or application tags.
5. **Separate concepts from project evidence.** Many images have a polished rendered appearance; appearance alone does not establish provenance. Use them as concept illustrations until confirmed. Do not label a gallery “Our Completed Projects” without actual project details and approval.
6. **Prepare images for web delivery.** The 21 PNG solution images are roughly 2.2–3 MB each. Most are approximately 1670 × 942; several are 1536 × 1024. Other references range down to 300 × 214. Compress approved images, provide responsive sizes and meaningful filenames, and avoid enlarging the small references into hero images.
7. **Confirm asset permission.** The AVIF carries a visible watermark, while some filenames resemble externally sourced product listings. Exclude the watermarked reference from launch unless permission is confirmed; do not remove attribution to disguise its source.

## Proposed first-release structure

| Route | Purpose |
|---|---|
| `/` | Positioning, selected solutions, customization, process and enquiry CTA. |
| `/solutions` | Eight solution categories with short descriptions. |
| `/solutions/[slug]` | Reusable category page: applications, offerings, approved images, customization and enquiry CTA. |
| `/engineering` | Design, fabrication and delivery process; what can be customized. |
| `/about` | Company overview, mission and vision, supported by confirmed company facts. |
| `/contact` | Project enquiry form and verified contact details. |
| `/privacy` | Policy reflecting the actual form data collected and services used; finalize before launch. |

A project portfolio is optional and should wait for verified project records. A concept gallery can instead sit within solution pages with appropriate captions.

### Homepage sequence

1. Header with legible logo, Solutions, Engineering, About and Contact.
2. Hero: clear explanation of prefab and modular construction, one strong approved image, and a project enquiry CTA.
3. Eight solution category cards with short, distinct summaries.
4. Customization: dimensions, layout, finishes, insulation, electrical and plumbing provisions, interiors and branding, as stated in the document.
5. Process: Design → Engineer → Customize → Manufacture → Deliver → Install. Explain the stages concisely without implying fixed delivery times.
6. Selected application visuals, accurately captioned.
7. Why Skyhigh: substantiated capabilities from the source, without invented statistics.
8. Project enquiry CTA and footer with verified business details.

### Suggested image candidates

- Broad prefab hero: `Modern Modular Building with Glass Terrace-1.png`.
- Smaller office offering: `Modern Modular Office at Sunset.png`.
- Workforce accommodation: `Warm Evening Modular Container Housing.png`.
- Commercial/site office: `Twilight Modular Site Office Complex.png`.
- Restaurant: `Container Café at Twilight.png`.
- Mobile solution: `Mobile Modular Office Trailer at Sunrise.png`.
- Hospitality: `Golden-Hour A-Frame Mountain Retreat.png` or `Sunset Tropical Container Cabin.png`.

These are visual candidates, not verified Skyhigh project photographs. Check mobile crops and provenance before final selection.

## Information missing before launch

- Official display/legal business name and preferred tagline treatment.
- Business phone, WhatsApp number, enquiry email, address and confirmed service areas.
- Enquiry recipient and the actual email/CRM delivery service.
- Domain, hosting choice and repository access for the build.
- Approved image usage and distinction between concepts, references and completed projects.
- Any actual projects: location, scope, date, client publication permission and photographs.
- Supported specifications, materials, insulation options, warranty terms and delivery expectations if these will be published.
- Confirmed company history, certifications and testimonials if desired. None were supplied in the reviewed text.

The document's ambition to serve India and global markets is a vision statement, not proof of current coverage. Likewise, do not turn “aims to provide” turnkey delivery into a stronger operational guarantee without confirmation.

## Proposed Next.js implementation brief

This is an implementation proposal, not a framework-version compatibility audit. At build time inspect the repository and its instructions, retain an existing supported setup where appropriate, and verify current official documentation before selecting new dependencies.

- Next.js with TypeScript; use the App Router for a new project if suitable for the selected version.
- Keep service content in typed data files initially, including slug, title, summary, offerings, applications and approved image references. A CMS is optional if the business needs frequent nontechnical edits.
- Reusable header, footer, solution card, category template, process section and enquiry form.
- Use locally managed or approved hosted assets, responsive image delivery, explicit dimensions and appropriate loading priority. Do not serve public production images from Drive sharing-page URLs.
- Proposed visual direction: charcoal, white and restrained warm accents complement the supplied monochrome logo and warm architectural images. This is a design proposal, not an established brand palette.
- Accessible mobile navigation, visible focus, labeled form fields and reduced-motion support.
- Page-specific titles/descriptions, sitemap, robots configuration and factual structured data only.
- Validate enquiry data on the server; include spam controls and clear success/failure states. Keep credentials server-side. Never show successful delivery unless the delivery service accepts the request.
- Suggested form: name, preferred contact, solution category, project location and requirement description; optional dimensions and timeline. Keep file upload out of the first release unless needed.

## Tonight's build order

1. Inspect the repo and agree on brand wording, page scope and visual direction.
2. Map approved assets and prepare reusable solution data.
3. Build homepage and navigation; review desktop and mobile presentation.
4. Build the shared solution template and populate all eight categories.
5. Add Engineering, About and Contact; configure actual enquiry delivery.
6. Verify content, mobile layout, keyboard use, navigation, image loading and both enquiry success/failure paths. Run the project's build/type checks.
7. Review a working preview before launch; publish when requested.

## Starter instruction for Codex

Use this review and the supplied Skyhigh Engineering Drive material to build an enquiry-led Next.js website. First inspect the repository and all applicable repository instructions. Preserve an existing supported setup. Implement the proposed pages using reusable typed solution content and a shared category template. Use the source document for business claims and approved supplied imagery; do not invent contact details, prices, projects, certifications, testimonials or performance statistics. Flag the conflicting brand/tagline treatment for resolution. Treat unverified architectural imagery as concepts. Establish a polished mobile-friendly homepage first, then complete the solution pages and real enquiry delivery. Keep credentials server-side, handle form failures honestly, and verify the production build and key user journeys before presenting the preview. Refer to the review's missing-information list for unresolved launch inputs.
