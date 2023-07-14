import React from "react"
import GithubSlugger from 'github-slugger'

type Props = {
    children: any,
}

const slugger = new GithubSlugger()


const Head2Id: React.FC<Props> = ({children}) => {
    const str: string = children.toString()
    const id: string = slugger.slug(str)
    return id.slice(0, -2);
}

export default Head2Id