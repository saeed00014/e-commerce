import { categories1, header, productData } from "../../assets/data";
import SearchBar from "../../components/searchBar";
import { CheckBox, Select } from "../../components/ui/inputs";
import Label from "../../components/ui/label";

const Header = () => {
  return (
    <div className="sticky top-0 flex justify-center px-2 py-1 w-full bg-ship border-b z-50">
      <div className="flex flex-wrap justify-between items-center md:px-2 w-full max-w-[1400px] gap-1">
        <div className="flex w-fit md:gap-3 gap-1">
          <SearchBar placeHolder={header.searchProducts} />
          <button className="md:px-4 px-3 py-[.4rem] bg-darkwater hover:brightness-110 text-ship rounded-full">
            {header.search}
          </button>
        </div>
        <div className="flex items-center justify-start w-fit gap-3">
          <div className="flex items-center gap-1">
            <Label id="discountOnlyCheck" text={header.onlyDisCounted} />
            <CheckBox id="discountOnlyCheck" />
          </div>
          <Select
            options={categories1}
            initialValue={productData.groupBy}
            classNames="md:w-[8rem] w-[7rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
