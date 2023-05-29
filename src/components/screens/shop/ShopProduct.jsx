import Layout from "@/components/layout/Layout";
import ScreensNav from "../nav/ScreensNav";
import ProductItem from "@/components/ui/product/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cartSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const { default: Image } = require("next/image");

const ShopProduct = ({ product, products }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const sizes = ["S", "M", "L", "XL"];
  const colors = ["#927876", "#D5D5D5", "#FD9696", "#FDC796"];
  const [count, setCount] = useState("1");
  const [size, setSize] = useState("S");
  const clone = { ...product };
  clone.size = size;
  clone.amount = count;
  const router = useRouter();
  useEffect(() => {
    if (!cart.some((item) => item.id == clone.id && item.size === clone.size)) {
      setCount(1);
    } else if (
      cart.some((item) => item.id == clone.id && item.size === clone.size)
    ) {
      const item = cart.find(
        (item) => item.id === clone.id && item.size === clone.size && item
      );
      setCount(item.amount);
      setSize(item.size);
    }
  }, [router, size]);
  useEffect(() => {
    setSize("S");
  }, [router]);
  return (
    <Layout title={product.title} description={product.description}>
      <div className="pt-[100px]">
        <div className="text-3xl font-semibold mb-[25px]">{product.title}</div>
        <ScreensNav productPage={product.title} />
        <div className="grid mt-[75px] grid-cols-2 items-center gap-3">
          <div className="p-4 bg-white border-gray-200 border rounded-lg h-[315px] shadow-2xl flex items-center justify-center">
            <Image
              className="object-contain h-full w-auto max-w-[75%] mb-2 justify-self-center"
              src={product.image}
              alt={product.title}
              width="0"
              height="0"
              sizes="100vw"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-2 items-start justify-center pl-[50px]">
            <p className="text-2xl mb-[20px]">
              {new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR",
              }).format(product.price)}
            </p>
            <p>Виберіть розмір</p>
            <div
              onClick={(e) =>
                e.target.tagName === "BUTTON" &&
                (setSize(e.target.innerText), (clone.size = e.target.innerText))
              }
              className="flex gap-2 py-[10px]"
            >
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`${
                    clone.size === size ? "bg-red-300" : "bg-red-100"
                  } flex items-center justify-center w-[40px] h-[40px] rounded-md transition-all  hover:bg-red-300`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex items-center mt-[50px] relative gap-2">
              <input
                type="number"
                min="1"
                max="20"
                maxLength={2}
                value={count}
                className=" w-[70px] h-[40px] p-2 flex items-center justify-center outline-none rounded-md border border-red-300 bg-gray-50"
                onChange={(e) => {
                  if (e.target.value.length > 2) {
                    e.target.value = e.target.value.slice(0, 2);
                  }
                  if (+e.target.value > 20) {
                    e.target.value = e.target.value.slice(0, 1);
                  }
                  setCount(e.target.value);
                }}
              />
              <span className="absolute top-[-25px] left-[8px] text-gray-500">
                max 20
              </span>
              {cart.some(
                (item) => item.id == clone.id && item.size === clone.size
              ) ? (
                <button
                  onClick={() => {
                    dispatch(removeFromCart(clone));
                  }}
                  className="flex items-center justify-center px-6 py-2 rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
                >
                  <span>Delete from cart</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (count > 0 && count < 21) {
                      dispatch(addToCart(clone));
                    }
                  }}
                  className="flex items-center justify-center px-6 py-2 rounded-md bg-red-400 hover:bg-red-500 text-white font-medium transition-all"
                >
                  <span>Додати в корзину</span>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-[125px] text-3xl font-semibold">Подібні товари</div>
        <div className="py-[75px] grid grid-cols-3 gap-4">
          {products &&
            products.map((item) =>
              item.category === product.category && item.id !== product.id ? (
                <ProductItem key={item.id} product={item} />
              ) : (
                ""
              )
            )}
        </div>
      </div>
    </Layout>
  );
};
export default ShopProduct;
