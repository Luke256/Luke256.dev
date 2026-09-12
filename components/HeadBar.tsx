import Link from "next/link";
import FlameSword from "@/images/FlameSword.png";
import Image from "next/image";

const HeadBar = () => {
  return (
    <div className="sticky top-0 bg-gray-800/80 text-white flex justify-evenly sm:justify-center sm:gap-16 h-(--header-height) items-center backdrop-blur-sm z-50">
      <Link href="/blogs/">
        <div className="trainsition duration-150 ease-in-out px-4 border-b-2 border-indigo-500/0 hover:border-indigo-500">
          Blogs
        </div>
      </Link>
      <Link href="/">
        <Image src={FlameSword} alt="FlameSword" width={32} height={32} loading="eager"/>
      </Link>
      <Link href="/works">
        <div className="trainsition duration-150 ease-in-out px-4 border-b-2 border-indigo-500/0 hover:border-indigo-500">
          Works
        </div>
      </Link>

    </div>
  )
}

export default HeadBar;