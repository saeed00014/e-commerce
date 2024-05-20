import { header } from "../../assets/data";
import { CategoryHalfCircle } from "../../components/ui/items";

const Categories = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 w-full h-fit rounded-[1rem] bg-ship">
      <div className="flex justify-start w-full text-[1.3rem]">
        {header.category}
      </div>
      <div className="md:flex grid grid-cols-2 justify-center max-w-[600px] md:gap-10 gap-4">
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
      </div>
    </div>
  );
};

export default Categories;
