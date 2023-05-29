import Shop from "@/components/screens/shop/Shop";
import { ShopService } from "@/services/shop.service";

const ShopPage = ({ products }) => {
  return <Shop products={products} />;
};

export const getStaticProps = async () => {
  try {
    const products = await ShopService.getAll();
    return {
      props: { products },
      revalidate: 60,
    };
  } catch {
    return {
      props: null,
    };
  }
};

export default ShopPage;
