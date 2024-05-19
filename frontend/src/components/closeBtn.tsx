import { IoIosClose } from "react-icons/io";

type Props = {
  setEvent: React.Dispatch<React.SetStateAction<boolean>>;
};

const CloseBtn = ({ setEvent }: Props) => {
  return (
    <div
      onClick={() => setEvent(prev => !prev)}
      className="text-3xl rounded-full hover:bg-lightMoon p-1 cursor-pointer"
    >
      <IoIosClose />
    </div>
  );
};

export default CloseBtn;
