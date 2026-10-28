import rss from '@astrojs/rss';
import { SITE } from '../consts';
import { categoryName, getPosts, postUrl } from './posts';

const FEED_SIZE = 20;

// Feed readers render HTML out of context, so root-relative links must become absolute.
const absolutize = (html: string) => html.replace(/(href|src)="\/(?!\/)/g, `$1="${SITE.url}/`);

export async function feedResponse() {
  const posts = (await getPosts()).slice(0, FEED_SIZE);
  return rss({
    title: SITE.name,
    description: SITE.tagline,
    site: SITE.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      link: postUrl(post),
      pubDate: post.data.date,
      description: post.data.description,
      content: absolutize(post.rendered?.html ?? ''),
      categories: [categoryName(post.data.category), ...post.data.tags],
      author: 'Scott Cate',
    })),
    customData: `<language>en-us</language><atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml"/>`,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
  });
}
