import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { CodeComponent } from "react-markdown/lib/ast-to-react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import Skeleton from "react-loading-skeleton";

const customCode: CodeComponent = ({ inline, className, children }) => {
    if (inline) {
        return <code className={className}>{children}</code>;
    }

    const match = /language-(\w+)/.exec(className || '');
    const lang = match && match[1] ? match[1] : '';

    if (lang === 'twitter') {
        return (
            <TwitterTweetEmbed 
                tweetId={String(children).replace(/\n$/, '')} 
                placeholder={<Skeleton height={300} />}
            />
        )
    }

    return (
        <SyntaxHighlighter
            style={tomorrow}
            language={lang}
        >
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    );
};

export default customCode