import { visit } from 'unist-util-visit'

export default function remarkLinkCard() {
    return (tree) => {
        // リンク単体の paragraph をLinkCard に変換
        visit(tree, 'paragraph', (node, index, parent) => {
            if (index === undefined) return
            if (parent === undefined) return
            if (node.children.length !== 1) return
            if (node.children[0].type !== 'link') return

            const link = node.children[0]
            const linkCard = {
                type: 'mdxJsxFlowElement',
                name: 'LinkCard',
                attributes: [
                    {
                        type: 'mdxJsxAttribute',
                        name: 'href',
                        value: link.url,
                    }
                ],
                children: [],
            }

            const isBareURL = 
                link.children.length === 1 &&
                link.children[0].type === 'text' &&
                link.children[0].value === link.url

            if (isBareURL) {
                parent.children[index] = linkCard
            } else {
                parent.children.splice(index + 1, 0, linkCard)
            }
        })
    }
}
