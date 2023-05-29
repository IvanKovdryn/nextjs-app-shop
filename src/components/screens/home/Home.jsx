import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { Slider } from "./slider/Slider";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "@/components/ui/product/ProductItem";
import Link from "next/link";

export const Home = ({ products }) => {
  return (
    <Layout title="Home" description="Shop, Womazing">
      <div className="grid items-center grid-cols-2 min-h-[550px]">
        <Slider />
        <div className="flex items-center h-full relative justify-center pt-[125px] px-[10px]">
          <div className="absolute w-[500%] h-full top-0 left-0 bg-[#F1EADC]"></div>
          <div className="w-[50%] relative pb-10">
            <Image
              className="w-[100%] rounded-lg"
              src="/main/headerImg.png"
              width={410}
              height={646}
              alt="img"
              priority="true"
            />
            <Image
              className="absolute w-[45%] top-16 right-[-22%] rounded-lg"
              src="/main/headerImgSmall2.png"
              width={197}
              height={197}
              alt="img"
            />
            <Image
              className="absolute w-[45%] left-[-22%] bottom-0 rounded-lg"
              src="/main/headerImgSmall.png"
              width={190}
              height={318}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-3xl">New Collection</div>
        <div className="py-[75px] grid grid-cols-3 gap-4">
          {products.length ? (
            products.map(
              (product) =>
                product.id < 4 && (
                  <ProductItem key={product.id} product={product} />
                )
            )
          ) : (
            <div>Products not found!</div>
          )}
        </div>
        <div className="flex justify-center">
          <Link
            href="/shop"
            className="flex items-center justify-center px-10 py-3 w-fit rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
          >
            Go to Shop
          </Link>
        </div>
      </div>
      <div>
        <div className="text-3xl">What important for us</div>
        <div className="pt-[75px] grid grid-cols-3 gap-6">
          <div>
            <Image
              className=""
              src="/main/important1.svg"
              width={60}
              height={60}
              alt="img"
            />
            <p className="py-[25px] text-lg font-semibold">Quality</p>
            <span className="font-medium">
              Наши профессионалы работают на лучшем оборудовании для пошива
              одежды беспрецедентного качества
            </span>
          </div>
          <div>
            <Image
              className=""
              src="/main/important3.svg"
              width={60}
              height={60}
              alt="img"
            />
            <p className="py-[25px] text-lg font-semibold">Скорость</p>
            <span className="font-medium">
              Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти
              единиц продукции в наших собственных цехах
            </span>
          </div>
          <div>
            <Image
              className=""
              src="/main/important2.svg"
              width={60}
              height={60}
              alt="img"
            />
            <p className="py-[25px] text-lg font-semibold">Ответственность</p>
            <span className="font-medium">
              Мы заботимся о людях и планете. Безотходное производство и
              комфортные условия труда - все это Womazing
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
