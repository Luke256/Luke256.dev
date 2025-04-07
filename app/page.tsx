import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex object-top items-center justify-center p-10">
        <h1 className="font-mono font-extrabold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-6xl font-extrabold text-transparent">
          Luke256&#39;s Portfolio
        </h1>
        
        <Image src="/images/FlameSword.png" alt="Luke256" width={200} height={200} className="ml-5" />
      </div>
    </main>
  );
}
