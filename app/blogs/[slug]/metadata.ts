import { readFile } from "node:fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import type { Root } from "mdast";
import { toString } from "mdast-util-to-string";
import { join } from "node:path";

function parseBlog(source: string | Uint8Array): Root {
    return unified()
        .use(remarkParse)
        .use(remarkMdx)
        .use(remarkFrontmatter)
        .parse(source) as Root
}

export function getFirstHeading(source: string | Uint8Array): string {
    const heading = parseBlog(source).children.find(node => node.type === "heading")
    return heading ? toString(heading).trim() : ""
}

export async function getBlogMetadata(slug: string) {
    const { metadata } = await import(`@/blogs/${slug}.mdx`);
    const blogPath = join(process.cwd(), "blogs", `${slug}.mdx`);
    return {
        ...metadata,
        title: metadata.title ?? getFirstHeading(await readFile(blogPath)),
        updatedAt: metadata.updatedAt ?? metadata.createdAt,
    }
}

export async function getBlogDescription(slug: string): Promise<string> {
    const blogPath = join(process.cwd(), "blogs", `${slug}.mdx`);
    const source = await readFile(blogPath)
    const tree = parseBlog(source)

    const paragraphs = tree.children.filter(
        node => node.type === "paragraph" || node.type === "heading"
    )

    if (paragraphs.length === 0) return ""

    const maxLength = 100
    let length = 0
    // maxLength を超えるまで採用
    const contents = paragraphs.slice(0, 10).map(s => toString(s))
    for (let i = 0; i < contents.length; i++) {
        length += contents[i].length
        if (length > maxLength) {
            return contents.slice(0, i+1).join("\n").trim()
        }
    }
    return contents.join("\n").trim()
}
