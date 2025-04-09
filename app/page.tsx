import Section from "@/components/home/Section";
import TopWindow from "@/components/home/TopWindow";

export default function Home() {
  return (
    <main>
      <TopWindow />
      <div className="h-screen">
        <Section title="About Me">
          <span className="text-xl font-mono font-midium text-gray-400 mt-4">
            プログラミングが好きな大学二年生です。<br />
            ゲーム作ったりWebアプリ作ったりしてます。
          </span>
        </Section>
      </div>
    </main>
  );
}
