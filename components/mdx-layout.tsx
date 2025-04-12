import HeadBar from "./HeadBar";


export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <HeadBar />
      <div className="max-w-4xl p-12 m-auto bg-gray-200">
        <article className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg">
          {children}
        </article>
      </div>
    </main>
  )
}