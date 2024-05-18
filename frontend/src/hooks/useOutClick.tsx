import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  setEvent: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
};

const UseOutClick = ({ children, setEvent, id }: Props) => {
  const handleClick = (e: any) => {
    if (e.target?.id != id) {
      setEvent(false);
      document.removeEventListener("click", handleClick, true);
    }
  };

  document.addEventListener("click", handleClick, true);

  return <>{children}</>;
};

export default UseOutClick;
