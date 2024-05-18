import { productData } from "../../assets/data";

const CategoryHalfCircle = () => {
  const title = "کفش";
  return (
    <div className="relative flex flex-col items-center justify-center w-[12rem] min-w-[12rem] h-[12rem] min-h-[12rem] rounded-full cursor-pointer">
      <img
        alt={title}
        src={"/testcata.png"}
        className="h-full w-fit object-contain"
      />
      <span className="absolute left-0 right-0 bottom-0 flex justify-center items-center py-[.4rem] h-fit bg-ship">
        {title}
      </span>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="relative flex flex-col items-center justify-end px-3 py-1 h-full w-[210px] min-w-[210px] max-w-[210px] cursor-pointer">
      <div className="absolute top-0 left-0 right-0 bottom-[68px] flex justify-center items-center">
        <img
          src="/testcata.png"
          className="object-cover max-h-full max-w-full"
        />
      </div>
      <div className="flex flex-col w-full h-[56px]">
        <div className="flex justify-between w-full">
          <span className="px-2 pt-[.3rem] pb-[.1rem] text-[.9rem] rounded-full bg-lightBlood text-ship">
            10%
          </span>
          <div className="flex gap-1">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>125</span>
          </div>
        </div>
        <span className="line-clamp-1 pb-1">{productData.description}</span>
      </div>
    </div>
  );
};

type SearchedProduct = {
  product: any;
};

const SearchedProduct = ({ product }: SearchedProduct) => {
  return (
    <div className="flex items-center w-full h-[4rem] gap-2 cursor-pointer">
      <img
        alt={""}
        src={"/testcata.png"}
        className="h-full object-contain"
      />
      <span className="line-clamp-1">{productData.description}</span>
    </div>
  );
};

export { CategoryHalfCircle, ProductCard, SearchedProduct };
