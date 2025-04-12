import HeadBar from "@/components/HeadBar"
import Section from "@/components/Section";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Works | Luke256's Portfolio",
  description: "Luke256's Portfolio",
}

const getBlogList = async () => {
  const files = fs.readdirSync(path.join(process.cwd(), "app/blogs"));
  const blogList = files.map(async (file) => {
    const filePath = path.join(process.cwd(), "/app/blogs", file, "metadata.ts");
    if (!fs.existsSync(filePath)) return;
    const bloginfo = (await import("@/app/blogs/" + file + "/metadata")).default;
    bloginfo.slug = file;
    return bloginfo;
  }).filter((blog) => blog !== undefined);

  const res = await Promise.all(blogList).then((blogs) => {
    return blogs.filter((blog) => blog !== undefined);
  });

  return res;
}

const BlogPage = async () => {
  const blogList = await getBlogList();

  return (
    <main>
      <HeadBar />
      <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Section title="ブログ一覧">
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {blogList.map((blog: any, index: number) => (
                <Link key={index} href={`/blogs/${blog.slug}`}>
                  <div className="p-4 bg-white rounded shadow">
                    <h2 className="text-2xl font-bold text-gray-900">{blog.title}</h2>
                    <p className="text-gray-600">Created at: {blog.createdAt}</p>
                    <p className="text-gray-600">Updated at: {blog.updatedAt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

export default BlogPage;