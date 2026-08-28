# Elotech — company website

Marketing / landing site for Elotech, built with [Next.js](https://nextjs.org) 16, React 19 and Tailwind CSS v4.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Development server with hot reload        |
| `npm run build` | Production build (required before start)  |
| `npm run start` | Serve the production build                |
| `npm run lint`  | Run ESLint                                |

## Editing content

All copy lives in two files — no component changes needed:

- **[`content/site.ts`](content/site.ts)** — company name, tagline, hero text, about section, services list, contact details (email / phone / location), footer, and the production `url` used for SEO.
- **[`content/legal.ts`](content/legal.ts)** — Terms & Conditions and Privacy Policy. Replace the placeholder `paragraphs` arrays with the real text and update `lastUpdated`. Sections can be added, removed or renamed freely.

## Pages

| Route      | Description                        |
| ---------- | ---------------------------------- |
| `/`        | Landing page (hero, about, services, contact) |
| `/terms`   | Terms & Conditions                 |
| `/privacy` | Privacy Policy                     |

`robots.txt` and `sitemap.xml` are generated automatically from `app/robots.ts` and `app/sitemap.ts`.

## Design

Colour and font tokens are defined in [`app/globals.css`](app/globals.css) under `@theme inline`. The site is intentionally light-only; the single accent colour is `--color-accent`.

## Before going live

1. Set `site.url` in `content/site.ts` to the real domain.
2. Replace the placeholder contact email / phone / location in `content/site.ts`.
3. Paste the final Terms & Conditions and Privacy Policy text into `content/legal.ts`.
4. Optionally replace `app/favicon.ico` with the Elotech logo.

## Deploying

Deploy on [Vercel](https://vercel.com) — import the repository, keep the default Next.js settings, and it builds automatically on every push.
