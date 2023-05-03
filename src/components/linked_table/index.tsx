import React from 'react'
import styles from './style.module.css'
import Link from 'next/link'
import Table from '../table'

type Props = {
    items: any
}

const LinkedTable: React.FC<Props> = (items) => {
    const rows = Object.values(items)[0].map((item: string[], idx: number) => (
        [item[0], <Link className={styles.bloglink} href={item[2]} key={idx}>{item[1]}</Link>]
    ))

    return (
        <Table items={rows}></Table>
    )
}

export default LinkedTable