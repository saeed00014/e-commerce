import { productData } from "../../assets/data";

const CardTotal = () => {
  return (
    <div className="flex flex-col justify-between w-full max-w-[300px] h-fit gap-3">
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between gap-1 border-b py-2">
          <span> مجوع تعداد محصولات </span>
          <span>125</span>
        </div>
        <div className="flex justify-between gap-1 border-b py-2">
          <span> قیمت کل </span>
          <div className="flex items-start">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>12</span>
          </div>
        </div>
        <div className="flex justify-between gap-1 border-b py-2">
          <span> قیمت کل پس از مالیات </span>
          <div className="flex items-start">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>12</span>
          </div>
        </div>
      </div>
      <button className="flex items-center justify-center w-full h-[3rem] rounded-full bg-lightBlood text-ship">
        {" "}
        تسفیه حساب{" "}
      </button>
    </div>
  );
};

export default CardTotal;
