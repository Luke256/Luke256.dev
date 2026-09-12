import { SiZenn } from "react-icons/si";
import { BlogInfo } from "./BlogPage";
import Link from "next/link";

const ZennInfo = ({ blog }: { blog: BlogInfo }) => {
    return (
        <div className="">
            <p className="text-gray-600">Created at: {blog.createdAt}</p>
            <div className="flex">
                <SiZenn className="h-full my-auto" color="#3EA8FF" />
                <div className="content-center text-gray-600">
                    Zenn
                </div>
            </div>
        </div>
    );
};

const BlogInfoItem = ({ blog }: { blog: BlogInfo }) => {
    return (
        <div className="">
            <p className="text-gray-600">Created at: {blog.createdAt}</p>
            <p className="text-gray-600">Updated at: {blog.updatedAt}</p>
        </div>
    );
};

const BlogItem = ({ blog }: { blog: BlogInfo }) => {
    if (blog.slug === undefined) return <></>;

    const href = blog.type === "zenn" ? blog.slug : `/blogs/${blog.slug}`;

    return (
        <Link href={href} className="h-full">
            <div className="p-4 bg-white rounded flex-col h-full justify-between">
                <div className="text-xl font-bold text-gray-900 line-clamp-2">
                    {blog.title}
                </div>
                {blog.type === "zenn" ? <ZennInfo blog={blog} /> : <BlogInfoItem blog={blog} />}
            </div>
        </Link>
    );

};

export default BlogItem;
