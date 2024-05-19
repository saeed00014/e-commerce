import Hoc from "../../components/hoc";
import AllProducts from "./allProducts";
import Header from "./header";

const Products = () => {
  return (
    <Hoc>
      <section className="flex flex-col items-center w-full h-full">
        <Header />
        <AllProducts />
      </section>
    </Hoc>
  );
};

export default Products;
