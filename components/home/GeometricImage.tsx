
const GeometricImage = () => {
    const templateClass = "fixed top-1/2 left-1/2 w-[100px] h-[100px] ";
    return (
        <div className="fixed top-0 left-0 w-screen h-screen transform-3d animate-spin">
            <div className={templateClass}>
                <div className=" bg-red-400/50 size-full"></div>
            </div>
            <div className={templateClass + " translate-z-25"}>
                <div className=" bg-blue-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-x-90 -translate-y-12.5 translate-z-12.5"}>
                <div className=" bg-yellow-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-x-90 translate-y-12.5 translate-z-12.5"}>
                <div className=" bg-green-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-y-90 -translate-x-12.5 translate-z-12.5"}>
                <div className=" bg-purple-400/50 size-full"></div>
            </div>
            <div className={templateClass + " rotate-y-90 translate-x-12.5 translate-z-12.5"}>
                <div className=" bg-pink-400/50 size-full"></div>
            </div>
        </div>
    )
}

export default GeometricImage;