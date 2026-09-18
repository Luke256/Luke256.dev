import type { MDXComponents } from 'mdx/types'
import Tweet from '@/components/blogs/Tweet'
import { LinkCard } from './components/blogs/open-graph/LinkCard'

const TweetComponent = ({ id }: { id: string }) => (
  <div className="not-prose">
    <Tweet id={id} />
  </div>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tweet: TweetComponent,
    LinkCard,
    ...components,
  }
}
