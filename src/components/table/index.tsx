import React from 'react'
import styles from './style.module.css'

type Props = {
    items: any
}

const Table: React.FC<Props> = (items) => {
    const rows = Object.values(items)[0].map((item: string[], idx: number) => (
        <tr className={styles.tableRow} key={idx}>
            <td className={styles.tableDate}>{item[0]}</td>
            <td className={styles.tableDetail}>{item[1]}</td>
        </tr>
    ))

    return (
        <table className={styles.tablebody}>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}

export default Table