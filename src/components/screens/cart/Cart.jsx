import Layout from "@/components/layout/Layout";
import ScreensNav from "@/components/screens/nav/ScreensNav";
import {
  addToCart,
  changeAmount,
  removeFromCart,
} from "@/store/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.items);
  const sum = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();
  const [count, setCount] = useState([...cart]);
  const redirect = () => {
    cart.length && router.push("/checkout");
  };
  return (
    <Layout title="Cart">
      <div className="pt-[100px] pb-[75px]">
        <div className="text-3xl font-semibold mb-[25px]">Cart</div>
        <ScreensNav page="Cart" />
        {cart.length === 0 ? (
          <h1 className="pt-[75px]">Your Cart is Empty!</h1>
        ) : (
          <>
            <div className="pb-[75px]">
              <div
                style={{
                  gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 0.3fr",
                }}
                className="grid gap-[50px] pt-[75px] py-[10px] border-b-1 border-gray-200"
              >
                <span>Товар</span>
                <span>Ціна</span>
                <span>Кількість</span>
                <span>Size</span>
                <span>Всього</span>
              </div>
              {cart.map((item) => (
                <div
                  key={item.id + item.size}
                  style={{
                    borderTop: "1px solid rgb(0 0 0 / 15%)",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr 0.3fr",
                  }}
                  className="grid items-center gap-[50px] h-[175px] pt-[25px] pb-[25px] border-b-1 border-gray-200"
                >
                  <div
                    style={{ gridTemplateColumns: "110px 1fr" }}
                    className="grid items-center gap-6"
                  >
                    <Link href={`/shop/${item.id}`}>
                      <Image
                        style={{ boxShadow: "0 0 10px 10px #fff" }}
                        className="h-[125px] bg-white w-auto object-contain justify-self-center"
                        src={item.image}
                        alt={item.title}
                        width={100}
                        height={125}
                        priority={true}
                      />
                    </Link>
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.title}
                    </p>
                  </div>
                  <span>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price)}
                  </span>
                  <span>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      maxLength={2}
                      value={
                        cart.find(
                          (i) => i.id === item.id && i.size === item.size
                        ).amount
                      }
                      className="w-[70px] h-[40px] p-2 flex items-center justify-center outline-none rounded-md border border-red-200 bg-gray-50"
                      onChange={(e) => {
                        if (e.target.value.length > 2) {
                          e.target.value = e.target.value.slice(0, 2);
                        }
                        if (+e.target.value > 20) {
                          e.target.value = e.target.value.slice(0, 1);
                        }
                        let copy = {
                          ...cart.find(
                            (i) => i.id === item.id && i.size === item.size
                          ),
                        };
                        copy.amount = e.target.value;
                        setCount(
                          count.splice(
                            count.findIndex(
                              (i) => i.id === item.id && i.size === item.size
                            ),
                            1,
                            copy
                          )
                        );
                        dispatch(
                          changeAmount(
                            count.find(
                              (i) => i.id === item.id && i.size === item.size
                            )
                          )
                        );
                      }}
                    />
                  </span>
                  <span>{item.size}</span>
                  <span>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "EUR",
                    }).format(item.price * item.amount)}
                  </span>
                  <button
                    onClick={() => {
                      console.log(item);
                      dispatch(removeFromCart(item));
                    }}
                    className="w-[40px] h-[40px] rounded-full hover:bg-red-100 text-gray-600 flex items-center justify-center transition-all text-4xl rotate-45"
                  >
                    +
                  </button>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-end">
              <span className="flex items-center justify-center min-w-[100px] h-[40px] bg-blue-100">
                Разом:
              </span>
              <span className="flex items-center px-[10px] justify-center min-w-[100px] h-[40px]  bg-blue-100">
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "EUR",
                }).format(sum)}
              </span>
              <button
                onClick={redirect}
                className="py-2 px-6 bg-red-400 ml-2 text-white font-medium hover:bg-red-500 transition-all"
              >
                Оформити заказ
              </button>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
