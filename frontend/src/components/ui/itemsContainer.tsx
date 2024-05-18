import { ReactNode, useState } from "react";
import ScrollerBtn from "./scrollerBtn";
import cn from "../../utils/merger";
import UseScrollerBtn from "../../hooks/useScrollerBtn";

type Props = {
  children: ReactNode;
  id: string;
  classNames?: string;
};

const ItemsScroller = ({ children, id, classNames }: Props) => {
  const [btnFade, setBtnFade] = useState("");

  return (
    <div
      id={id}
      className={cn(
        "flex items-center w-full max-w-max h-full overflow-x-auto pb-2",
        classNames
      )}
    >
      <div
        onClick={() =>
          UseScrollerBtn({ direction: "left", id: id, setBtnFade: setBtnFade })
        }
        className={`flex items-center`}
      >
        <ScrollerBtn
          classNames={`left-1 ${
            btnFade === "left" && "opacity-55 border-darkwater z-20"
          }`}
        />
      </div>
      {children}
      <div
        onClick={() =>
          UseScrollerBtn({ direction: "right", id: id, setBtnFade: setBtnFade })
        }
        className="flex items-center"
      >
        <ScrollerBtn
          classNames={`right-1 rotate-[180deg] ${
            btnFade === "right" && "opacity-55 border-darkwater z-20"
          }`}
        />
      </div>
    </div>
  );
};

export { ItemsScroller };
