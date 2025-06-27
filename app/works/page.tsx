import HeadBar from "@/components/HeadBar"
import Section from "@/components/Section";
import { Metadata } from "next";
import { WorksList, WorksListItem } from "./works";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Works | Luke256's Portfolio",
  description: "Luke256's Portfolio",
}

const WorksPage = () => {
  return (
    <main>
      <HeadBar />
      <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
        <Section title="制作物一覧" maxWidth="max-w-5xl">
          <div className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {WorksList.map((work: WorksListItem, index: number) => (
                <Link key={index} href={`/works/${work.slug}`} className="h-full">
                  <div className="p-4 bg-white rounded shadow h-full flex md:flex-col justify-between">
                    <h2 className="text-xl font-bold text-gray-900">{work.title}</h2>
                    <div className="">
                      <p className="text-gray-600">{work.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </main>
  )
}

export default WorksPage;
