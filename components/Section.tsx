'use client';

import { useInView } from "react-intersection-observer";

type Props = {
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}

const Section = ({ title, children, maxWidth }: Props) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="relative">
      <div className={"text-white m-auto p-4 pt-10 pb-10 " + (maxWidth ? maxWidth : "max-w-3xl")}>
        <div className={"text-4xl font-bold pb-2 px-8 border-b-3 border-dashed border-b-indigo-400 w-max m-auto " + (inView ? "animate-fade-in-load" : "opacity-0")}>{title}</div>
        <div className={"p-10 opacity-0 w-full " + (inView ? "animate-fade-in-load-delay" : "")}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Section;
