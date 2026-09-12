import HeadBar from "../HeadBar";
import UpdatesInfo from "./UpdatesInfo";
import MdxLayout from "../mdx-layout";

type BlogInfo = {
  slug?: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  type?: string;
}

type props = {
  bloginfo: BlogInfo;
  children: React.ReactNode;
}

const BlogPage = ({ bloginfo, children }: props) => {
  return (
    <main>
      <div>
        <HeadBar />
      </div>

      <div className="max-w-4xl m-auto bg-white px-5 py-10 [line-break:strict] sm:p-12">
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

export default BlogPage;
export type { BlogInfo };
