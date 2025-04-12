import Link from "next/link";
import Section from "@/components/Section";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { SiZenn } from "react-icons/si";
import Image from "next/image";
import AtCoderWhiteImg from "@/images/atcoder_logo_white.png";
import QiitaIcon from "@/images/qiita-icon.png";
import ResumeIcon from "@/images/resume-logo-dark-edit.png";

const Links = () => {
    return (
        <Section title="リンク集">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <Link href="https://github.com/Luke256" className="sm:col-span-2" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#01040940] hover:bg-[#01040960] transition duration-300">
                        <FaGithub className="text-4xl" />
                        <div className="ml-4 content-center">
                            <span>Github @Luke256</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://twitter.com/Luke02561" className="sm:col-span-2" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#00acee40] hover:bg-[#00acee60] transition duration-300">
                        <FaTwitter className="text-4xl" color="00acee" />
                        <div className="ml-4 content-center">
                            <span>Twitter @Luke02561</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://zenn.dev/luke256" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#3EA8FF40] hover:bg-[#3EA8FF60] transition duration-300">
                        <SiZenn className="text-4xl" color="#3EA8FF" />
                        <div className="ml-4 content-center">
                            <span>Zenn @Luke256</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://atcoder.jp/users/yuta28" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#23181540] hover:bg-[#23181560] transition duration-300">
                        <Image src={AtCoderWhiteImg} alt="AtCoder" className="h-[36px] w-auto"/>
                        <div className="ml-4 content-center">
                            <span>AtCoder yuta28</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://qiita.com/Luke02561" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#55c50040] hover:bg-[#55c50060] transition duration-300">
                        <Image src={QiitaIcon} alt="Qiita" className="h-[36px] w-auto" />
                        <div className="ml-4 content-center">
                            <span>Qiita @Luke02561</span>
                        </div>
                    </div>
                </Link>
                <Link href="https://www.resume.id/luke256/works" className="" target="_blank" rel="noopener noreferrer">
                    <div className="sm:px-8 p-4 flex justify-between rounded-lg bg-[#329eff40] hover:bg-[#329eff60] transition duration-300">
                        <Image src={ResumeIcon} alt="Resume" className="h-[36px] w-auto" />
                        <div className="ml-4 content-center">
                            <span>RESUME luke256</span>
                        </div>
                    </div>
                </Link>
            </div>
        </Section>
    )
}

export default Links;