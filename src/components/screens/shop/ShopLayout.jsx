import Layout from "@/components/layout/Layout";
import ScreensNav from "../nav/ScreensNav";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const ShopLayout = ({ children, products }) => {
  const categories = useSelector((state) => state.cart.categories);
  const { query, asPath } = useRouter();

  return (
    <Layout title="Shop" description="Shop catalog, Womazing">
      <div className="pt-[100px]">
        {products ? (
          <>
            <div className="text-4xl mb-[25px] font-semibold">Shop</div>
            <ScreensNav page="Shop" />
            <div className="grid grid-cols-5 my-[75px] items-center gap-2">
              <>
                <Link
                  href={`/shop`}
                  className={`${
                    asPath === "/shop" && "bg-red-300"
                  } bg-red-100 py-3 text-center rounded-md transition-all hover:bg-red-300`}
                >
                  All
                </Link>
                {categories &&
                  categories.map((category) => (
                    <Link
                      href={`/shop/category/${category}`}
                      key={category}
                      className={`${
                        query.products === category && "bg-red-300"
                      } bg-red-100 py-3 text-center rounded-md transition-all hover:bg-red-300`}
                    >
                      {category}
                    </Link>
                  ))}
              </>
            </div>
            <div className="text-gray-400">
              Показано: {products.length} з 20 товарів
            </div>
            {children}
            <div className="text-gray-400">
              Показано: {products.length} з 20 товарів
            </div>
          </>
        ) : (
          <div>Products not found</div>
        )}
      </div>
    </Layout>
  );
};
export default ShopLayout;
