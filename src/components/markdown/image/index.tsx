import React from "react"
import styles from "./style.module.css"
import Image from "next/image"
import Link from "next/link"

type Props = {
    alt: any,
    src: any,
}


const MDImage: React.FC<Props> = ({alt, src, ...props}) => (
    <div className={styles.mdimage}><Link href={src}>
        <Image src={src} alt={alt||src} fill style={{objectFit: 'contain'}} {...props}></Image>
    </Link></div>
)

export default MDImage