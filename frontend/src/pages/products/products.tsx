import Hoc from "../../components/hoc";
import Header from "./header";
import ProductsCategory from "./productsCategory";

const Products = () => {
  return (
    <Hoc>
      <section className="flex flex-col items-center w-full h-full overflow-y-auto no-scrollbar">
        <Header />
        <ProductsCategory />
      </section>
    </Hoc>
  );
};

export default Products;
