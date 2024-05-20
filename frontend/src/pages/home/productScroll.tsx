import { productData } from "../../assets/data";
import { ProductCard } from "../../components/ui/items";
import { ItemsScroller } from "../../components/ui/itemsContainer";

const ProductScroll = () => {
  return (
    <section className="flex flex-col md:px-3 px-2 pt-4 pb-2 h-fit w-full bg-ship rounded-[1rem]">
      <div className="text-[1.3rem] px-2">{productData.title}</div>
      <ItemsScroller id="productScroller" classNames="h-[15rem]">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ItemsScroller>
    </section>
  );
};

export default ProductScroll;
