import { ShopService } from "@/services/shop.service";
import ShopProduct from "@/components/screens/shop/ShopProduct";

const Product = ({ product, products }) => {
  return <ShopProduct product={product} products={products} />;
};

export const getStaticPaths = async () => {
  try {
    const products = await ShopService.getAll();
    return {
      paths: products.map((product) => ({
        params: { id: product.id.toString() },
      })),
      fallback: "blocking",
    };
  } catch {
    return {
      paths: null,
    };
  }
};
export const getStaticProps = async ({ params }) => {
  try {
    const products = await ShopService.getAll();
    const product = await ShopService.getById(String(params?.id));
    return {
      props: { product, products },
      revalidate: 60,
    };
  } catch {
    return {
      props: null,
    };
  }
};

export default Product;
