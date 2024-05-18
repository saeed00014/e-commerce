import cn from "../../utils/merger";

type Select = {
  initialValue?: string;
  options: string[];
  classNames?: string;
};

const Select = ({ initialValue, options, classNames }: Select) => {
  return (
    <select className={cn("w-[4rem] border", classNames)}>
      <option value={initialValue}>{initialValue}</option>
      {options?.map((option) => {
        return <option value={option}>{option}</option>;
      })}
    </select>
  );
};

export { Select };
