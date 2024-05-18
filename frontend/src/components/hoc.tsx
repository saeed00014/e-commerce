import { ReactNode } from "react";

const Hoc = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex pt-[48px] h-[100vh] w-[100vw]">{children}</div>
  )
};

export default Hoc;
