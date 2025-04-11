import TreeSVG from "./TreeSVG";

type Props = {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <div className="relative">

    <div className="text-white p-4 max-w-3xl mt-10 mb-10 content-center sm:justify-self-center">
      <TreeSVG className="pointer-events-none bottom-0 left-0 sm:h-[calc(100%-var(--header-height))] w-full sm:w-auto invisible sm:visible" aspectRatio={1.8} />
      <TreeSVG className="pointer-events-none bottom-0 right-0 sm:h-[calc(100%-var(--header-height))] w-full sm:w-auto" aspectRatio={1.8} invert />
      <div className="text-4xl font-bold pb-2 px-8 border-b-3 border-dashed border-b-indigo-400 w-max m-auto">{title}</div>
      <div className="p-10 ">
        {children}
      </div>
    </div>
    </div>
  );
}

export default Section;