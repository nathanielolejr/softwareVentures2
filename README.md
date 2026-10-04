# Software Ventures website

Company site for **Software Ventures** ("create for now"). Next.js (App Router) · TypeScript · Tailwind CSS v4 · MDX · Resend · Vercel.

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in values
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build`, `npm run lint`, `npm run typecheck`, `npm run format`.

## Environment variables

| Variable                       | Purpose                                                                                                                                                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `RESEND_API_KEY`               | Resend API key. Without it the contact form shows a clear "not configured" error.                                                                                 |
| `CONTACT_TO_EMAIL`             | Inbox that receives inquiries.                                                                                                                                    |
| `CONTACT_FROM_EMAIL`           | Verified sender (e.g. `Software Ventures <hello@yourdomain.com>`). `onboarding@resend.dev` works for testing, but only delivers to your own Resend account email. |
| `GITHUB_TOKEN`                 | Optional. Raises the GitHub API rate limit. Without it, requests are unauthenticated.                                                                             |
| `NEXT_PUBLIC_SITE_URL`         | Canonical URL used for metadata, sitemap and JSON-LD.                                                                                                             |
| `NEXT_PUBLIC_ENABLE_ANALYTICS` | Set to `true` to enable Vercel Analytics.                                                                                                                         |

Never commit real secrets; `.env*.local` is git-ignored.

## Editing content

All copy lives in `/content`. Search for `TODO:` and `placeholder` to find what must be replaced.

- **Site name, tagline, email, socials, nav:** `content/site.ts`
- **Project:** add an entry to `content/projects.ts` (`slug`, `repo` as `owner/name`, `title`, `summary`, `description`, `problem`, `solution`, `tags`, `screenshots`, `liveUrl`, `featured`, `order`). Put images in `public/images/`. Live stars, forks, language, last update and topics are fetched from GitHub and revalidated every 6 hours; if the API fails the page renders without stats. Featured projects (max 3 shown) appear on the home page.
- **Team member:** add to `content/team.ts` (square photo in `public/images/`).
- **Testimonial:** add to `content/testimonials.ts` (logo in `public/images/`).
- **Services / About / Home copy / form options:** `content/services.ts`, `content/about.ts`, `content/home.ts`, `content/contact.ts`.
- **Blog post:** create `content/blog/<slug>.mdx` with frontmatter:

  ```mdx
  ---
  title: "My post"
  date: "2026-02-01"
  summary: "One-line summary."
  tags: ["Engineering"]
  image: "/images/my-cover.png" # optional, used for social cards
  ---
  ```

  Code fences are syntax highlighted; images use `![alt](/images/file.png)`.

Items marked `placeholder: true` show a "Placeholder" badge; remove the flag when you replace them.

## Contact form

`POST /api/contact` validates with zod, drops honeypot submissions silently, rate limits to 5 requests per IP per 10 minutes (in-memory, per serverless instance; use Upstash/Vercel KV for strict global limits), then sends via Resend.

## Deploy to Vercel

1. Push this repo to GitHub and import it at vercel.com/new (framework is auto-detected).
2. Add the environment variables above under Project Settings → Environment Variables.
3. Deploy. Set `NEXT_PUBLIC_SITE_URL` to your production URL (and add the domain under Settings → Domains when you have one).
4. For email, verify your sending domain in Resend and set `CONTACT_FROM_EMAIL` accordingly.

## Structure

```
app/          routes, API, sitemap, robots, OG image
components/   reusable UI
content/      all editable content (+ blog/*.mdx)
lib/          GitHub fetcher, blog loader, zod schema, rate limiter, SEO helper
public/images placeholder SVGs
```
