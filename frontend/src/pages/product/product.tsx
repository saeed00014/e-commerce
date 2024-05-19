import { productData } from "../../assets/data";
import Hoc from "../../components/hoc";
import ColorPicker from "../card/colorPicker";
import QuantityBtn from "../card/quantityBtn";
import SizePicker from "../card/sizePicker";

const Product = () => {
  return (
    <Hoc>
      <section className="flex justify-between p-2 w-full h-full bg-ship">
        <div className="flex items-center h-fit">
          <div className="flex items-center py-2 px-2 w-full max-w-[700px] h-fit gap-2 bg-ship">
            <div className="flex items-center w-full gap-2">
              <img
                alt={""}
                src={"/testcata.png"}
                className="h-[14rem] w-[14rem] object-contain"
              />
              <div className="flex flex-col justify-center py-1 w-full h-full gap-3">
                <span className="line-clamp-2">{productData.description}</span>
                <ColorPicker color="" colorSet={[""]} />
                <div className="flex gap-5">
                  <QuantityBtn />
                  <SizePicker />
                </div>
                <div className="flex justify-between w-full">
                  <div className="flex gap-1">
                    <span>{productData.total} : </span>
                    <span className="text-[.7rem]">{productData.price}</span>
                    <span>125</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sticky top-[6rem] flex flex-col justify-between w-[300px] h-fit p-3 gap-1 border">
            <div className="flex justify-between gap-1 py-2">
              <span> قیمت کل </span>
              <div className="flex items-start">
                <span className="text-[.7rem]">{productData.price}</span>
                <span>12</span>
              </div>
            </div>
            <span className="group relative flex items-center justify-center mt-2 w-full h-[2rem]  bg-blood text-ship cursor-pointer hover:brightness-150 duration-500">
              افزودن به سبد خرید
            </span>
          </div>
        </div>
      </section>
    </Hoc>
  );
};

export default Product;
