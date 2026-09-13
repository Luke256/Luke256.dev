import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  async rewrites() {
    return [
      {
        source: '/works/q-rush',
        destination: '/works/q-rush/q-rush-web.html',
      }
    ]
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      'remark-frontmatter',
      ['remark-mdx-frontmatter', { name: 'metadata' }],
      'remark-gfm', // GitHub Flavored Markdown
      'remark-math', // MathJax
      ['remark-toc', { heading: '目次', tight: true }], // Table of Contents
    ],
    rehypePlugins: [
      'rehype-katex', // MathJax
      'rehype-pretty-code', // Syntax highlighting
      'rehype-slug', // Slug for headings
      'rehype-autolink-headings', // Autolink headings
    ],
  }
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
