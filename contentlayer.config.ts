import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files';

const Author = defineNestedType(() => ({
  name: 'author',
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
    coverImgUrl: { type: 'string', required: true, description: 'Cover image of the post' },
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

export default makeSource({ contentDirPath: 'changelog', documentTypes: [Post] });
