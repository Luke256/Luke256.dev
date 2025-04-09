import Image from "next/image"
import HeadBar from "../HeadBar"
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Link from "next/link";

const TopWindow = () => {
  return (
    <div className="h-screen bg-linear-to-t from-gray-900 to-gray-700">
      <HeadBar />
      <div className="max-w-3xl m-auto h-[calc(100%-var(--header-height))]">
        <div className="flex flex-col-reverse md:flex-row items-center place-content-center md:justify-around h-full px-4 md:px-1">
          <div className="animate-fade-in-load opacity-0">
            <div className="text-6xl font-black font-mono bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-transparent">
              <h1 className="p-1">
                Luke256&apos;s
              </h1>
              <h1 className="p-1 pl-[1em]">
                Portfolio
              </h1>
            </div>
            <div className="text-2xl font-mono font-midium text-gray-400 mt-4 text-center">
              &#x28;&#x2267;^&middot;ω&middot;^&#x2266;&#x29;meow
            </div>
            <div className="flex justify-evenly">
              <Link href="https://github.com/Luke256" target="_blank">
                <FaGithub className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out text-3xl mt-4" />
              </Link>
              <Link href="https://twitter.com/Luke02561" target="_blank">
                <FaTwitter className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out text-3xl mt-4" />
              </Link>
              <Link href="https://zenn.dev/luke256" target="_blank">
                <SiZenn className="text-gray-400 hover:text-gray-200 transition duration-150 ease-in-out text-3xl mt-4" />
              </Link>
            </div>
          </div>
          <Image src="/images/FlameSword.png" alt="FlameSword" width={256} height={256} className="animate-fade-in-load-delay opacity-0" />
        </div>
      </div>
    </div>
  )
};

export default TopWindow;