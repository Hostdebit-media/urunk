import { blogPostsEN, BlogPostItem } from './blogPostsEN';
import { blogPostsFR } from './blogPostsFR';

export { blogPostsEN, blogPostsFR };
export type { BlogPostItem };

// Default export for backwards compatibility
export const blogPosts = blogPostsEN;

export function getBlogPosts(isFrench = false): BlogPostItem[] {
  return isFrench ? blogPostsFR : blogPostsEN;
}

export function getBlogPostBySlug(slug: string | undefined, isFrench = false): BlogPostItem | undefined {
  if (!slug) return undefined;
  const list = getBlogPosts(isFrench);
  const found = list.find(p => p.slug === slug);
  if (found) return found;
  // Fallback to EN or FR list if not found in requested language
  return (isFrench ? blogPostsEN : blogPostsFR).find(p => p.slug === slug);
}
