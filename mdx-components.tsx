import type { MDXComponents } from 'mdx/types'
import { Tweet as ReactTweet, type TweetProps } from 'react-tweet'

const Tweet = (props: TweetProps) => (
  <div className="not-prose">
    <ReactTweet {...props} />
  </div>
)

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Tweet,
    ...components,
  }
}
