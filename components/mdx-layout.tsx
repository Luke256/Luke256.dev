import HeadBar from "./HeadBar";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/katex@0.15.3/dist/katex.min.css"
        integrity="sha384-KiWOvVjnN8qwAZbuQyWDIbfCLFhLXNETzBQjA/92pIowpC0d2O3nppDGQVgwd2nB"
        crossOrigin="anonymous"
      />
      <div>
      <HeadBar />
      </div>
      <div className="max-w-4xl p-12 m-auto bg-gray-200">
        <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
          {children}
        </article>
      </div>
    </main>
  )
}