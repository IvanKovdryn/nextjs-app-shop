import Home from "@/components/screens/home/Home";
import { ShopService } from "@/services/shop.service";

export default function HomePage({ products, categories }) {
  return <Home products={products} />;
}
export const getStaticProps = async () => {
  const products = await ShopService.getAll();
  return {
    props: { products },
    revalidate: 60,
  };
};
