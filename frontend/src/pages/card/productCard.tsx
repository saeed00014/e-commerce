import { cardData, productData } from "../../assets/data";
import ColorPicker from "./colorPicker";
import QuantityBtn from "./quantityBtn";
import SizePicker from "./sizePicker";

type Props = {
  Product: any;
};

const ProductCard = ({ Product }: Props) => {
  return (
    <div className="flex items-center py-2 px-2 w-full h-fit max-w-[500px] border rounded-[.8rem] bg-ship">
      <div className="flex md:flex-row flex-col w-full md:gap-2 gap-1">
        <div className="flex justify-center md:w-fit h-fit">
          <img
            alt={""}
            src={"/testcata.png"}
            className="h-[8rem] min-h-[8rem] w-[8rem] min-w-[8rem] max-h-[8rem]
            max-w-[8rem] object-contain"
          />
        </div>
        <div className="flex flex-col md:py-1 w-full md:gap-3 gap-2">
          <span className="line-clamp-2">{productData.description}</span>
          <ColorPicker color="" colorSet={[""]} />
          <div className="flex gap-5">
            <QuantityBtn />
            <SizePicker />
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-1">
              <span>{productData.total} : </span>
              <span className="text-[.7rem]">{productData.price}</span>
              <span>125</span>
            </div>
            <span className="flex justify-center items-center w-[3rem] rounded-full cursor-pointer bg-ship hover:brightness-90 duration-500">
              {cardData.remove}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
