import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

type Props = {
  colorSet: string[];
  color: string;
};

const ColorPicker = ({ colorSet, color }: Props) => {
  const [isPickingColor, setIsPickingColor] = useState(false);
  const colorsett = ["#32a852", "#32a4a8", "#a89a32"];
  const colorChoosed = "red";

  const handleColorPicker = (color1: string) => {
    setIsPickingColor((prev) => !prev);
  };

  return (
    <div className="flex gap-2">
      {isPickingColor ? (
        colorsett.map((color) => {
          return (
            <span
              style={{ background: color }}
              onClick={() => handleColorPicker(color)}
              className={`flex w-[1.6rem] h-[1.6rem] rounded-full cursor-pointer`}
            ></span>
          );
        })
      ) : (
        <div
          onClick={() => handleColorPicker(colorChoosed)}
          className="flex items-center cursor-pointer"
        >
          <span
            style={{ background: colorChoosed }}
            className={`flex w-[1.6rem] h-[1.6rem] rounded-full`}
          ></span>
          <IoIosArrowBack />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
