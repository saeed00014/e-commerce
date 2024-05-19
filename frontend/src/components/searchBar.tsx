import { FaMagnifyingGlass } from "react-icons/fa6";
import cn from "../utils/merger";

type Props = {
  id?: string;
  placeHolder?: string;
  classNames?: string;
};

const SearchBar = ({ classNames, placeHolder, id }: Props) => {
  return (
    <form className={cn("relative flex items-center", classNames)}>
      <label htmlFor={id} className="absolute right-[1rem] pointer-events-none">
        <FaMagnifyingGlass />
      </label>
      <input
        id={id}
        placeholder={placeHolder}
        className="rounded-full h-full bg-lightMoon pr-[2.8rem] pl-[1rem]"
      />
    </form>
  );
};

export default SearchBar;
