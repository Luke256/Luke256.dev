import React from "react";
import styles from "./style.module.css"

type Props = {
    title: string;
    background: string;
    children: React.ReactNode;
};

const MarkedContent: React.FC<Props> = ({title, background, children}) => {
    return (
        <div style={{background:background}}>
            <div className={styles.content}>
                <h2 className={styles.heading}>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default MarkedContent;