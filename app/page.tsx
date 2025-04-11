import AboutMe from "@/components/home/AboutMe";
import Career from "@/components/home/Career";
import Links from "@/components/home/Links";
import TopWindow from "@/components/home/TopWindow";

export default function Home() {
  return (
    <main>
      <TopWindow />
      <AboutMe />
      <Career />
      <Links />
    </main>
  );
}
