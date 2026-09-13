import HeadBar from "@/components/HeadBar"
import Section from "@/components/Section";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { BlogInfo } from "@/components/blogs/BlogPage";
import Parser from "rss-parser";
import BlogItem from "@/components/blogs/BlogItem";

export const metadata: Metadata = {
  title: "Blogs | Luke256's Portfolio",
  description: "Luke256's Portfolio",
}

// for Zenn feed caching
export const revalidate = 3600;

export function LocalBlogNames() {
  return fs.readdirSync(path.join(process.cwd(), "/blogs"))
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => path.basename(file, ".mdx"));
}

const getLocalBlogList = async () => {
  const files = LocalBlogNames();
  const blogList = files.map(async (file) => {
    const { metadata } = await import("@/blogs/" + file + ".mdx");
    return {
      ...metadata,
      slug: file,
      type: "blog" as const,
    };
  }).filter((blog) => blog !== undefined);

  const res = await Promise.all(blogList).then((blogs) => {
    return blogs.filter((blog) => blog !== undefined);
  });

  return res;
}

const getZennBlogList = async () => {
  const response = await fetch("https://zenn.dev/luke256/feed?all=1");
  if (!response.ok) throw new Error(`Failed to fetch Zenn feed: ${response.status}`);

  const feed = await new Parser().parseString(await response.text());
  return feed.items.map((item) => ({
    title: item.title ?? '',
    createdAt: item.pubDate ? new Date(item.pubDate).toISOString().split('T')[0] : '',
    updatedAt: '',
    slug: item.link ?? 'https://zenn.dev/luke256',
    type: "zenn",
  }));
}

const BlogPage = async () => {
  const blogList = await getLocalBlogList();

  const zennBlogList = await getZennBlogList();

  const combinedBlogList = [...blogList, ...zennBlogList];
  combinedBlogList.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <main>
      <HeadBar />
      <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Section title="ブログ一覧" maxWidth="max-w-5xl">
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {combinedBlogList.map((blog: BlogInfo, index: number) => (
                <BlogItem key={index} blog={blog} />
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

export default BlogPage;
