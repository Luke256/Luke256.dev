import TreeSVG from "./TreeSVG";

type Props = {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <div className="relative">

    <div className="text-white p-4 max-w-3xl mt-10 mb-10 content-center md:justify-self-center">
      <TreeSVG className="top-(--header-height) left-0 h-[calc(100%-var(--header-height))] invisible md:visible" aspectRatio={1.8} />
      <TreeSVG className="top-(--header-height) right-0 h-[calc(100%-var(--header-height))]" aspectRatio={1.8} invert />
      <div className="text-4xl font-bold pb-2 px-8 border-b-3 border-dashed border-b-indigo-400 w-max m-auto">{title}</div>
      <div className="p-10 ">
        {children}
      </div>
    </div>
    </div>
  );
}

export default Section;