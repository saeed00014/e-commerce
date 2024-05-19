import Hoc from "../../components/hoc";
import ProductScroll from "./productScroll";

const Home = () => {
  return (
    <Hoc>
      <div className="bg-lightMoon">
        {/* <CategoryScroll /> */}
        <ProductScroll />
      </div>
    </Hoc>
  );
};

export default Home;
