type Props = {
  icon?: React.ReactNode;
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
};

const SubSection = ({ icon, title, titleClassName, children }: Props) => {
  return (
    <div className="flex flex-col pr-4">
      <div className="flex">
        {icon}
        <h2 className={"text-3xl font-bold mb-4 " + titleClassName}>{title}</h2>
      </div>
      <div className="text-xl font-mono font-midium mt-4 pl-2">
        {children}
      </div>
    </div>
  );
}

export default SubSection;