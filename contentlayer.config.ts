import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';
import { type MDXOptions } from 'contentlayer/core';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true, description: 'Name of the author' },
    avatarUrl: { type: 'string', required: true, description: 'Avatar image of the author' },
  },
}));

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true, description: 'Title of the post' },
    date: { type: 'date', required: true, description: 'Date when post is published' },
    description: { type: 'mdx', required: true, description: 'Display post summary on' },
    coverImgUrl: { type: 'string', description: 'Cover image of the post' },
    authors: {
      type: 'list',
      of: Author,
      required: true,
      description: 'List of authors who contributed to this post',
    },
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/${post._raw.flattenedPath}` },
  },
}));

const mdx = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypePrettyCode,
      {
        theme: {
          dark: 'github-dark',
          light: 'github-light',
        },
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node: any) {
          node.properties.className.push('line--highlighted');
        },
        onVisitHighlightedWord(node: any) {
          node.properties.className = ['word--highlighted'];
        },
      },
    ],
    [rehypeAutolinkHeadings, { properties: { className: ['anchor'] } }],
  ],
} satisfies MDXOptions;

export default makeSource({ contentDirPath: 'changelog', documentTypes: [Post], mdx });
