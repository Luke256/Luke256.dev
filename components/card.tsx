
const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white/60 shadow-md rounded-lg p-4 max-w-2xl m-auto mt-10 mb-10 border border-gray-200">
      {children}
    </div>
  );
}

export default Card;