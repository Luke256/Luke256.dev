import React from "react"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import styles from './style.module.css'
import customCode from "../markdown/codeblock"
import MDImage from "../markdown/image"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import rehypeSlug from "rehype-slug"
import rehypeToc from 'rehype-toc'

type Props = {
    title: string,
    content: string,
    date: string,
    update: string
}

const BlogContent: React.FC<Props> = ({ title, content, date, update }) => {
    const tocOptions = {
        headings: ["h1", "h2"],
        cssClasses: {
            toc: styles.tocBody,
            list: styles.tocList,
            listItem: styles.tocItem,
            link: styles.tocLink
        }
    }

    return (
        <div className={styles.Content}>
            <h1 className={styles.Title}>{title}</h1>
            <div className={styles.Date}><CalendarMonthIcon fontSize="small" />{date}</div>
            <div className={styles.Date}><AutorenewIcon fontSize="small" />{update}</div>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeToc, tocOptions]]}
                remarkPlugins={[remarkGfm]}
                components={{
                    code: customCode,
                    h1: ({ children }) => <div><h2>{children}</h2><hr /></div>,
                    h3: ({ children }) => <div><h3 className={styles.h3}>{children}</h3></div>,
                    img: ({ alt, src, ...props }) => <MDImage src={src} alt={alt} {...props}></MDImage>,
                    p: ({ children }) => <p className={styles.context}>{children}</p>,
                    blockquote: ({children}) => <blockquote className={styles.blockquote}>{children}</blockquote>
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}

export default BlogContent