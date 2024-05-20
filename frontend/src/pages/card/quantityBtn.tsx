import { productData } from "../../assets/data";

const QuantityBtn = () => {
  return (
    <div className="flex items-center h-[2rem] gap-1">
      <span className="">{productData.quantity} : </span>
      <span className="flex items-center justify-center w-[2rem] h-[2rem] border cursor-pointer bg-ship hover:brightness-90">
        -
      </span>
      <span>1</span>
      <span className="flex items-center justify-center w-[2rem] h-[2rem] border cursor-pointer bg-ship hover:brightness-90">
        +
      </span>
    </div>
  );
};

export default QuantityBtn;
