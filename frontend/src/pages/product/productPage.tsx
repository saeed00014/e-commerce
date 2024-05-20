import Hoc from "../../components/hoc";
import Product from "./product";

const ProductPage = () => {
  return (
    <Hoc>
      <section className="flex justify-center p-2 w-full max-w-[1400px] h-full overflow-y-auto bg-ship">
        <Product />
      </section>
    </Hoc>
  );
};

export default ProductPage;
