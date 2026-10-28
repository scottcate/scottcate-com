import { SITE } from '../consts';
import { categoryUrl, getPosts, postUrl, tagUrl, usedCategories, usedTags } from '../lib/posts';

export async function GET() {
  const posts = await getPosts();
  const latest = posts[0]?.data.updated ?? posts[0]?.data.date;
  const lastmodBy = (filter: (p: (typeof posts)[number]) => boolean) => {
    const p = posts.find(filter);
    return p && (p.data.updated ?? p.data.date);
  };

  const entries: { loc: string; lastmod?: Date }[] = [
    { loc: '/', lastmod: latest },
    { loc: '/posts/', lastmod: latest },
    { loc: '/contact/' },
    { loc: '/cruised-com/' },
    { loc: '/bwg_gallery/scott-cate-profile-photos/' },
    { loc: '/author/scottcate/', lastmod: latest },
    ...posts.map((p) => ({ loc: postUrl(p), lastmod: p.data.updated ?? p.data.date })),
    ...usedCategories(posts).map((c) => ({ loc: categoryUrl(c.slug), lastmod: lastmodBy((p) => p.data.category === c.slug) })),
    ...usedTags(posts).map((t) => ({ loc: tagUrl(t.slug), lastmod: lastmodBy((p) => p.data.tags.includes(t.slug)) })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(({ loc, lastmod }) => `  <url><loc>${SITE.url}${loc}</loc>${lastmod ? `<lastmod>${lastmod.toISOString()}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
