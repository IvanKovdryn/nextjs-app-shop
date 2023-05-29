const { default: Link } = require("next/link");
import Image from "next/image";
import styles from "./Nav.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { ShopService } from "@/services/shop.service";

const Nav = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.items);
  const [call, setCall] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    call ? (body.style.overflowY = "hidden") : (body.style.overflowY = "auto");
  }, [call]);
  const navItems = ["home", "shop", "about", "contacts"];
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (call) {
      const dataFromForm = {
        name: e.target.name.value,
        email: e.target.email.value,
        tel: e.target.tel.value,
      };

      try {
        const data = await ShopService.sendForm(dataFromForm);
        setSuccess(true);
        console.log("result: ", ...data);
      } catch (error) {
        console.log("error: ", error);
      }

      setTimeout(() => {
        setCall(false);
      }, 5000);
      setTimeout(() => {
        document.querySelector("form").reset();
      }, 1000);
    }
  };
  return (
    <nav
      style={{ boxShadow: "0 0 20px -14px #000" }}
      className="fixed bg-[#ffe8e8] px-[10px] z-10 top-0 left-0 h-[55px] w-full"
    >
      <div className="max-w-[1200px] mx-auto relative grid grid-cols-3 items-center h-full">
        <div className="flex items-center gap-2">
          <Image
            src="/nav/logo.svg"
            width={0}
            height={0}
            alt="img"
            className="w-[19px] h-auto"
          />
          <span className="text-lg">Womazing</span>
        </div>
        <div className="flex items-center h-full justify-self-center">
          {navItems.map((item) => (
            <Link
              key={item}
              className={
                router.pathname === `/${item}`
                  ? `${styles.a} ${styles.active}`
                  : item === "home" && router.pathname === "/"
                  ? `${styles.a} ${styles.active}`
                  : styles.a
              }
              href={item === "home" ? "/" : `/${item}`}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 h-full justify-self-end">
          <button onClick={() => setCall(true)} className={styles.number}>
            +7 (495) 823-54-12
          </button>
          <div
            onClick={(e) => {
              if (e.target.tagName === "DIV") {
                setSuccess(false);
                setCall(false);
              }
            }}
            className={`${
              call
                ? "opacity-100 pointer-events-auto"
                : "pointer-events-none opacity-0"
            } fixed pb-[100px] z-50 w-[100vw] h-[100vh] top-0 left-0 transition-all flex items-center justify-center bg-red-300/95`}
          >
            <form
              onSubmit={handleSubmit}
              className={`${
                success
                  ? "pointer-events-none opacity-0"
                  : "opacity-100 pointer-events-auto"
                  ? !call
                  : "pointer-events-none opacity-0"
              } flex flex-col gap-2 items-center bg-red-100 transition-all p-12 rounded-xl`}
            >
              <p className="text-xl font-semibold mb-[10px]">
                Замовити зворотній дзвінок
              </p>
              <input
                className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="text"
                id="name"
                name="name"
                maxLength="20"
                minLength="3"
                placeholder="Name"
                required
              />
              <input
                className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="email"
                id="email"
                name="email"
                maxLength="20"
                minLength="3"
                placeholder="E-mail"
                required
              />
              <input
                className="px-[20px] py-[7px] w-full rounded-md border-2 focus:bg-blue-50 border-b-4 outline-none"
                type="tel"
                id="tel"
                name="tel"
                maxLength="20"
                minLength="3"
                placeholder="Phone"
                required
              />
              <button className="mt-[15px] px-[20px] py-[7px] w-[75%] rounded-md text-white font-medium bg-red-400 hover:bg-red-500 transition-all flex items-center justify-center">
                Замовити дзвінок
              </button>
            </form>
            <div
              className={`${
                success
                  ? "opacity-100 pointer-events-auto"
                  : "pointer-events-none opacity-0"
              } absolute text-xl font-semibold transition-all bg-red-100 p-12 rounded-xl`}
            >
              Чудово! Скоро ми вам передзвонимо
            </div>
          </div>
          <Link
            href="/cart"
            className={
              router.asPath === "/cart"
                ? `${styles.cart} ${styles.iconactive}`
                : styles.cart
            }
          >
            <Image src="/nav/cart.svg" width={20} height={20} alt="img" />
            {cart.length > 0 && (
              <span className="absolute bottom-[6px] left-[6px] bg-red-500 text-white text-xs w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
