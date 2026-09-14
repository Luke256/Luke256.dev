"use client";

import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";

type TweetPlaceholderProps = {
  id?: string;
  loading?: boolean;
};

const DeferredTweet = dynamic(
  () => import("react-tweet").then(({ Tweet }) => Tweet),
  {
    ssr: false,
    loading: () => <TweetPlaceholder loading />,
  },
);

function TweetPlaceholder({ id, loading = false }: TweetPlaceholderProps) {
  return (
    <div
      className="my-6 flex min-h-44 w-full min-w-62.5 max-w-137.5 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-8 text-center text-slate-700"
      aria-busy={loading || undefined}
    >
      <div>
        <p className="m-0 font-semibold text-slate-900">
          {loading ? "Twitterの投稿を読み込んでいます…" : "Twitterの投稿"}
        </p>
        {id && (
          <a
            className="mt-2 inline-block text-sm font-medium text-indigo-700 underline decoration-indigo-300 underline-offset-4 hover:text-indigo-500"
            href={`https://x.com/i/web/status/${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitterで見る
          </a>
        )}
      </div>
    </div>
  );
}

export default function Tweet({ id }: { id: string }) {
  const { ref, inView } = useInView({
    // Start shortly before the card enters the viewport so it is usually ready on arrival.
    rootMargin: "600px 0px",
    triggerOnce: true,
    fallbackInView: true,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <DeferredTweet
          id={id}
          fallback={<TweetPlaceholder id={id} loading />}
        />
      ) : (
        <TweetPlaceholder id={id} />
      )}
    </div>
  );
}
