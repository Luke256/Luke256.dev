import Image from "next/image"
import HeadBar from "../HeadBar"

const TopWindow = () => {
    return (
        <div className="h-screen bg-linear-to-t from-gray-900 to-gray-700">
            <HeadBar />
            <div className="max-w-3xl m-auto h-[calc(100%-var(--header-height))]">
                <div className="flex flex-col-reverse md:flex-row items-center place-content-center md:justify-between h-full px-4 md:px-1">
                    <div>
                        <div className="text-6xl font-black font-mono bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-600 text-transparent">
                            <h1 className="p-1">
                                Luke256's
                            </h1>
                            <h1 className="p-1 pl-[1em]">
                                Portfolio
                            </h1>
                        </div>
                        <div className="text-2xl font-mono font-midium text-gray-400 mt-4">
                            とある大学生のポートフォリオ
                        </div>
                    </div>
                    <Image src="/images/FlameSword.png" alt="FlameSword" width={256} height={256} />
                </div>
            </div>
        </div>
    )
};

export default TopWindow;