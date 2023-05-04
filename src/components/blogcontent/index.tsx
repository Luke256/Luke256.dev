import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import styles from './style.module.css'
import customCode from "../markdown/codeblock"
import MDImage from "../markdown/image"

type Props = {
    title: string,
    content: string
}

const BlogContent: React.FC<Props> = ({ title, content }) => {
    return (
        <div className={styles.Content}>
            <h1 className={styles.Title}>{title}</h1>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                components={{
                    code: customCode,
                    h1: ({children})=><div><h2>{children}</h2><hr/></div>,
                    h3: ({children})=><div><h3 className={styles.h3}>{children}</h3></div>,
                    img: ({alt, src, ...props}) => <MDImage src={src} alt={alt} {...props}></MDImage>,
                    p: ({children})=><p className={styles.context}>{children}</p>
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default BlogContent