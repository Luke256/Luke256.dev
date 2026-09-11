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
      'remark-gfm',
      'remark-math',
      ['remark-toc', { heading: '目次', tight: true }],
    ],
    rehypePlugins: [
      'rehype-katex',
      'rehype-pretty-code',
      'rehype-slug',
      'rehype-autolink-headings',
    ],
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)
