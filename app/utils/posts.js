/**
 * The blog: every posts/*.html file, its front matter read, newest first, 6 to a list page.
 */
const FILES = import.meta.glob('../../posts/*.html', { query: '?raw', import: 'default', eager: true });
const POSTS_PER_PAGE = 6;

/**
 * One post: the JSON values of its front matter between --- lines, then its HTML body
 * @param {string} file - The post file's path
 * @param {string} text - The file
 * @returns {object}
 */
function readPost(file, text) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(text);
  if (!match) throw new Error(`${file} opens with no front matter`);
  const data = Object.fromEntries(match[1].split(/\r?\n/).filter(Boolean).map((line) => {
    const at = line.indexOf(':');
    return [line.slice(0, at).trim(), JSON.parse(line.slice(at + 1))];
  }));
  const slug = file.split('/').pop().replace(/\.html$/, '');
  return {
    slug,
    url: `/blog/${slug}/`,
    day: data.date,
    date: new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }),
    title: data.title,
    description: data.description,
    cover: data.cover ? `/assets/${data.cover}` : '',
    content: text.slice(match[0].length).trim(),
  };
}

export const posts = Object.entries(FILES).map(([file, text]) => readPost(file, text)).sort((a, b) => b.day.localeCompare(a.day));

const listUrl = (number) => (number === 1 ? '/blog/' : `/blog/page/${number}/`);

/**
 * One list page: its posts and the newer and older page urls
 * @param {number} number - 1 for the first page
 * @returns {{ posts: object[], prev: string|null, next: string|null }|null} null past the last page
 */
export function blogPage(number) {
  const count = Math.max(1, Math.ceil(posts.length / POSTS_PER_PAGE));
  if (!Number.isInteger(number) || number < 1 || number > count) return null;
  return {
    posts: posts.slice((number - 1) * POSTS_PER_PAGE, number * POSTS_PER_PAGE),
    prev: number > 1 ? listUrl(number - 1) : null,
    next: number < count ? listUrl(number + 1) : null,
  };
}

/**
 * One post by its slug
 * @param {string} slug - The post file's name
 * @returns {object|null}
 */
export const blogEntry = (slug) => posts.find((entry) => entry.slug === slug) || null;
