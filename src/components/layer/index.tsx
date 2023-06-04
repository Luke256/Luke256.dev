import React from "react"
import Head from "next/head"
import styles from "./style.module.css"
import Link from "next/link";
import TwitterIcon from "../../../public/twitter.svg"
import GithubIcon from "../../../public/github.svg"
import ZennIcon from "../../../public/zenn.svg"

type Props = {
    children: React.ReactNode;
    pageTitle: string;
}

const Layer: React.FC<Props> = ({pageTitle, children}) => {
    pageTitle = pageTitle + " | Luke"

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className={styles.parent}>
                <header className={styles.header}>
                    <Link href="/"><h1>Luke</h1></Link>
                    <ul className={styles.headerList}>
                        <li className={styles.SNSIcon}>
                            <a aria-label="Twitter" href="https://twitter.com/luke02561" target="_blank" rel="noreferrer">
                                <TwitterIcon className={styles.SNSIcon}></TwitterIcon>
                            </a>
                        </li>
                        <li className={styles.SNSIcon}>
                            <a aria-label="GitHub" href="https://github.com/Luke256" target="_blank" rel="noreferrer">
                                <GithubIcon className={styles.SNSIcon}></GithubIcon>
                            </a>
                        </li>
                        <li className={styles.SNSIcon}>
                            <a aria-label="Zenn" href="https://zenn.dev/luke256" target="_blank" rel="noreferrer">
                                <ZennIcon className={styles.SNSIcon}></ZennIcon>
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.headerList}>
                        <li className={styles.navItem}><Link className={styles.navLink} href="/">Home</Link></li>
                        <li className={styles.navItem}><Link className={styles.navLink} href="/about">About</Link></li>
                        <li className={styles.navItem}><Link className={styles.navLink} href="/achieve">Achievements</Link></li>
                        <li className={styles.navItem}><Link className={styles.navLink} href="/products">Products</Link></li>
                        <li className={styles.navItem}><Link className={styles.navLink} href="/blogs">Blogs</Link></li>
                    </ul>
                </header>
                <main className={styles.mainContent}>
                    {children}
                </main>

                <footer className={styles.footer}>
                    &copy; Luke 2022, Powered by <a href='https://nextjs.org/' className={styles.footerLink}>Next.js</a>
                </footer>
            </div>
        </>
    )
}

export default Layer
