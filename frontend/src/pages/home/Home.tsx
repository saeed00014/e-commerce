import { productData } from "../../assets/data";
import Hoc from "../../components/hoc";
import AllProducts from "./allProducts";
import Categories from "./categories";
import Landing from "./landing";
import ProductScroll from "./productScroll";

const Home = () => {
  return (
    <Hoc>
      <div className="flex flex-col p-2 w-full max-w-[1400px] h-full gap-2 overflow-y-auto no-scrollbar">
        <Landing />
        <ProductScroll />
        <Categories />
        <div className="flex flex-col p-4 w-full h-fit bg-ship rounded-[1rem]">
          <div className="flex justify-start w-full text-[1.3rem]">
            {productData.allProducts}
          </div>
          <AllProducts />
        </div>
      </div>
    </Hoc>
  );
};

export default Home;
