import { productData } from "../../assets/data";

const CardTotal = () => {
  return (
    <>
      <div className="sticky top-0 md:flex hidden flex-col justify-between lg:p-4 p-2 w-full h-fit lg:max-w-[300px] max-w-[250px] border rounded-[.8rem] gap-4 bg-ship">
        <div className="flex justify-between">
          <span> مجوع تعداد محصولات </span>
          <span>125</span>
        </div>
        <div className="flex justify-between">
          <span> قیمت کل </span>
          <div className="flex items-start">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>12</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span> قیمت کل پس از مالیات </span>
          <div className="flex items-start">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>12</span>
          </div>
        </div>
        <span className="flex justify-center py-2 w-full rounded-[.5rem] bg-blood text-ship cursor-pointer hover:brightness-110 duration-500">
          {" "}
          تسویه حساب{" "}
        </span>
      </div>
      <div className="md:hidden flex fixed bottom-[40px] right-0 left-0 h-[45px] items-center justify-between px-2 bg-ship border-t">
        <div className="flex gap-1">
          <span> قیمت کل </span>
          <div className="flex items-start">
            <span className="text-[.7rem]">{productData.price}</span>
            <span>12</span>
          </div>
        </div>
        <span className="px-3 py-1 rounded-[.5rem] bg-blood text-ship cursor-pointer hover:brightness-110 duration-500">
          {" "}
          تسویه حساب{" "}
        </span>
      </div>
    </>
  );
};

export default CardTotal;
