import HeadBar from "@/components/HeadBar"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works | Luke256's Portfolio",
  description: "Luke256's Portfolio",
}

const WorksPage = () => {
  return (
    <main>
      <HeadBar />
      <div className="max-w-3xl text-white m-auto min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        Comming Soon...
      </div>
    </main>
  )
}

export default WorksPage;