import Link from "next/link";
import Section from "./Section";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import Image from "next/image";
import AtCoderWhiteImg from "@/images/atcoder_logo_white.png";
import QiitaIcon from "@/images/qiita-white-icon.png";

const Links = () => {
    return (
        <Section title="リンク集">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link href="https://github.com/Luke256" className="sm:col-span-2" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-gray-800 hover:bg-[#010409] transition duration-300">
                        <FaGithub className="text-4xl" />
                        <div className="ml-4 content-center">
                            <span>Github @Luke256</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://twitter.com/Luke02561" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-gray-800 hover:bg-[#00acee] transition duration-300">
                        <FaTwitter className="text-4xl" />
                        <div className="ml-4 content-center">
                            <span>Twitter @Luke02561</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://zenn.dev/luke256" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-gray-800 hover:bg-[#3EA8FF] transition duration-300">
                        <SiZenn className="text-4xl" />
                        <div className="ml-4 content-center">
                            <span>Zenn @Luke256</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://zenn.dev/luke256" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-gray-800 hover:bg-[#231815] transition duration-300">
                        <Image src={AtCoderWhiteImg} alt="AtCoder" className="h-[36px] w-auto"/>
                        <div className="ml-4 content-center">
                            <span>AtCoder yuta28</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://qiita.com/Luke02561" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-gray-800 hover:bg-[#55c500] transition duration-300">
                        <Image src={QiitaIcon} alt="Qiita" className="h-[36px] w-auto" />
                        <div className="ml-4 content-center">
                            <span>Qiita @Luke02561</span>
                        </div>
                    </div>
                </Link>
            </div>
        </Section>
    )
}

export default Links;