
type Props = {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <div className="text-white p-4 max-w-3xl m-auto mt-10 mb-10">
      <div className="text-4xl font-bold mb-4 underline underline-offset-[0.1em] decoration-indigo-400">{title}</div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default Section;