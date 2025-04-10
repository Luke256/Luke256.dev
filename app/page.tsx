import AboutMe from "@/components/home/AboutMe";
import Career from "@/components/home/Career";
import GeometricImage from "@/components/home/GeometricImage";
import TopWindow from "@/components/home/TopWindow";

export default function Home() {
  return (
    <main>
      <TopWindow />
      <AboutMe />
      <Career />
      <GeometricImage />
    </main>
  );
}
