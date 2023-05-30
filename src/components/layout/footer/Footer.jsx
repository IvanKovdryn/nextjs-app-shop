import Link from "next/link";
import stylesNav from "../header/nav/Nav.module.css";
import Image from "next/image";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiOutlineFacebook, AiOutlineCopyright } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Call from "../Call";

const Footer = () => {
  const router = useRouter();
  const navItems = ["home", "shop", "about", "contacts"];
  const categories = useSelector((state) => state.cart.categories);
  return (
    <footer className="relative py-[75px]">
      <div className="absolute h-full z-[-1] w-[1000%] bg-[#ffe8e8] top-0 left-[-500%]"></div>
      <div>
        <div className="grid grid-cols-3 items-center top-0 left-0 h-[50px] w-full px-[10px]">
          <div className="flex items-center gap-2">
            <Image src="/nav/logo.svg" width={20} height={20} alt="img" />
            <span className="text-lg">Womazing</span>
          </div>
          <div className="flex items-center h-full justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item}
                className={
                  router.pathname === `/${item}`
                    ? `${stylesNav.a} ${stylesNav.active}`
                    : item === "home" && router.pathname === "/"
                    ? `${stylesNav.a} ${stylesNav.active}`
                    : stylesNav.a
                }
                href={item === "home" ? "/" : `/${item}`}
              >
                <span className="py-[4px] px-[12px] mx-[2px] flex items-center rounded-lg">
                  {item[0].toUpperCase() + item.slice(1)}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center h-full justify-self-end">
            <Call />
          </div>
        </div>
        <div className="grid grid-cols-3 items-center top-0 left-0 w-full px-[10px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <AiOutlineCopyright size={15} />
              <span>Всі права захищені</span>
            </div>
            <span className="">Політика конфіденційності</span>
            <span className="">Публічна оферта</span>
          </div>
          <div className="flex flex-col items-center h-full">
            {categories.map((category) => (
              <Link
                key={category}
                className={
                  router.asPath === `/shop/category/${category}`
                    ? `${stylesNav.a} ${stylesNav.active}`
                    : stylesNav.a
                }
                href={`/shop/category/${category}`}
              >
                <span className="py-[4px] px-[12px] my-[1px] flex items-center rounded-lg">
                  {category}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex gap-3 items-center justify-self-end h-full">
            <button>
              <BsInstagram size={25} />
            </button>
            <button>
              <AiOutlineFacebook size={25} />
            </button>
            <button>
              <BsTwitter size={25} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
