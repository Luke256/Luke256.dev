import Link from "next/link";

const HeadBar = () => {
  return (
    <div className="sticky top-0 bg-gray-800/80 text-white flex justify-evenly h-(--header-height) items-center backdrop-blur-sm z-50">
      <Link href="/blogs/">
        <div className="trainsition duration-150 ease-in-out px-4 py-1 border-b-2 border-indigo-500/0 hover:border-indigo-500">
          Blogs
        </div>
      </Link>
      <Link href="/">
        <div className="trainsition duration-150 ease-in-out px-4 py-1 border-b-2 border-indigo-500/0 hover:border-indigo-500">
          Home
        </div>
      </Link>
      <Link href="/works">
        <div className="trainsition duration-150 ease-in-out px-4 py-1 border-b-2 border-indigo-500/0 hover:border-indigo-500">
          Works
        </div>
      </Link>

    </div>
  )
}

export default HeadBar;