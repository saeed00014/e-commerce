import { Link } from "react-router-dom";
import { categories, productData } from "../../assets/data";

const Landing = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center md:p-6 p-2 w-full rounded-[1rem] md:min-h-[20rem] md:max-h-[20rem] md:gap-4 gap-2 bg-ship">
      <div className="flex justify-center w-full">
        <img
          alt={""}
          src={"/testcata.png"}
          className="h-full max-h-[12rem] w-full max-w-[12rem] object-contain"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full md:gap-4 gap-2">
        <span className="flex justify-start w-full text-[1.2rem]">
          {" "}
          جدیدترین محصولات را با بهترین قیمت تهیه کنید{" "}
        </span>
        <div className="flex flex-wrap justify-start w-full gap-2">
          <Link
            to="/products?category="
            className="flex items-center justify-center px-3 h-[2.5rem] rounded-[.5rem] bg-blood text-ship cursor-pointer hover:brightness-110 duration-500"
          >
            {categories.mobile}
          </Link>
          <Link
            to="/products?category="
            className="flex items-center justify-center px-3 h-[2.5rem] rounded-[.5rem] bg-sun text-ship cursor-pointer hover:brightness-110 duration-500"
          >
            {categories.laptop}
          </Link>
          <Link
            to="/products?category="
            className="flex items-center justify-center px-3 h-[2.5rem] rounded-[.5rem] bg-darkgrass text-ship cursor-pointer hover:brightness-110 duration-500"
          >
            {categories.pc}
          </Link>
          <Link
            to="/products?category="
            className="flex items-center justify-center px-3 h-[2.5rem] rounded-[.5rem] bg-darkwater text-ship cursor-pointer hover:brightness-110 duration-500"
          >
            {categories.headset}
          </Link>
          <Link
            to="/products"
            className="flex items-center justify-center px-3 h-[2.5rem] rounded-[.5rem] text-dark bg-ship hover:brightness-90 border-2 cursor-pointer duration-500"
          >
            {productData.allProducts}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
