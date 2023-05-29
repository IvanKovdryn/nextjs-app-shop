import Category from "@/components/screens/shop/Category";
import { ShopService } from "@/services/shop.service";

const CategoryPage = ({ products }) => {
  return <Category products={products} />;
};

export const getStaticPaths = async () => {
  const categories = await ShopService.getCategories();
  return {
    paths: categories.map((products) => ({
      params: { products: products },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const products = await ShopService.getCategory(params?.products);
  return {
    props: { products },
    revalidate: 60,
  };
};

export default CategoryPage;
