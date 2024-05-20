import { FaMagnifyingGlass } from "react-icons/fa6";
import cn from "../utils/merger";

type Props = {
  id?: string;
  placeHolder?: string;
  classNames?: string;
};

const SearchBar = ({ classNames, placeHolder, id }: Props) => {
  return (
    <form className={cn("relative flex items-center md:w-[16rem] w-[14rem]", classNames)}>
      <label
        htmlFor={id}
        className="absolute md:right-[1rem] right-[.8rem] pointer-events-none"
      >
        <FaMagnifyingGlass />
      </label>
      <input
        id={id}
        placeholder={placeHolder}
        className="rounded-full h-full w-full bg-lightMoon md:pr-[2.8rem] pr-[2.2rem] pl-[1rem]"
      />
    </form>
  );
};

export default SearchBar;
