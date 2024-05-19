import cn from "../../utils/merger";

type Props = {
  text: string;
  classNames?: string;
};

const Button = ({ text, classNames }: Props) => {
  return <button className={cn("px-2", classNames)}>{text}</button>;
};

export default Button;
