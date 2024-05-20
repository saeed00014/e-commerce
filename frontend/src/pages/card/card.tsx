import Hoc from "../../components/hoc";
import CardItems from "./cardItems";
import CardTotal from "./cardTotal";

const Card = () => {
  return (
    <Hoc>
      <section className="flex md:p-2 md:pb-2 p-1 pb-[45px] w-full max-w-[1400px] h-full ">
        <div className="flex w-full h-full overflow-y-auto no-scrollbar gap-1"> 
          <CardItems />
          <CardTotal />
        </div>
      </section>
    </Hoc>
  );
};

export default Card;
