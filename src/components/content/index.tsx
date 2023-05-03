import React from 'react'
import style from './style.module.css'

type Props = {
    title: string;
    children: React.ReactNode
}

const Content: React.FC<Props> = ({title, children}) => {
    return (
        <div className={style.content}>
            <h2 className={style.header}>{title}</h2>
            <div className={style.detail}>
                {children}
            </div>
        </div>
    );
};

export default Content