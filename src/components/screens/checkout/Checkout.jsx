import Layout from "@/components/layout/Layout";
import ScreensNav from "../nav/ScreensNav";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { setDataCheckout } from "@/store/slices/dataSlice";
import { addProducts } from "@/store/slices/productsSlice";
import { clearCart } from "@/store/slices/cartSlice";
import axios from "axios";

export const Checkout = () => {
  const cart = useSelector((state) => state.cart.items);
  const sum = useSelector((state) => state.cart.totalPrice);
  const dataInStore = useSelector((state) => state.data.dataCheckout);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length) {
      const dataFromForm = {
        buyer: {
          name: e.target.name.value,
          email: e.target.email.value,
          tel: e.target.tel.value,
        },
        recipient: {
          country: e.target.country.value,
          city: e.target.city.value,
          street: e.target.street.value,
          house: e.target.house.value,
          flat: e.target.flat.value,
          comments: e.target.comments.value,
        },
        products: cart,
      };

      try {
        const { data } = await axios({
          url: `${process.env.API_HOST}/form`,
          method: "POST",
          data: dataFromForm,
        });
        setSuccess(true);
        dispatch(setDataCheckout(data));
        dispatch(clearCart());
        console.log("result: ", ...data);
      } catch (error) {
        console.log("error: ", error);
      }

      document.querySelector("form").reset();
    }
  };

  return (
    <Layout title="Checkout" description="Shop checkout, Womazing">
      {!success ? (
        <>
          <div className="pt-[100px]">
            <div className="text-4xl mb-[25px] font-semibold">Checkout</div>
            <ScreensNav page="Checkout" />
          </div>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-10">
            <div className="flex relative flex-col gap-[15px]">
              <p className="text-xl font-semibold">Адрес покупця</p>
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="name"
                name="name"
                maxLength="20"
                minLength="3"
                placeholder="Name"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="email"
                id="email"
                name="email"
                maxLength="20"
                minLength="3"
                placeholder="E-mail"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="tel"
                id="tel"
                name="tel"
                maxLength="20"
                minLength="3"
                placeholder="Phone"
                required
              />
              <div className="text-xl font-semibold">Адрес отримувача</div>
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="country"
                name="country"
                maxLength="20"
                minLength="3"
                placeholder="Country"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="city"
                name="city"
                maxLength="20"
                minLength="3"
                placeholder="City"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="street"
                name="street"
                maxLength="20"
                minLength="3"
                placeholder="Street"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="house"
                name="house"
                maxLength="20"
                minLength="3"
                placeholder="House"
                required
              />
              <input
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="flat"
                name="flat"
                maxLength="20"
                minLength="3"
                placeholder="Flat"
                required
              />
              <textarea
                className="px-[20px] py-[7px] w-[75%] rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                placeholder="Comments"
                name="comments"
                id="comments"
                cols="30"
                rows="7"
              ></textarea>
            </div>
            <div>
              <div className="text-xl mb-4 font-semibold">Ваш заказ</div>
              <div className="flex flex-col gap-4">
                <div
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                  className="grid items-center gap-[50px]"
                >
                  <span className="font-semibold">Товар</span>
                  <span className="font-semibold">Кількість</span>
                  <span className="font-semibold">Size</span>
                  <span className="font-semibold">Всього</span>
                </div>
                {cart.length ? (
                  cart.map((item) => (
                    <div
                      key={item.id + item.size}
                      style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                      className="grid items-center gap-[50px]"
                    >
                      <span className="font-medium text-ellipsis overflow-hidden whitespace-nowrap">
                        {item.title}
                      </span>
                      <span>
                        {item.amount} <span className="text-sm">шт.</span>
                      </span>
                      <span>{item.size}</span>
                      <span className="font-medium">
                        {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "EUR",
                        }).format(item.amount * item.price)}
                      </span>
                    </div>
                  ))
                ) : (
                  <div>-</div>
                )}
                <div
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                  className="grid items-center gap-[50px]"
                >
                  <span className="font-semibold">Підсумок</span>
                  <span></span>
                  <span></span>
                  <span className="font-medium">
                    {sum &&
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(sum)}
                  </span>
                </div>
                <div
                  style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr" }}
                  className="grid items-center gap-[50px]"
                >
                  <span className="font-semibold text-lg">Всього</span>
                  <span></span>
                  <span></span>
                  <span className="font-semibold text-lg">
                    {sum &&
                      new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "EUR",
                      }).format(sum)}
                  </span>
                </div>
              </div>
              <div>
                <div className="font-semibold my-10 text-lg">
                  Способи оплати
                </div>
                <div className="flex items-center gap-4 mb-[15px]">
                  <span className="w-[20px] h-[20px] cursor-pointer rounded-md border-2 border-gray-500 flex items-center justify-center">
                    <span className="w-[12px] h-[12px] rounded-sm bg-gray-500"></span>
                  </span>
                  <span className="font-semibold">
                    Оплата готівкою <span className="font-medium">(only)</span>
                  </span>
                </div>
                <button className="mt-[10px] px-[20px] py-[7px] w-[50%] rounded-md bg-red-200 hover:bg-red-300 transition-all flex items-center justify-center">
                  Розмістити заказ
                </button>
              </div>
            </div>
          </form>
        </>
      ) : (
        <div>
          <div className="py-[100px]">
            <div className="text-4xl mb-[25px] font-semibold">
              Заказ отримано
            </div>
            <ScreensNav page="Заказ отримано" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div>
                <Image
                  src="/checkout/check.svg"
                  width={96}
                  height={96}
                  alt="img"
                />
              </div>
              <div>
                <p className="text-2xl font-semibold mb-4">
                  Заказ успішно оформлений
                </p>
                <span className="text-lg font-medium">
                  Ми зв'яжемося з вами найближчим часом
                </span>
              </div>
            </div>
            <Link
              href="/"
              className="mt-[10px] px-[30px] py-[18px] w-[25%] rounded-md bg-red-200 hover:bg-red-300 transition-all flex items-center justify-center"
            >
              Перейти на головну
            </Link>
          </div>
        </div>
      )}
    </Layout>
  );
};
export default Checkout;
