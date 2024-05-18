import { CategoryHalfCircle } from "../../components/ui/items";
import { ItemsScroller } from "../../components/ui/itemsContainer";

const CategoryScroll = () => {
  return (
    <section className="flex flex-col px-4 pt-4 pb-2 bg-ship mt-2">
      <div className="text-[1.3rem]">  </div>
      <ItemsScroller id="categoryScroller1">
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
        <CategoryHalfCircle />
      </ItemsScroller>
    </section>
  );
};

export default CategoryScroll;
