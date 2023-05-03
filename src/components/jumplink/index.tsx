import React from 'react'
import { Link as MuiLink } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from "./style.module.css"

type Props = {
    href: string,
    children: React.ReactNode
}

const JumpLink: React.FC<Props> = ({ href, children }) => {
    return (
        <div>
            <MuiLink className={styles.jumplink} href={href} target='_blank' rel="noopener noreferrer">
                <OpenInNewIcon fontSize='small' />
                {children}
            </MuiLink>
        </div>
    )
}

export default JumpLink