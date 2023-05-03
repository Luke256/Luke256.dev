import React from "react"
import styles from "./style.module.css"
import Image from "next/image"

type Props = {
    alt: any,
    src: any
}

const MDImage: React.FC<Props> = ({alt, src, ...props}) => (
    <div className={styles.mdimage}>
        <Image {...props} src={src} alt={alt||src} layout="fill" objectFit="contain"/>
    </div>
)

export default MDImage