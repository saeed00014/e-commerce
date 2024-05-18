import { product } from "../../assets/data";

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
    <div className="flex flex-col items-center justify-start px-3 py-2 pb-3 h-full w-[210px] min-w-[210px] gap-1 cursor-pointer">
      <img src="/testcata.png" className="flex h-full" />
      <div className="flex justify-between items-center w-full h-fit">
        <span className="px-2 pt-[.4rem] pb-[.2rem] text-[.9rem] rounded-full bg-lightBlood text-ship">
          10%
        </span>
        <div className="flex gap-1">
          <span className="text-[.8rem]">{product.price}</span>
          <span>125</span>
        </div>
      </div>
      <span className="line-clamp-1 pb-1">{product.description}</span>
    </div>
  );
};

export { CategoryHalfCircle, ProductCard };
