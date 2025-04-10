
const GeometricImage = () => {
    const templateClass = "fixed top-1/2 left-1/2 w-[100px] h-[100px] ";
    return (
        <div className="fixed top-0 left-0 w-screen h-screen transform-3d animate-spin">
            <div className={templateClass}>
                <div className=" bg-red-400/50 size-full"></div>
            </div>
            <div className={templateClass + " translate-z-[100px]"}>
                <div className=" bg-blue-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-x-90 -translate-y-[50px] translate-z-[50px]"}>
                <div className=" bg-yellow-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-x-90 translate-y-[50px] translate-z-[50px]"}>
                <div className=" bg-green-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-y-90 -translate-x-[50px] translate-z-[50px]"}>
                <div className=" bg-purple-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-y-90 translate-x-[50px] translate-z-[50px]"}>
                <div className=" bg-pink-400/50 size-full"></div>
            </div>
        </div>
    )
}

export default GeometricImage;