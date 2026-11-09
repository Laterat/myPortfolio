# Latera Mekonnen — Developer Portfolio

A Next.js portfolio with a Payload CMS embedded in the same App Router application. Public pages read published content with Payload's server-side Local API. Administrators manage content at `/admin`.

## Stack

- Next.js 16.3.3 and React 19
- Payload CMS 3.93.0
- PostgreSQL through Payload's official Drizzle adapter
- Lexical rich text editor
- S3-compatible object storage for production media
- TypeScript and Tailwind CSS 4

Use Node.js 22.23.4 or newer in the supported 22.x line (or 24.22.1+). Payload 3.93.0 does not support the repository's earlier Node 22.14 runtime.

## Architecture

- `app/(frontend)` contains the public website. Route groups keep the existing `/`, `/about`, `/projects`, `/contact`, `/sitemap.xml`, and `/robots.txt` URLs.
- `app/(payload)` contains Payload's isolated root layout, `/admin` views, and REST API route.
- `payload.config.ts` wires the Postgres adapter, editor, admin user collection, content, settings, and storage plugin.
- `collections/` and `globals/` define the editorial model and access rules.
- `lib/payload/content.ts` reads public content server-side with access control enabled and drafts excluded.
- `migrations/` is the versioned Postgres schema migration directory.
- `media/` is local development storage only and is ignored by Git.

The existing sample project titles were fictional examples, so they were removed from public pages. Empty public sections stay concise until authentic entries are added and published in the CMS.

## Install and run

```bash
npm ci
npm run dev
```

Create a PostgreSQL database, copy `.env.example` to `.env.local`, and set `DATABASE_URI` and a unique `PAYLOAD_SECRET` of at least 32 characters before opening Payload routes. `NEXT_PUBLIC_SITE_URL` should be the final HTTPS site origin for canonical URLs and the sitemap.

## First administrator

Public registration is disabled. Set one-time credentials in the shell and run the bootstrap command after the database is available:

```powershell
$env:CMS_ADMIN_NAME = "Your Name"
$env:CMS_ADMIN_EMAIL = "you@example.com"
$env:CMS_ADMIN_PASSWORD = "a-unique-password-with-at-least-16-characters"
npm run cms:create-admin
Remove-Item Env:CMS_ADMIN_NAME, Env:CMS_ADMIN_EMAIL, Env:CMS_ADMIN_PASSWORD
```

Ensure the database schema has been pushed in development or migrated in production before bootstrapping. The command refuses to create a second user. Sign in at `/admin`. Do not put administrator credentials in source control or `.env.example`.

## Content collections

Payload provides the following collections and global:

- **Projects** — case studies, technology list, screenshots, featured ordering, external links, and draft publishing.
- **Experience** — positions, dates, responsibilities, achievements, and technologies.
- **Education** — institution, qualification, dates, details, and achievements.
- **Certificates** — issuer, dates, credential ID, verification URL, and document.
- **Skills** — categorized skills without invented proficiency ratings.
- **Media** — images and PDFs with alt text and an explicit public-serving flag.
- **Site Settings** — identity, profile, availability, contact email, resume, SEO defaults, social links, and footer content.

All editorial collections use Payload drafts. Public Local API and REST reads are constrained to published documents. Media is private by default; mark a file public before using it on a published page. Collection writes require an authenticated administrator.

## Database and migrations

Payload's Postgres adapter can push schema changes to a development database. Before deploying schema changes, create a migration against a development database with the latest config, review the generated SQL, then apply it to the target database:

```bash
npm run payload:migrate:create -- portfolio-schema
npm run payload:migrate
npm run payload:migrate:status
```

Do not run migrations against production until the generated migration has been reviewed and backed up. The migration commands load `.env.local` using Payload's CLI and require a reachable PostgreSQL instance. The migration cannot be generated or applied without that database connection.

## Media storage

Local disk storage is enabled for development. Production startup requires PostgreSQL, a strong Payload secret, and the S3-compatible storage variables in `.env.example`; the S3 adapter supports AWS S3 and compatible services such as Cloudflare R2. Configure the bucket with the appropriate CORS policy for your hosting provider and use HTTPS. Never rely on local disk uploads on an ephemeral deployment platform.

## Commands

```bash
npm run dev                 # local Next.js and Payload admin
npm run lint                # ESLint
npm test                    # unit tests for slug and access rules
npx next typegen            # refresh App Router type declarations
npx tsc --noEmit            # TypeScript check
npm run build               # production build
npm run payload:migrate     # apply pending migrations
npm run cms:create-admin    # create the first admin only
```

The current implementation has no database credentials or seeded portfolio entries in the repository. CMS reads return empty sections until PostgreSQL is configured and real content is published.
