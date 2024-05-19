import { cardData, productData } from "../../assets/data";
import ColorPicker from "./colorPicker";
import QuantityBtn from "./quantityBtn";
import SizePicker from "./sizePicker";

type Props = {
  Product: any;
};

const ProductCard = ({ Product }: Props) => {
  return (
    <div className="flex items-center py-2 px-2 w-full h-fit max-w-[500px] gap-2 border">
      <div className="flex w-full gap-2">
        <img
          alt={""}
          src={"/testcata.png"}
          className="h-[8rem] w-[8rem] object-contain"
        />
        <div className="flex flex-col py-1 w-full gap-3">
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
