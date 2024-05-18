import { productData } from "../../assets/data"
import { ProductCard } from "../../components/ui/items"
import { ItemsScroller } from "../../components/ui/itemsContainer"

const ProductScroll = () => {
  return (
    <section className="flex flex-col px-4 pt-4 pb-2 bg-ship mt-2">
      <div className="text-[1.3rem]">{productData.title}</div>
      <ItemsScroller id="productScroller" classNames="h-[15rem]">
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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ItemsScroller>
    </section>
  )
}

export default ProductScroll