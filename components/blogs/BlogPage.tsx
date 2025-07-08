import HeadBar from "../HeadBar";
import UpdatesInfo from "./UpdatesInfo";
import MdxLayout from "../mdx-layout";

type BlogInfo = {
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  type: string;
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

      <div className="max-w-4xl p-12 m-auto bg-gray-200">
        <h1 className="text-5xl font-bold text-gray-800 leading-tight">{bloginfo.title}</h1>
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