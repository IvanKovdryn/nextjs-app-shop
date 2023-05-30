const { default: Link } = require("next/link");
import Image from "next/image";
import styles from "./Nav.module.css";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ShopService } from "@/services/shop.service";
import Call from "../../Call";

const Nav = () => {
  const router = useRouter();
  const cart = useSelector((state) => state.cart.items);
  const navItems = ["home", "shop", "about", "contacts"];
  const [call, setCall] = useState(false);

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
              <span className="py-[10px] px-[20px] mx-[2px] flex items-center rounded-lg">
                {item[0].toUpperCase() + item.slice(1)}
              </span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-1 h-full justify-self-end">
          <Call />
          <Link
            href="/cart"
            className={
              router.asPath === "/cart"
                ? `${styles.cart} ${styles.active}`
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
