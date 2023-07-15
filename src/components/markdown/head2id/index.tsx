import React from "react"
import GithubSlugger from 'github-slugger'

type Props = {
    children: any,
}

const slugger = new GithubSlugger()


const Head2Id = (value: string) => {
    const str: string = value
    const id: string = slugger.slug(str)
    return id;
}

export default Head2Id