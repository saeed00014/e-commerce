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
    <div className="relative flex items-center w-full">
      <div
        onClick={() =>
          UseScrollerBtn({
            direction: "left",
            id: id,
            setBtnFade: setBtnFade,
          })
        }
        className={`flex items-center`}
      >
        <ScrollerBtn
          classNames={`-left-2 z-20 ${
            btnFade === "left" && "opacity-55 border-darkwater z-20"
          }`}
        />
      </div>
      <div
        id={id}
        className={cn(
          "flex items-center pb-2 w-full max-w-max h-full overflow-y-hidden overflow-x-auto",
          classNames
        )}
      >
        {children}
      </div>
      <div
        onClick={() =>
          UseScrollerBtn({
            direction: "right",
            id: id,
            setBtnFade: setBtnFade,
          })
        }
        className="flex items-center"
      >
        <ScrollerBtn
          classNames={`-right-2 rotate-[180deg] ${
            btnFade === "right" && "opacity-55 border-darkwater z-20"
          }`}
        />
      </div>
    </div>
  );
};

export { ItemsScroller };
