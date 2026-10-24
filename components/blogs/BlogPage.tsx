import HeadBar from "../HeadBar";
import UpdatesInfo from "./UpdatesInfo";
import MdxLayout from "../mdx-layout";

export type BlogType = "blog" | "zenn"

type BlogInfo = {
  slug?: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  hero?: string;
  type?: BlogType;
}

type props = {
  bloginfo: BlogInfo;
  children: React.ReactNode;
}

const BlogContent = ({ bloginfo, children }: props) => {
  return (
    <main>
      <div>
        <HeadBar />
      </div>

      <div className="max-w-4xl m-auto bg-white px-4 md:px-10 py-10 [line-break:strict] sm:p-12">
        {bloginfo.hero && (
          // eslint-disable-next-line @next/next/no-img-element -- Hero metadata contains a URL without image dimensions.
          <img
            src={bloginfo.hero}
            alt={bloginfo.title}
            className="mb-6 h-auto w-full rounded-xl"
          />
        )}
        <div className="text-3xl font-bold leading-tight [word-break:auto-phrase] sm:text-5xl">{bloginfo.title}</div>
        <div className="mt-2">
          <UpdatesInfo createdAt={bloginfo.createdAt} updatedAt={bloginfo.updatedAt} />
        </div>
        <div className="mt-4">
          <MdxLayout>
            {children}
          </MdxLayout>
        </div>
      </div>
    </main>
  );
}

export default BlogContent;
export type { BlogInfo };
