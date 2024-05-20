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
      className="md:absolute fixed md:!top-[3.2rem] !top-[2.7rem] md:left-2 left-1 md:right-[initial] right-1 flex flex-col py-1 h-[20rem] md:w-[30rem] bg-ship rounded-[.6rem] shadow-2xl opacity-50 animate-[downUnFade_0.3s_linear_forwards] z-[100]"
    >
      <div
        id="searchproductcon"
        className="flex justify-between border-b pb-1 md:px-3 px-1"
      >
        <SearchBar
          id="searchproductcon"
          placeHolder={header.searchProducts}
          classNames="h-[2.3rem]"
        />
        <CloseBtn setEvent={setIsSearch} />
      </div>
      <div
        id="searchproductcon"
        className="md:px-2 px-1 mt-1 w-full h-full overflow-y-auto"
      >
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
