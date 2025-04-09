
type Props = {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: Props) => {
  return (
    <div className="text-white p-4 max-w-3xl m-auto mt-10 mb-10">
      <div className="text-4xl font-bold mb-4 pb-2 px-8 border-b-3 border-dashed border-b-indigo-400 w-max">{title}</div>
      <div className="p-10">
        {children}
      </div>
    </div>
  );
}

export default Section;