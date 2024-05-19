import { productData } from "../../assets/data";

const CardTotal = () => {
  return (
    <div className="flex flex-col items-center w-full h-fit">
      <div className="flex flex-col justify-between w-full max-w-[300px]">
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
        <span className="group relative flex items-center justify-center mt-2 w-full h-[3rem] rounded-full bg-blood text-ship cursor-pointer hover:brightness-150 duration-500">
          {" "}
          تسفیه حساب{" "}
        </span>
      </div>
    </div>
  );
};

export default CardTotal;
