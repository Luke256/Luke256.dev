import Layer from "@/components/layer"
import getBlogsdata from "@/lib/blogs";
import path from "path";
import fs from 'fs'
import matter from "gray-matter";
import React from "react";
import BlogContent from "@/components/blogcontent";
import { NextSeo } from "next-seo";

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
    frontMatter: {title: string, date: string, update: string, slug: string},
    content: string
}

const Post: React.FC<Props> = ({frontMatter, content}) => {
    return (
        <Layer pageTitle={frontMatter.title}>
            <NextSeo 
                title={`『${frontMatter.title}』- Luke`}
                openGraph={{
                    url: `https://luke256.dev${frontMatter.slug}`
                }}
            />
            <BlogContent title={frontMatter.title} content={content} date={frontMatter.date} update={frontMatter.update}></BlogContent>
        </Layer>
    )
}

export default Post