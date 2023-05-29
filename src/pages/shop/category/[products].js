import Category from "@/components/screens/shop/Category";
import { ShopService } from "@/services/shop.service";

const CategoryPage = ({ products }) => {
  return <Category products={products} />;
};

export const getStaticPaths = async () => {
  try {
    const categories = ["electronics", "jewelery", "mens", "womens"];
    return {
      paths: categories.map((category) => ({
        params: { products: category },
      })),
      fallback: false,
    };
  } catch {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  const products = await ShopService.getCategory(params?.products);
  return {
    props: { products },
    revalidate: 60,
  };
};

export default CategoryPage;
