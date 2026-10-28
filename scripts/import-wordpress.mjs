// One-time (re-runnable) import of the public WordPress site into Markdown.
//
//   node scripts/import-wordpress.mjs
//
// Pulls posts, categories, tags and featured media from the public WP REST API,
// converts post HTML to Markdown, downloads referenced uploads into
// public/wp-content/uploads/ (so existing image URLs keep working), and writes
// src/content/posts/*.md plus src/data/taxonomy.json.

import fs from 'node:fs/promises';
import path from 'node:path';
import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const WP = 'https://scottcate.com';
const ROOT = path.resolve(import.meta.dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');
const PUBLIC_DIR = path.join(ROOT, 'public');
const DATA_DIR = path.join(ROOT, 'src/data');

// WordPress stores local (America/Phoenix, UTC-7, no DST) times; dates keep that offset.
const report = { posts: 0, downloaded: 0, failedDownloads: [], removedEmbeds: [], emptyAfterCleanup: [] };

async function getAll(endpoint) {
  const out = [];
  for (let page = 1; ; page++) {
    const res = await fetch(`${WP}/wp-json/wp/v2/${endpoint}${endpoint.includes('?') ? '&' : '?'}per_page=100&page=${page}`);
    if (!res.ok) break;
    const items = await res.json();
    out.push(...items);
    if (page >= Number(res.headers.get('x-wp-totalpages') ?? 1)) break;
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const stripTags = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();

const yamlString = (s) => JSON.stringify(s);

// --- uploads -----------------------------------------------------------------

const UPLOAD_RE = /https?:\/\/(?:www\.)?scottcate\.com(\/wp-content\/uploads\/[^"'\s)<>?#&]+)/gi;
const downloaded = new Map();

async function download(uploadPath) {
  if (downloaded.has(uploadPath)) return downloaded.get(uploadPath);
  const dest = path.join(PUBLIC_DIR, decodeURIComponent(uploadPath));
  let ok = false;
  try {
    await fs.access(dest);
    ok = true;
  } catch {
    try {
      const res = await fetch(WP + uploadPath);
      if (res.ok) {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
        report.downloaded++;
        ok = true;
      } else {
        report.failedDownloads.push(`${res.status} ${uploadPath}`);
      }
    } catch (err) {
      report.failedDownloads.push(`ERR ${uploadPath} ${err.message}`);
    }
  }
  downloaded.set(uploadPath, ok);
  return ok;
}

// --- HTML clean-up before Markdown conversion ----------------------------------

function youtubeId(src) {
  const m = src.match(/youtube\.com\/(?:v|embed)\/([\w-]{11})/i);
  return m?.[1];
}

function cleanHtml(html, link) {
  let out = html;

  // Legacy <object>/<embed> Flash & WMP players: YouTube becomes an iframe, the rest is dropped.
  out = out.replace(/<object[\s\S]*?<\/object>/gi, (block) => {
    const src = block.match(/(?:src|data|value)=["']([^"']*youtube\.com\/v\/[^"']+)/i)?.[1];
    const id = src && youtubeId(src);
    if (id) return `<p data-embed="youtube" data-id="${id}">youtube</p>`;
    report.removedEmbeds.push(link);
    return '<p><em>(A legacy Flash/Windows Media embed was here and is no longer playable.)</em></p>';
  });
  out = out.replace(/<embed[^>]*>/gi, (tag) => {
    const id = youtubeId(tag);
    return id ? `<p data-embed="youtube" data-id="${id}">youtube</p>` : '';
  });
  out = out.replace(/<iframe[^>]*src=["']([^"']+)["'][^>]*>\s*<\/iframe>/gi, (tag, src) => {
    const id = youtubeId(src);
    return id ? `<p data-embed="youtube" data-id="${id}">youtube</p>` : tag;
  });

  // Responsive image attributes point at sizes we don't mirror; the src is enough.
  out = out.replace(/\s(?:srcset|sizes)=["'][^"']*["']/gi, '');
  out = out.replace(/<style[\s\S]*?<\/style>/gi, '');

  return out;
}

function makeTurndown() {
  const td = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced',
    bulletListMarker: '-',
    emDelimiter: '_',
  });
  td.use(gfm);
  td.addRule('youtube', {
    filter: (node) => node.nodeName === 'P' && node.getAttribute('data-embed') === 'youtube',
    replacement: (_, node) =>
      `\n\n<div class="embed"><iframe src="https://www.youtube-nocookie.com/embed/${node.getAttribute('data-id')}" title="YouTube video" loading="lazy" allowfullscreen></iframe></div>\n\n`,
  });
  // Old posts wrap code in <pre> with no <code>; turndown only fences <pre><code>.
  td.addRule('pre', {
    filter: 'pre',
    replacement: (_, node) => {
      const text = node.textContent.replace(/\n+$/, '');
      const fence = text.includes('```') ? '~~~' : '```';
      return `\n\n${fence}\n${text}\n${fence}\n\n`;
    },
  });
  td.addRule('font', { filter: ['font', 'span'], replacement: (content) => content });
  td.addRule('strike', { filter: ['strike', 's', 'del'], replacement: (content) => `~~${content}~~` });
  return td;
}

// LoopLogic (scottcate.looplogic.com) hosted the old screencast videos and has shut
// down, so every link to it is dead. Linked text is kept; bare URLs are dropped.
const LOOPLOGIC_URL = /https?:\/\/(?:[\w-]+\.)?looplogic\.com[^\s)\]]*/gi;

function removeLoopLogic(markdown) {
  return markdown
    .replace(/\[([^\]]*)\]\(https?:\/\/(?:[\w-]+\.)?looplogic\.com[^)]*\)/gi, (_, text) =>
      /looplogic\.com/i.test(text) ? 'LoopLogic' : text,
    )
    .replace(LOOPLOGIC_URL, '')
    .replace(/^[ \t]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Posts deliberately not carried over (their content was only LoopLogic videos).
const EXCLUDED_SLUGS = new Set(['cameron-on-stage-this-morning', 'mcintosh-equipment']);

// --- main -------------------------------------------------------------------

async function main() {
  console.log('Fetching taxonomy…');
  const [categories, tags, users] = await Promise.all([getAll('categories'), getAll('tags'), getAll('users')]);
  const tagById = new Map(tags.map((t) => [t.id, t]));

  console.log('Fetching posts & media…');
  const [posts, media] = await Promise.all([getAll('posts'), getAll('media')]);
  const mediaById = new Map(media.map((m) => [m.id, m]));

  await fs.rm(POSTS_DIR, { recursive: true, force: true });
  await fs.mkdir(POSTS_DIR, { recursive: true });
  await fs.mkdir(DATA_DIR, { recursive: true });

  const td = makeTurndown();

  for (const post of posts) {
    const link = post.link.replace(WP, '');
    const [, category, slug] = link.split('/');
    if (EXCLUDED_SLUGS.has(slug)) continue;

    let html = cleanHtml(post.content.rendered, link);

    // Mirror uploads and make them root-relative. WP size variants (foo-300x200.jpg)
    // are swapped for the original upload when it exists; CSS handles sizing.
    const resolved = new Map();
    for (const [, uploadPath] of html.matchAll(UPLOAD_RE)) {
      const original = uploadPath.replace(/-\d+x\d+(\.\w+)$/, '$1');
      if (original !== uploadPath && (await download(original))) resolved.set(uploadPath, original);
      else if (await download(uploadPath)) resolved.set(uploadPath, uploadPath);
    }
    html = html.replace(UPLOAD_RE, (_, uploadPath) => resolved.get(uploadPath) ?? uploadPath);
    // Internal links become root-relative so they work locally and on any host.
    html = html.replace(/(href=["'])https?:\/\/(?:www\.)?scottcate\.com(\/[^"']*)?/gi, (_, a, p) => a + (p || '/'));

    const body = removeLoopLogic(
      td
        .turndown(html)
        // WP's "more" marker survives on one post as a 1px spacer image.
        .replace(/!\[\]\([^)]*\/wp-includes\/[^)]*trans\.gif[^)]*\)/g, ''),
    );
    if (!body) report.emptyAfterCleanup.push(link);

    let image;
    const featured = mediaById.get(post.featured_media);
    if (featured) {
      const uploadPath = featured.source_url.replace(/^https?:\/\/(?:www\.)?scottcate\.com/, '');
      if (await download(uploadPath)) image = { src: uploadPath, alt: decode(featured.alt_text || '') };
    }

    // WP has one post saved with a year of 0209; it was published in 2009.
    const date = post.date.replace(/^0209-/, '2009-');
    const modified = post.modified.replace(/^0209-/, '2009-');
    const description = stripTags(post.excerpt.rendered)
      .replace(/\s*(\[…\]|\[&hellip;\]|…|Continue reading.*)$/u, '')
      .replace(LOOPLOGIC_URL, '')
      .replace(/https?:\/\/(?:[\w-]+\.)?looplogic\.com?\S*$/i, '') // URL cut off mid-way by the excerpt
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 300);

    const fm = [
      '---',
      `title: ${yamlString(decode(post.title.rendered))}`,
      `slug: ${yamlString(slug)}`,
      `category: ${yamlString(category)}`,
      `date: ${date}-07:00`,
      modified !== date ? `updated: ${modified}-07:00` : null,
      `description: ${yamlString(description)}`,
      post.tags.length ? `tags: [${post.tags.map((id) => yamlString(tagById.get(id)?.slug)).join(', ')}]` : null,
      image ? `image:\n  src: ${yamlString(image.src)}\n  alt: ${yamlString(image.alt)}` : null,
      `wpId: ${post.id}`,
      '---',
    ]
      .filter(Boolean)
      .join('\n');

    await fs.writeFile(path.join(POSTS_DIR, `${slug}.md`), `${fm}\n\n${body}\n`);
    report.posts++;
  }

  const taxonomy = {
    categories: categories
      .filter((c) => c.count > 0)
      .map((c) => ({ slug: c.slug, name: decode(c.name), description: decode(c.description || '') })),
    tags: tags
      .filter((t) => t.count > 0)
      .map((t) => ({ slug: t.slug, name: decode(t.name), description: decode(t.description || '') })),
  };
  await fs.writeFile(path.join(DATA_DIR, 'taxonomy.json'), JSON.stringify(taxonomy, null, 2) + '\n');

  console.log(JSON.stringify({ ...report, users: users.map((u) => u.slug) }, null, 2));
  await fs.writeFile(path.join(ROOT, 'scripts/import-report.json'), JSON.stringify(report, null, 2) + '\n');
}

await main();
