import { productData } from "../../assets/data";
import { Select } from "../../components/ui/inputs";

const SizePicker = () => {
  return (
    <div className="flex gap-1">
      <span>{productData.size} :</span>
      <Select options={[""]} />
    </div>
  );
};

export default SizePicker;
