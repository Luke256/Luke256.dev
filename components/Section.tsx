'use client';

import TreeSVG from "@/components/svg/TreeSVG";
import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
  sideTree?: boolean;
}

const Section = ({ title, children, maxWidth, sideTree }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  if (sideTree === undefined) {
    sideTree = true;
  }

  return (
    <div ref={ref} className="relative">
      <div className={"text-white m-auto p-4 pt-10 pb-10 " + (maxWidth ? maxWidth : "max-w-3xl")}>
        {sideTree && (
          <>
            <TreeSVG className="pointer-events-none bottom-0 left-0 sm:h-[calc(100%-var(--header-height))] w-full sm:w-auto invisible sm:visible" aspectRatio={1.8} />
            <TreeSVG className="pointer-events-none bottom-0 right-0 sm:h-[calc(100%-var(--header-height))] w-full sm:w-auto" aspectRatio={1.8} invert />
          </>
        )}
        <div className={"text-4xl font-bold pb-2 px-8 border-b-3 border-dashed border-b-indigo-400 w-max m-auto " + (inView ? "animate-fade-in-load" : "opacity-0")}>{title}</div>
        <div className={"p-10 opacity-0 w-full " + (inView ? "animate-fade-in-load-delay" : "")}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Section;