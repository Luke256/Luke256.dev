import Layer from "@/components/layer"
import getBlogsdata from "@/lib/blogs";
import path from "path";
import fs from 'fs'
import matter from "gray-matter";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BlogContent from "@/components/blogcontent";

export async function getStaticPaths() {
    const data = getBlogsdata()

    const paths = data.map((post: any) => ({
        params: {
            slug: path.basename(post.slug)
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context: any) {
    const blogList: any = getBlogsdata()
    var fileName: string = "";

    for (var i: number = 0; i < blogList.length; ++i) {
        if (path.basename(blogList[i].slug) == context.params.slug) {
            fileName = blogList[i].fileName
        }
    }

    const file = fs.readFileSync(`posts/${fileName}/index.md`, 'utf-8')

    const {data, content} = matter(file);

    return { props: { frontMatter: data, content } }
}

type Props = {
    frontMatter: {title: string},
    content: string
}

const Post: React.FC<Props> = ({frontMatter, content}) => {
    return (
        <Layer pageTitle={frontMatter.title}>
            <BlogContent title={frontMatter.title} content={content}></BlogContent>
        </Layer>
    )
}

export default Post