import { productData } from "../../assets/data";
import Hoc from "../../components/hoc";
import ColorPicker from "../card/colorPicker";
import QuantityBtn from "../card/quantityBtn";
import SizePicker from "../card/sizePicker";

const Product = () => {
  return (
    <Hoc>
      <section className="flex justify-center p-2 w-full max-w-[1400px] h-full bg-ship">
        <div className="flex items-center py-2 px-2 w-full max-w-[800px] h-fit gap-2 bg-ship">
          <div className="flex lg:flex-row flex-col items-center w-full gap-2">
            <img
              alt={""}
              src={"/testcata.png"}
              className="h-[20rem] w-[20rem] object-contain"
            />
            <div className="flex flex-col justify-center py-1 w-full h-full gap-4">
              <span className="line-clamp-2">{productData.description}</span>
              <ColorPicker color="" colorSet={[""]} />
              <div className="flex gap-8">
                <QuantityBtn />
                <SizePicker />
              </div>
              <div className="flex gap-1">
                <span>{productData.total} : </span>
                <span className="text-[.7rem]">{productData.price}</span>
                <span>125</span>
              </div>
              <span className="group relative flex items-center justify-center px-5 h-[2.5rem] w-fit rounded-[.5rem] bg-blood text-ship cursor-pointer hover:brightness-110 duration-500">
                افزودن به سبد خرید
              </span>
            </div>
          </div>
        </div>
      </section>
    </Hoc>
  );
};

export default Product;
