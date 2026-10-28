import { getCollection, type CollectionEntry } from 'astro:content';
import taxonomy from '../data/taxonomy.json';
import { SITE } from '../consts';

export type Post = CollectionEntry<'posts'>;

export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** WordPress permalink: /%category%/%postname%/ */
export const postUrl = (post: Post) => `/${post.data.category}/${post.data.slug}/`;

export const categoryUrl = (slug: string) => `/category/${slug}/`;
export const tagUrl = (slug: string) => `/tag/${slug}/`;

export const categoryName = (slug: string) =>
  taxonomy.categories.find((c) => c.slug === slug)?.name ?? slug;
export const tagName = (slug: string) => taxonomy.tags.find((t) => t.slug === slug)?.name ?? slug;

/** Taxonomy terms that still have at least one post (empty archives aren't built). */
export const usedCategories = (posts: Post[]) =>
  taxonomy.categories.filter((c) => posts.some((p) => p.data.category === c.slug));
export const usedTags = (posts: Post[]) => taxonomy.tags.filter((t) => posts.some((p) => p.data.tags.includes(t.slug)));

export const formatDate =(date: Date) =>
  date.toLocaleDateString(SITE.locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: SITE.timeZone });

/**
 * WordPress-style pagination: page 1 lives at `base`, the rest at `base/page/N/`.
 * Returns params for a `[...page]` rest route plus the slice for each page.
 */
export function paginate<T>(items: T[], base: string, perPage = SITE.postsPerPage) {
  const lastPage = Math.max(1, Math.ceil(items.length / perPage));
  const pageUrl = (n: number) => (n === 1 ? base : `${base}page/${n}/`);
  return Array.from({ length: lastPage }, (_, i) => {
    const current = i + 1;
    return {
      param: current === 1 ? undefined : `page/${current}`,
      page: {
        items: items.slice(i * perPage, current * perPage),
        current,
        lastPage,
        total: items.length,
        prev: current > 1 ? pageUrl(current - 1) : undefined,
        next: current < lastPage ? pageUrl(current + 1) : undefined,
        url: pageUrl,
      },
    };
  });
}

export type Page<T> = ReturnType<typeof paginate<T>>[number]['page'];
