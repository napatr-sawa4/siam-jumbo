# Siam Jumbo — concept demo

Bilingual English/Thai company presentation built from the existing Siam Jumbo Next.js project. The original checkout is untouched.

## Run

Use Node.js 20.9 or newer. Run `npm ci`, then `npm run dev`. Production static export: `npm run build`; output is in `out/`.

## Edit

- `app/content.ts`: company contacts, bilingual copy, category descriptions, image paths.
- `app/components/SiamJumbo.tsx`: page structure and interactions.
- `app/globals.css`: responsive layout, typography and colors.
- `app/fonts.css` and `public/fonts/`: self-hosted Inter Tight, Inter and IBM Plex Sans Thai; font licenses and sources are included.
- `public/images/`: replace illustrative photographs here.
- `public/recommend.png` and `public/siam.mp4`: unchanged media from the original project.

The preview includes language switching, category filtering, accessible product dialogs, product video, mobile navigation, email and telephone links. Enquiry links open the visitor’s email app; no backend or order system is configured.

The refined demo adds clear export positioning, matched AI-generated category still lifes, category-specific email drafts, enquiry topic selection, email copy feedback, and larger language controls.

Images are illustrative and do not represent the company’s farms or exact product inventory. See `public/asset-sources.json`. No certifications, client lists, statistics or testimonials were added. Copy and contacts should be reviewed by the owner before public launch. Search indexing is disabled for this concept.
