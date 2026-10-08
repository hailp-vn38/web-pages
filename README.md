# Founder Lab — Founder Portfolio & Startup Showcase

A deployment-oriented, bilingual (EN/VI) founder/startup website built on **Nuxt 4**. Designed for **Cloudflare Pages static hosting**. No database, Cloudflare Workers, API keys, or external CMS required.

**Vietnamese step-by-step deployment:** [`docs/DEPLOY_CLOUDFLARE_VI.md`](docs/DEPLOY_CLOUDFLARE_VI.md).

## What is included

- Dark Tech visual language and responsive mobile/desktop navigation
- English and Vietnamese static routes with a language switcher
- Home, Projects, AI Voice Agent, LifeTrail, About, Contact and Engineering Notes
- Interactive project-category filter
- Dynamic title/description, Open Graph preview, localized canonical and hreflang links when the site URL is configured
- 14 prerendered HTML routes, generated sitemap.xml when site URL is set, robots.txt, custom favicon, OG cover and error page
- Cloudflare security headers and immutable caching for generated assets
- Accessible navigation, reduced-motion support, no fictitious metrics or client testimonials

## Important — personalize before public launch

All links within the website work as delivered, but the public identity is intentionally **neutral** because the brand, founder name and contact information have not yet been supplied. Edit one file: `app/data/site.ts`.

```ts
export const site = {
  brand: 'YOUR STARTUP NAME',
  brandDescriptor: 'Independent technology studio',
  founderName: 'Your actual name',
  contactEmail: 'you@yourdomain.com',
  githubUrl: 'https://github.com/your-account',
  linkedinUrl: 'https://www.linkedin.com/in/your-profile/',
  pressKitUrl: '',
} as const
```

Do **not** publish an email address or a social URL you do not own. The Contact page intentionally displays a neutral placeholder until a real email is configured. There is no fake form submission.

Content can be updated separately in `app/data/projects.ts`. Project images are originally authored vector/CSS illustrations; the generic social preview image does not include the configurable startup name. Replace concept imagery with real demos/screenshots when available. Roadmaps describe planned work, not verified released features.

## Local development

Requires Node.js 22 or later and internet access for first-time dependency installation.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Verify before deploying:

```bash
npm run typecheck
npm test
npm run build
```

The last command creates **`dist/`** (generated static pages) for Cloudflare Pages and verifies all 14 routes. When `NUXT_PUBLIC_SITE_URL` is set, `sitemap.xml` and a sitemap-aware `robots.txt` are generated.

## Recommended deployment: Cloudflare Pages with GitHub

1. Push the project contents to a GitHub repository, with `package.json` at the repository root.
2. In Cloudflare Dashboard, go to **Workers & Pages → Create → Pages → Connect to Git** and select that repository.
3. Use:

   | Cloudflare field | Value |
   |---|---|
   | Framework preset | None / custom (use exact settings below) |
   | Production branch | `main` |
   | Root directory | `/` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Node version | `22` (set `NODE_VERSION=22` if not detected) |

   Do not configure a deploy command for this Pages project. In particular, `npx wrangler deploy` publishes a **Worker**, not this static Pages artifact, and will try to use Nuxt's temporary `.output/server/wrangler.json` instead of `dist`.

4. In **Settings → Environment variables**, optionally set `NUXT_PUBLIC_SITE_URL` to the *final public origin*, for example `https://yourbrand.com` (no trailing slash). If unknown initially, omit it; the website still works, but canonical and hreflang URLs won't be emitted.
5. Deploy. Each push to `main` triggers a new production build. Pull requests can have preview deployments.
6. For a custom domain, use Pages → Custom domains. **After** the domain is connected, set the `NUXT_PUBLIC_SITE_URL` environment variable to that exact origin and redeploy.

**Note:** The Pages build output is `dist` because `scripts/prepare-pages.mjs` copies Nuxt's `.output/public` into it. This deliberate step avoids confusion between Nuxt prerender output and the Cloudflare Pages setting.

## Manual deploy without Git integration

```bash
npm install
npm run build
npx wrangler pages deploy dist --project-name your-cloudflare-pages-project
```

Cloudflare authentication is required for the Wrangler command. A GitHub remote is **not** configured in this archive; set it to your own repository.

## Routes

| English | Vietnamese |
|---|---|
| `/` | `/vi` |
| `/projects` | `/vi/projects` |
| `/projects/ai-voice-agent` | `/vi/projects/ai-voice-agent` |
| `/projects/lifetrail` | `/vi/projects/lifetrail` |
| `/about` | `/vi/about` |
| `/contact` | `/vi/contact` |
| `/notes` | `/vi/notes` |

## Repository layout

```
app/
  assets/css/main.css        # design system and responsive layout
  components/               # shared pages, navigation, SVG product artworks
  composables/usePageSeo.ts  # locale-aware SEO tags
  data/site.ts               # brand, social/contact settings, translations
  data/projects.ts           # product case-study copy + roadmap
  pages/                    # static English/Vietnamese routes
public/                     # favicon, OG image, security headers
scripts/prepare-pages.mjs   # Nuxt static output -> Cloudflare dist
.github/workflows/check.yml # install, typecheck, test, generate
```

## Limitations / deliberate choices

- No contact form backend. Configure a real contact email first; the page then creates a `mailto:` link. This keeps the marketing website serverless and avoids spam, secrets, data retention and database requirements.
- No Nuxt Content module because its Cloudflare runtime integration can require D1. Project copy is stored in typed TypeScript objects and statically prerendered.
- No legal company registration, clients, published performance numbers, production screenshots, or contact information is fabricated. Replace the placeholder identity and supply real material before using the site for applications.
- Site URL / canonical tags are build-time values for static HTML. Update Cloudflare Pages environment variables and redeploy when the final domain changes.
- The repository intentionally does not include `node_modules` or prerendered `dist`; Cloudflare builds it on each push. An initial npm install needs registry access.

**Build verification note:** A checked-in lockfile is not included because this project was authored in an environment without npm registry access. Run `npm install` on a networked machine and commit the generated `package-lock.json` for reproducible installs. Until then the Cloudflare build resolves dependencies during deployment. The TypeScript/Nuxt build should be verified in your connected CI environment before marking the website production verified.

## Publishing checklist

- [ ] Update brand + founder name in `app/data/site.ts`.
- [ ] Add real contact email and public profiles only when valid.
- [ ] Review project descriptions and statuses in `app/data/projects.ts`.
- [ ] Set `NUXT_PUBLIC_SITE_URL` in Cloudflare after domain assignment.
- [ ] Run `npm install`, commit the generated `package-lock.json`, and pass typecheck / test / build.
- [ ] Verify `/`, `/vi`, `/projects/ai-voice-agent`, `/vi/projects/lifetrail`, `/contact` after deployment.
- [ ] Check Open Graph card and canonical URLs on the final domain.
- [ ] Add project screenshots and founder portrait when available.



Deployment references: https://developers.cloudflare.com/pages/framework-guides/deploy-a-nuxt-site/ and https://nuxt.com/docs/4.x/getting-started/deployment
