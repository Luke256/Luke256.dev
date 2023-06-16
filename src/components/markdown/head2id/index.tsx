import React from "react"

type Props = {
    children: any,
}


const Head2Id: React.FC<Props> = ({children}) => (
    children.toString()
        .replace(" ", "-")
        .replace(".","")
)

export default Head2Id