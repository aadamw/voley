import { allPosts } from '@/.contentlayer/generated';
export type { Post } from '@/.contentlayer/generated';

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post._raw.flattenedPath === slug);
}

export function getAllPosts() {
  return allPosts;
}
