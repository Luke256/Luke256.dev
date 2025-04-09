import Section from "@/components/home/Section";
import SubSection from "@/components/home/SubSection";
import TopWindow from "@/components/home/TopWindow";
import { FaCubes, FaChessKnight } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <TopWindow />
      <Section title="About Me">
        <div className="text-xl font-mono font-midium mt-4">
          プログラミングが好きな大学二年生です。<br />
          ゲーム作ったりWebアプリ作ったりしてます。
        </div>

        <h2 className="text-3xl font-bold mb-4 mt-8 text-fuchsia-200 text-center">
          活動
        </h2>
        <div className="md:grid md:grid-cols-2 md:divide-x-2 md:divide-indigo-500 md:gap-4">
          <SubSection title="創作系" titleClassName="text-green-200" icon={<FaCubes className="text-3xl mr-2 text-green-200" />}>
            <span className="text-xl font-mono font-thin">
              ゲーム制作やWeb制作をしています。
              ゲーム制作ではUnityやOpenSiv3D、Web制作ではNext.jsやGo言語を使うことが多いです。
            </span>
          </SubSection>
          <SubSection title="技術系" titleClassName="text-blue-200" icon={<FaChessKnight className="text-3xl mr-2 text-blue-200" />}>
            <span className="text-xl font-mono font-thin">
              競技プログラミングをやっています。
              また機械学習、主に強化学習の分野の研究に興味があります。
            </span>
          </SubSection>
        </div>
      </Section>
    </main>
  );
}
