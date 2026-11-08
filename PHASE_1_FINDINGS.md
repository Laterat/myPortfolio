# Phase 1 — Repository findings and design direction

## Repository audit

- The project was a small Next.js App Router portfolio with `/`, `/about`, `/projects`, `/projects/[slug]`, and `/contact`, plus sitemap, robots, and manifest metadata routes.
- It already used React Server Components, a shared header/footer, a keyboard command palette, a project card, and centralized site metadata. These patterns were retained where useful.
- Its project data listed Atlas CRM, SignalOps, and Northstar Commerce, but the repository contained no case-study evidence or assets supporting those projects. The entries were examples, so they were removed from public output rather than presented as real work.
- There was no existing CMS, database adapter, authentication system, or media store. No professional experience, education, or certification entries were present in the repository.
- `PHASE_1_FINDINGS.md` was open in the IDE context but did not exist in the repository when audited. This document records the findings and strategy requested in the implementation brief.
- `AI_SLOP_AVOID.md` was read in full. Its guidance is applied throughout: specific hierarchy, restrained treatment, real content, useful empty states, responsive layouts, semantic markup, keyboard support, visible focus, and reduced-motion support.

## Reference review

- [ScholarXIV](https://www.scholarxiv.com/) exposed a minimal documentation-site landing page and a link to its `llms.txt`; the referenced homepage did not provide enough accessible visual evidence to identify its typefaces, layout details, or interaction states. No unsupported claims about its design are used here.
- [RAVN](https://www.useravn.com/) exposed a product-specific, long-form story with clear section hierarchy, explanations of its workflow, interactive examples, and direct calls to action. Those content and interaction principles informed the portfolio; its visual design was not copied.

## Design brief

- **Product and audience:** Personal software-development portfolio for prospective collaborators, recruiters, and technical peers.
- **Primary task:** Understand Latera's work and open a direct contact channel.
- **Secondary tasks:** Review professional background, education, credentials, and technical skills; administrators maintain this information through the CMS.
- **Brand personality:** Precise, calm, considered, and direct.
- **Visual concept:** A light monochrome editorial layout that uses type scale, alignment, whitespace, and a few purposeful rules to present projects and professional history. Neutral system sans-serif is used for reading; monospace is limited to compact metadata. This avoids inventing a font identity from inaccessible reference evidence.
- **Constraints:** Next.js App Router, Payload in the same application, keyboard and touch use, WCAG 2.2 AA as a target, mobile through wide desktop, no fabricated case studies, and no production local-disk media.
- **Success criteria:** Visitors can scan the identity and published work quickly, read a complete project case study, navigate every page with keyboard or touch, and find verified contact links. The administrator can maintain the content without changing source files.

## Architecture decision

- Keep one Next.js application and host Payload 3 in its App Router through a separate `(payload)` route group. Public routes use a separate `(frontend)` root layout, preserving their URL paths while allowing Payload to provide its own admin shell.
- Use Payload's PostgreSQL adapter, authenticated `users` collection, media upload collection, content collections, and Site Settings global. Use Payload's Local API in server components, with public access constrained to published content and `overrideAccess: false`.
- Bootstrap the first administrator with a one-time CLI command rather than public registration. Production runtime requires a PostgreSQL URI, a strong Payload secret, and S3-compatible storage credentials. Local disk uploads are for development only.
- Remove fictional project fixtures. Until authentic content is entered and published, public sections show clear empty states or remain absent.

## Verification limits

- Lint, type generation, TypeScript checks, and a production build succeeded. The public pages were also rendered and inspected in Chrome at mobile and desktop widths.
- No PostgreSQL credentials, production storage credentials, or real content were included in this repository. Database migrations, initial administrator creation, media upload persistence, and live CMS CRUD therefore still require the owner's database and storage configuration.
- The Node runtime available at the start of this work was 22.14.0, below Payload 3.93's supported Node requirement. Checks and the production build were run with Node 22.23.4. Use Node 22.23.4+ in the supported 22.x line for local and production execution.
