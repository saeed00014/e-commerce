import { productData } from "../../assets/data";

type Props = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityBtn = ({ quantity, setQuantity }: Props) => {
  const handleQuantity = (action: string) => {
    if (action === "+") {
      quantity < 10 && setQuantity((prev) => prev + 1);
      return;
    }
    quantity > 1 && setQuantity((prev) => prev - 1);
    return;
  };

  return (
    <div className="flex items-center h-[2rem] gap-1">
      <span className="">{productData.quantity} : </span>
      <span
        onClick={() => handleQuantity("-")}
        className="flex items-center justify-center w-[2rem] h-[2rem] border cursor-pointer bg-ship hover:brightness-90"
      >
        -
      </span>
      <span>{quantity}</span>
      <span
        onClick={() => handleQuantity("+")}
        className="flex items-center justify-center w-[2rem] h-[2rem] border cursor-pointer bg-ship hover:brightness-90"
      >
        +
      </span>
    </div>
  );
};

export default QuantityBtn;
