# Latera Mekonnen — Developer Portfolio

A Next.js portfolio whose public content is edited in one JSON file. No CMS, database, admin panel, or external content service is required.

## Edit the portfolio

Edit [`content/portfolio.json`](content/portfolio.json). It contains the site title and description, canonical URL, profile details, navigation labels, page copy, social links, projects, work history, education, certificates, and skills. The adjacent JSON Schema provides editor validation and autocomplete. Save the file and run the site to preview your changes.

The content arrays are intentionally empty until real entries are available. Add project or career information directly as JSON objects. A project can look like this:

```json
{
  "slug": "project-slug",
  "title": "Project name",
  "category": "Web application",
  "summary": "A short, accurate description.",
  "projectDate": "2026-01-01",
  "role": "Your role",
  "technologies": ["Next.js", "TypeScript"],
  "overview": ["A paragraph about the project."],
  "problem": "The problem the project addressed.",
  "solution": "What you built and why.",
  "responsibilities": ["A concrete contribution."],
  "coverImage": { "src": "/images/project-cover.jpg", "alt": "Describe the image" },
  "screenshots": [],
  "liveURL": "https://example.com",
  "githubURL": "https://github.com/username/project"
}
```

Put images and downloadable files in `public/images/` and use root-relative paths such as `/images/project-cover.jpg`. Keep the `slug` unique; it becomes the project URL. Projects are automatically included in the sitemap and get a standalone detail page.

The JSON is the source of truth for visible text and content. Layout and styling remain in the React components and CSS. Commit the JSON and any media files to publish content changes with the site.

## Run locally

Use Node.js 20.9.0 or newer. The repository pins Node 22.23.4 in `.nvmrc` for a consistent local and CI runtime.

```bash
npm ci
npm run dev
```

No environment variables are required for local development. Set `site.canonicalUrl` in the JSON before deploying to provide canonical URLs and a sitemap host.

## Commands

```bash
npm run dev       # start the local site
npm test          # check JSON content shape and unique project slugs
npm run lint      # run ESLint
npx tsc --noEmit  # TypeScript check
npm run build     # production build
npm run verify    # tests, lint, type check, and build
```
