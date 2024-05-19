import { productData } from "../../assets/data";
import SearchBar from "../../components/searchBar";
import { Select } from "../../components/ui/inputs";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center px-2 w-full h-[4rem] bg-ship">
      <SearchBar placeHolder="" classNames="h-[2.5rem]" />
      <div>
        <span>{productData.groupBy} </span>
        <Select classNames="w-[7rem]"/>
      </div>
    </div>
  );
};

export default Header;
