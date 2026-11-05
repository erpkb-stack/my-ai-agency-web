# Ledgerlight marketing website

A static four-page site (Home, Services & Pricing, Work, Contact). It's plain HTML, CSS and a little JavaScript, with no build step, so it can be hosted anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Run it locally

```bash
python3 -m http.server 8090 --directory agency-website
```

Then open http://localhost:8090.

## Before you publish

1. **Business name.** "Ledgerlight" is a working name. Check it on the Texas SOS name search, the USPTO trademark search and domain availability before using it. To rename, find and replace `Ledgerlight` in all four `.html` files.
2. **Email.** Replace `hello@your-domain.com` in every page (footer and contact page) with your real address.
3. **Contact form.** Create a free endpoint with a form service (for example Formspree or Web3Forms) and paste its URL into `data-endpoint=""` on the `<form>` in `contact.html`. Without one, the form opens the visitor's email app instead.
4. **LinkedIn.** Replace the `https://www.linkedin.com/` links with your company page.
5. **Demo videos.** On `work.html`, replace each "demo video coming soon" box with your Loom or video embed once it's recorded.
6. **Prices.** Starting prices on `index.html` and `services.html` come from your launch plan. Adjust them in both places.

## Brand

| Token | Hex | Use |
| --- | --- | --- |
| Paper | `#F5F2EA` | Page background |
| Ink | `#14212B` | Text |
| Pine | `#1D4A42` | Primary buttons, brand mark, links |
| Pine deep | `#12332D` | Call-to-action bands |
| Copper | `#B4582A` | Highlights, flags, focus rings |
| Line | `#DCD4C3` | Borders and rules |

Fonts (all SIL Open Font License, loaded from Google Fonts): **Newsreader** for headings, **IBM Plex Sans** for body text, **IBM Plex Mono** for labels.

## Content rules kept on purpose

- Everything on the Work page is labelled as a demonstration on synthetic or public data. Add client case studies only with each client's written permission.
- No testimonials, client logos or ratings appear until real ones exist.
- All copy, illustrations and the logo were written for this site. No text, images or code were copied from reference sites.
