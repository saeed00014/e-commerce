import { header } from "../../assets/data";
import CloseBtn from "../closeBtn";
import SearchBar from "../searchBar";
import { SearchedProduct } from "../ui/items";

type Props = {
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchContainer = ({ setIsSearch }: Props) => {
  return (
    <div
      id="searchproductcon"
      className="absolute left-2 top-[3rem] flex flex-col py-1 h-[16rem] w-[30rem] bg-ship rounded-[.6rem] shadow-2xl opacity-50 animate-[downUnFade_0.3s_linear_forwards] z-50"
    >
      <div
        id="searchproductcon"
        className="flex justify-between border-b pb-1 px-3"
      >
        <SearchBar
          id="searchproductcon"
          placeHolder={header.searchProducts}
          classNames="h-[2.5rem]"
        />
        <CloseBtn setEvent={setIsSearch} />
      </div>
      <div id="searchproductcon" className="px-2 mt-1 w-full h-full overflow-y-auto">
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
        <SearchedProduct product="" />
      </div>
    </div>
  );
};

export default SearchContainer;
