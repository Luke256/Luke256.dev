import HeadBar from "@/components/HeadBar";
import { Metadata } from "next";
import TenPuzzleComponent from "./tenPuzzle";

export const metadata: Metadata = {
  title: "TenPuzzle | Works | Luke256's Portfolio",
  description: "テンパズルのソルバー",
}

const TenPuzzlePage = () => {
    return (
        <main>
            <HeadBar />
            <div className="min-h-[calc(100vh-var(--header-height)-var(--footer-height))]">
                <TenPuzzleComponent />
            </div>
        </main>
    )
}

export default TenPuzzlePage;