import { useState } from "react";
import { MdDone } from "react-icons/md";

type Props = {
  colorSet: string[];
  color: string;
};

const ColorPicker = ({ colorSet, color }: Props) => {
  const [isPickingColor, setIsPickingColor] = useState(false);
  const colorsett = ["#32a852", "#32a4a8", "#a89a32"];
  const colorChoosed = "#32a4a8";

  const handleColorPicker = (color1: string) => {
    setIsPickingColor((prev) => !prev);
  };

  return (
    <div className="flex gap-2">
      {colorsett.map((color) => {
        return (
          <span
            style={{ background: color }}
            onClick={() => handleColorPicker(color)}
            className={`flex justify-center items-center w-[2rem] h-[2rem] rounded-full cursor-pointer ${
              color === colorChoosed && "border-2 border-darkwater"
            }`}
          >
            {color === colorChoosed && <MdDone className="text-[1.3rem]" />}
          </span>
        );
      })}
    </div>
  );
};

export default ColorPicker;
