import { ReactNode } from "react";

const Hoc = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center md:pt-[48px] pt-[40px] md:pb-0 pb-[41px] h-[100vh] w-[100vw]">
      {children}
    </div>
  );
};

export default Hoc;
