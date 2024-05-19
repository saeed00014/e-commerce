import { productData } from "../../assets/data";

const QuantityBtn = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="">{productData.quantity} : </span>
      <div className="relative flex justify-center items-center w-[4rem] h-[1.6rem] border">
        <span className="pr-1 min-w-[50%] cursor-pointer">-</span>
        <span className="absolute">1</span>
        <span className="flex justify-end pl-1 min-w-[50%] cursor-pointer">
          +
        </span>
      </div>
    </div>
  );
};

export default QuantityBtn;
