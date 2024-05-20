import { categories } from "../../assets/data";
import { ProductCard } from "../../components/ui/items";

const ProductsCategory = () => {
  return (
    <div className="flex flex-col items-center p-2 h-full max-w-fit gap-4">
      <div className="flex flex-col items-center w-fit gap-2">
        <span className="flex justify-start w-full text-[1.6rem] pr-2">
          {categories.mobile}
        </span>
        <div className="md:grid flex flex-wrap xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center w-fit gap-2 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="flex flex-col items-center w-fit gap-2">
        <span className="flex justify-start w-full text-[1.6rem] pr-2">
          {categories.laptop}
        </span>
        <div className="md:grid flex flex-wrap xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center w-fit gap-2 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
      <div className="flex flex-col items-center w-fit gap-2">
        <span className="flex justify-start w-full text-[1.6rem] pr-2">
          {categories.pc}
        </span>
        <div className="md:grid flex flex-wrap xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center w-fit gap-2 ">
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
        </div>
      </div>
      <div className="flex flex-col items-center w-fit gap-2">
        <span className="flex justify-start w-full text-[1.6rem] pr-2">
          {categories.headset}
        </span>
        <div className="md:grid flex flex-wrap xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center w-fit gap-2 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ProductsCategory;
