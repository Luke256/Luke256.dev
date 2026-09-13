import { Metadata } from "next";
import TenPuzzleComponent from "./tenPuzzle";

export const metadata: Metadata = {
  title: "TenPuzzle",
  description: "テンパズルのソルバー",
}

const TenPuzzlePage = () => {
    return (
        <main>
            {/* <HeadBar /> */}
            <div className="min-h-[calc(100vh-var(--footer-height))]">
                <TenPuzzleComponent />
            </div>
        </main>
    )
}

export default TenPuzzlePage;