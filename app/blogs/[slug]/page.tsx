import BlogContent from "@/components/blogs/BlogPage";
import { Metadata, Viewport } from "next";
import { LocalBlogNames } from "../page";
import { getBlogDescription, getBlogMetadata } from "./metadata";
import { join } from "node:path";
import type { HTMLAttributes } from "react";
import type { MDXComponents } from "mdx/types";

function createBlogComponentsWithoutFirstH1(): MDXComponents {
  let isFirstH1 = true;

  return {
    h1: (props: HTMLAttributes<HTMLHeadingElement>) => {
      if (isFirstH1) {
        isFirstH1 = false;
        return null;
      }

      return <h1 {...props} />;
    },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(`@/blogs/${slug}.mdx`);
  const bloginfo = await getBlogMetadata(join(process.cwd(), "blogs", `${slug}.mdx`), metadata);

  return <BlogContent bloginfo={bloginfo}>
    <Post components={metadata.title == null ? createBlogComponentsWithoutFirstH1() : undefined} />
  </BlogContent>
}

export const viewport: Viewport = {
  themeColor: "#4e8de6",
  width: "device-width",
  initialScale: 1,
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/blogs/${slug}.mdx`);
  const blogPath = join(process.cwd(), "blogs", `${slug}.mdx`);
  const blogMetadata = await getBlogMetadata(blogPath, metadata);

  return {
    ...blogMetadata,
    description: await getBlogDescription(blogPath),
    keywords: [...(blogMetadata.keywords ?? []), "Luke256"],
    authors: blogMetadata.authors ?? [{ name: "Luke256", url: "https://luke256.dev" }],
    publisher: "Luke256",
    formatDetection: {
      email: false,
      telephone: false,
      date: false,
      address: false,
    },
    referrer: "origin",
    metadataBase: new URL("https://luke256.dev"),
    alternates: {
      canonical: `/blogs/${slug}`,
    },
  }
}

export function generateStaticParams() {
  const files = LocalBlogNames();
  const slugs = files.map((file) => ({ slug: file }));
  return slugs;
}

export const dynamicParams = false;
