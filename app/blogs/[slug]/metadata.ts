import { readFile } from "node:fs/promises";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { Root } from "mdast";
import { toString } from "mdast-util-to-string";

export async function getBlogDescription(path: string): Promise<string> {
    const source = await readFile(path)

    const tree = unified()
        .use(remarkParse)
        .use(remarkMdx)
        .parse(source) as Root

    const paragraphs = tree.children.filter(
        node => node.type === "paragraph" || node.type === "heading"
    )

    if (paragraphs.length === 0) return ""

    const content = paragraphs.slice(0, 10).map(toString).join("\n")
    return content.trim()
}
