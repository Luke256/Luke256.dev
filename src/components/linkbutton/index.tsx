import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'

type Props = {
    href: string;
    children: React.ReactNode
}

const LinkButton: React.FC<Props> = ({ href, children }) => {
    return (
        <Link href={href} className={styles.ButtonBody}>{children}</Link>
    )
}

export default LinkButton