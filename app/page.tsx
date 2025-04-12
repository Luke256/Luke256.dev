import AboutMe from "@/components/home/AboutMe";
import Career from "@/components/home/Career";
import Links from "@/components/home/Links";
import TopWindow from "@/components/home/TopWindow";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Luke256's Portfolio",
}

export default function Home() {
  return (
    <>
    <main>
      <TopWindow />
      <AboutMe />
      <Career />
      <Links />
    </main>
    </>
  );
}
