import cn from "../../utils/merger";

type Label = {
  id: string;
  text: string;
  classNames?: string;
};

const Label = ({ id, text, classNames }: Label) => {
  return (
    <label htmlFor={id} className={cn("", classNames)}>
      {text}
    </label>
  );
};

export default Label;
