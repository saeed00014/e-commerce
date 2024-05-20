import { useDispatch } from "react-redux";
import { productData } from "../../assets/data";
import ColorPicker from "../card/colorPicker";
import QuantityBtn from "../card/quantityBtn";
import SizePicker from "../card/sizePicker";
import { addCard } from "../../store/productSlice";
import { useState } from "react";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const dispatch = useDispatch();

  const handleAddCard = () => {
    dispatch(addCard({}));
  };

  return (
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
            <QuantityBtn quantity={quantity} setQuantity={setQuantity} />
            <SizePicker />
          </div>
          <div className="flex gap-1">
            <span>{productData.total} : </span>
            <span className="text-[.7rem]">{productData.price}</span>
            <span>125</span>
          </div>
          <span
            onClick={handleAddCard}
            className="group relative flex items-center justify-center px-5 h-[2.5rem] w-fit rounded-[.5rem] bg-blood text-ship cursor-pointer hover:brightness-110 duration-500"
          >
            افزودن به سبد خرید
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
