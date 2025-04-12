import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkToc from "remark-toc";

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const pcOptions = {

}

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [
      remarkGfm,
      remarkMath,
      [remarkToc, { heading: '目次', tight: true }],
    ],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, pcOptions],
      rehypeSlug,
      rehypeAutolinkHeadings,
    ],
  }
})
 
// Merge MDX config with Next.js config
export default withMDX(nextConfig)