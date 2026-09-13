import BlogContent from "@/components/blogs/BlogPage";
import { Metadata } from "next";
import { LocalBlogNames } from "../page";
import { getBlogDescription } from "./metadata";
import { join } from "node:path";

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post, metadata: metadata } = await import(`@/blogs/${slug}.mdx`);

  return <BlogContent bloginfo={metadata}>
    <Post />
  </BlogContent>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/blogs/${slug}.mdx`);

  return {
    ...metadata,
    description: await getBlogDescription(join(process.cwd(), "/blogs", `${slug}.mdx`)),
    keywords: [...metadata.keywords, "Luke256"],
    authors: metadata.authors || [{ name: "Luke256", url: "https://luke256.dev" }],
    publisher: "Luke256",
    formatDetection: {
      email: false,
      telephone: false,
      date: false,
      address: false,
    }
  }
}

export function generateStaticParams() {
  const files = LocalBlogNames();
  const slugs = files.map((file) => ({ slug: file }));
  return slugs;
}

export const dynamicParams = false;
