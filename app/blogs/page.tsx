import HeadBar from "@/components/HeadBar"
import Section from "@/components/Section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Luke256's Portfolio",
  description: "Luke256's Portfolio",
}

const BlogPage = () => {
  return (
    <main>
      <HeadBar />
      <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Section title="ブログ一覧">
          <div className="h-full">

            <p>現在準備中です。</p>
          </div>
        </Section>
      </div>
    </main>
  )
}

export default BlogPage;