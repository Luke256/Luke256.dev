import Section from "@/components/Section";
import SubSection from "./SubSection";
import Link from "next/link";
import { FaCubes, FaChessKnight } from "react-icons/fa";

const AboutMe = () => {
  return (
    <Section title="About Me">
      <div className="text-lg font-mono font-midium mt-4">
        プログラミングが好きな大学二年生です。<br />
        ゲーム作ったりWebアプリ作ったりしてます。
      </div>
      <h2 className="text-3xl font-bold mb-4 mt-8 text-teal-200 text-center">
        所属
      </h2>
      <div className="text-lg font-mono font-medium mt-8">
        <ul className="list-disc list-inside">
          <li>東京科学大学 情報理工学院 情報工学系 2年</li>
          <li><Link href="https://swallow-llm.github.io/index.ja.html" target="_blank" aria-label="trap" className="text-indigo-300">Swallow LLM</Link> メンバー</li>
          <li><Link href="https://trap.jp" target="_blank" aria-label="trap" className="text-indigo-300">東京科学大学デジタル創作同好会traP</Link></li>
          <li><Link href="https://onlinemathcontest.com" target="_blank" aria-label="OnlineMathContest" className="text-indigo-300">OnlineMathContest</Link> 開発運営</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-8 text-fuchsia-200 text-center">
        活動
      </h2>
      <div className="md:grid md:grid-cols-2 md:divide-x-2 md:divide-indigo-500 md:gap-4">
        <SubSection title="創作系" titleClassName="text-green-200" icon={<FaCubes className="text-3xl mr-2 text-green-200" />}>
          <span className="text-lg font-mono font-medium">
            ゲーム制作やWeb制作をしています。
            ゲーム制作ではUnityやOpenSiv3D、Web制作ではNext.jsやGo言語を使うことが多いです。
          </span>
        </SubSection>
        <SubSection title="技術系" titleClassName="text-blue-200" icon={<FaChessKnight className="text-3xl mr-2 text-blue-200" />}>
          <span className="text-lg font-mono font-medium">
            競技プログラミングをやっています。
            また機械学習、主に強化学習の分野の研究に興味があります。
          </span>
        </SubSection>
      </div>
    </Section>
  );
}

export default AboutMe;