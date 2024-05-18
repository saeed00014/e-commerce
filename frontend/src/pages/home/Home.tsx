import Hoc from "../../components/hoc";
import ProductScroll from "./productScroll";

const Home = () => {
  return (
    <Hoc>
      <div>
        {/* <CategoryScroll /> */}
        <ProductScroll />
      </div>
    </Hoc>
  );
};

export default Home;
