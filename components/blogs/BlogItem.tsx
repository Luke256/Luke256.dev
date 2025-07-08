import { SiZenn } from "react-icons/si";
import { BlogInfo } from "./BlogPage";
import Link from "next/link";

const BlogItem = ({ blog }: { blog: BlogInfo }) => {
    if (blog.slug === undefined) return <></>;
    
    if (blog.type === "zenn") {
        return (
            <Link href={blog.slug} className="h-full">
                <div className="p-4 bg-white rounded shadow h-full flex md:flex-col justify-between">
                    <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
                    <div className="">
                        <p className="text-gray-600">Created at: {blog.createdAt}</p>
                        <div className="flex">
                            <SiZenn className="h-full my-auto" color="#3EA8FF" />
                            <div className="content-center text-gray-600">
                                Zenn
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    return (
        <Link href={`/blogs/${blog.slug}`} className="h-full">
            <div className="p-4 bg-white rounded shadow h-full flex md:flex-col justify-between">
                <h2 className="text-xl font-bold text-gray-900">{blog.title}</h2>
                <div className="">
                    <p className="text-gray-600">Created at: {blog.createdAt}</p>
                    <p className="text-gray-600">Updated at: {blog.updatedAt}</p>
                </div>
            </div>
        </Link>
    );

};

export default BlogItem;