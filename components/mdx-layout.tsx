
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
        integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
        crossOrigin="anonymous"
      />
      {/*TODO: この秘伝のたれを分解して、全部自分で書く*/}
      <article className="prose prose-lg prose-slate max-w-none text-slate-950 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-black prose-headings:[word-break:auto-phrase] prose-h1:mt-14 prose-h1:border-b prose-h1:border-indigo-300 prose-h1:pb-3 prose-h1:text-3xl sm:prose-h1:text-4xl prose-h2:mt-12 prose-h2:border-l-4 prose-h2:border-indigo-500 prose-h2:pl-4 prose-h2:text-2xl prose-h3:mt-10 prose-h3:text-xl prose-p:text-slate-950 prose-p:leading-8 prose-li:text-slate-950 prose-strong:text-black prose-a:font-medium prose-a:text-indigo-800 prose-a:decoration-indigo-400 prose-a:underline-offset-4 prose-a:[line-break:auto] prose-a:[overflow-wrap:anywhere] prose-a:[word-break:normal] hover:prose-a:text-indigo-600 prose-blockquote:rounded-r-lg prose-blockquote:border-l-indigo-600 prose-blockquote:bg-indigo-50 prose-blockquote:px-5 prose-blockquote:py-1 prose-blockquote:text-slate-800 prose-code:rounded prose-code:bg-slate-300/70 prose-code:px-1.5 prose-code:py-0.5 prose-code:font-medium prose-code:text-slate-950 prose-code:before:content-none prose-code:after:content-none prose-pre:overflow-x-auto prose-pre:rounded-xl prose-pre:border prose-pre:border-slate-800 prose-pre:bg-slate-950 prose-pre:shadow-lg prose-img:mx-auto prose-img:rounded-xl prose-img:border prose-img:border-slate-300 prose-img:shadow-sm prose-li:my-1 prose-ol:marker:text-indigo-700 prose-ul:marker:text-indigo-600 prose-hr:border-slate-300 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:font-normal [&_pre_code]:text-inherit">
        {children}
      </article>
    </div>
  )
}
