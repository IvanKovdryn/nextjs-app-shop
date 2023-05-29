import ProductItem from "@/components/ui/product/ProductItem";
import ShopLayout from "./ShopLayout";

const Shop = ({ products }) => {
  return (
    <ShopLayout products={products}>
      <div className="py-[75px] grid grid-cols-3 gap-4">
        {products.length ? (
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <div>Products not found!</div>
        )}
      </div>
    </ShopLayout>
  );
};
export default Shop;
