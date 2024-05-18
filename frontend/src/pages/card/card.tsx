import Hoc from "../../components/hoc";
import CardItems from "./cardItems";
import CardTotal from "./cardTotal";

const Card = () => {
  return (
    <Hoc>
      <section className="flex px-2 w-full h-full gap-1 bg-ship overflow-y-scroll">
        <CardItems />
        <CardTotal />
      </section>
    </Hoc>
  );
};

export default Card;
