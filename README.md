# scottcate.com

Static rebuild of [scottcate.com](https://scottcate.com) (previously WordPress) with [Astro](https://astro.build), deployed to GitHub Pages. No admin, no logins, no comments — just files.

## Daily use

```sh
npm install
npm run dev        # http://localhost:4321 — live reload while you write
npm run build      # outputs static site to dist/
npm run preview    # serve dist/ locally to check the production build
```

Push to `main` and `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.

## Writing a post

Add a Markdown file to `src/content/posts/` (the filename doesn't matter; `slug` does):

```md
---
title: "My new post"
slug: "my-new-post"
category: "technology"        # family | technology | vstricks | travel | productreview | forsale | payitforward
date: 2026-10-24T09:00:00-07:00
description: "One or two sentences for search results, social cards and the RSS feed."
tags: ["azure"]               # optional, slugs from src/data/taxonomy.json
image:                        # optional featured image (cards, og:image)
  src: "/images/2026/my-photo.jpg"
  alt: "What's in the photo"
draft: false                  # true hides it from the build
---

Post body in Markdown. Raw HTML is fine too.
```

The post is published at `/{category}/{slug}/`, the same permalink structure WordPress used. Put new images in `public/images/…` and refer to them as `/images/…`. To add a category or tag, add it to `src/data/taxonomy.json`.

## URL structure (kept from WordPress)

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/{category}/{slug}/` | `src/pages/[category]/[slug].astro` |
| `/posts/`, `/posts/page/N/` | `src/pages/posts/[...page].astro` (9 per page, like WP) |
| `/category/{slug}/`, `…/page/N/` | `src/pages/category/[category]/[...page].astro` |
| `/tag/{slug}/`, `…/page/N/` | `src/pages/tag/[tag]/[...page].astro` |
| `/author/scottcate/` | `src/pages/author/scottcate/[...page].astro` |
| `/contact/`, `/cruised-com/` | `src/pages/*.astro` |
| `/bwg_gallery/scott-cate-profile-photos/` | `src/pages/bwg_gallery/…` |
| `/wp-content/uploads/…` | `public/wp-content/uploads/…` (mirrored from WP) |
| `/rss.xml` and `/feed/` | RSS 2.0, latest 20 posts with full content |
| `/sitemap.xml`, `/robots.txt` | generated at build |

Unknown URLs land on `404.html`, which mimics WordPress's "guess the post from the last URL segment" redirect (e.g. `/tricks/003/` → `/vstricks/003-…/`).

## SEO & structured data

- The **Person** schema for Scott Cate lives in `src/data/person.ts` and is emitted on every page in a JSON-LD `@graph` with `WebSite`. Posts add `BlogPosting` + `BreadcrumbList` and reference the Person by `@id` as author.
- Canonical URLs, Open Graph, and X/Twitter card tags are set in `src/layouts/BaseLayout.astro`.

## Re-importing from WordPress

`npm run import:wordpress` re-pulls all posts from the public WP REST API and **overwrites** the imported `.md` posts in `src/content/posts/` (hand-written `.mdx` posts are left alone). Run it only before the cutover. It is kept for reference and should not be needed afterwards.

## DNS / GitHub Pages setup (one time)

1. Create the GitHub repo and push `main`.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. `public/CNAME` already contains `scottcate.com`. In Cloudflare, point the apex to GitHub Pages (`A` 185.199.108.153 / .109 / .110 / .111, or CNAME-flatten to `<user>.github.io`) and `www` CNAME to `<user>.github.io`.
4. Back in Pages settings, tick **Enforce HTTPS** once the certificate is issued.

## License

See [license.txt](license.txt), also published at https://scottcate.com/license.txt. Scott Cate owns the blog's content (posts, writing, photos). The technology that runs the blog was written by AI agents and carries **no license**. Third-party packages keep their own licenses.
