import cn from "../../utils/merger";
import { IoIosArrowBack  } from "react-icons/io";

const ScrollerBtn = ({ classNames }: { classNames?: string }) => {
  return (
    <div className={cn("absolute py-[2.4rem] px-[.7rem] border border-dark bg-ship hover:brightness-90 z-20 cursor-pointer", classNames)}>
      <IoIosArrowBack className="text-[1.4rem]" />
    </div>
  );
};

export default ScrollerBtn;
