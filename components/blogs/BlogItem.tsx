import { SiZenn } from "react-icons/si";
import { RxUpdate } from "react-icons/rx";
import { BlogInfo } from "./BlogPage";
import Link from "next/link";

const ZennInfo = ({ blog }: { blog: BlogInfo }) => {
  return (
    <div className="">
      <div className="flex">
        <SiZenn className="h-full my-auto" color="#3EA8FF" />
        <p className="pl-1 text-gray-600">{blog.createdAt}</p>
      </div>
    </div>
  );
};

const BlogInfoItem = ({ blog }: { blog: BlogInfo }) => {
  return (
    <div className="pt-2">
        <p className="text-gray-600">{blog.createdAt}</p>
        {blog.createdAt !== blog.updatedAt &&
          <div className="flex">
            <RxUpdate className="h-full my-auto" color="#4E8DE6" />
            <p className="pl-1 text-gray-600">{blog.updatedAt}</p>
          </div>
        }
    </div>
  );
};

const BlogItem = ({ blog }: { blog: BlogInfo }) => {
  if (blog.slug === undefined) return <></>;

  const href = blog.type === "zenn" ? blog.slug : `/blogs/${blog.slug}`;

  return (
    <Link href={href} className="h-full">
      <div className="p-4 bg-white rounded flex flex-col h-full justify-between">
        <div className="text-xl font-bold text-gray-900 line-clamp-2">
          {blog.title}
        </div>
        {blog.type === "zenn" ? <ZennInfo blog={blog} /> : <BlogInfoItem blog={blog} />}
      </div>
    </Link>
  );
};

export default BlogItem;
