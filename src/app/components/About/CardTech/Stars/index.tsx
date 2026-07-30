import { FaStar } from "react-icons/fa";

type StarsProps = {
  quantity: number;
};

const Stars = ({ quantity }: StarsProps) => {
  return (
    <div className="flex gap-1">
      {Array.from({ length: quantity }).map((_, index) => (
        <FaStar
          key={index}
          className="text-yellow-400 text-[8px] md:text-[12px] lg:text-base"
        />
      ))}
    </div>
  );
};

export { Stars };
