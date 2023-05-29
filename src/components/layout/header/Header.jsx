const { default: Link } = require("next/link");
import Image from "next/image";
import styles from "./Header.module.css";
import Nav from "./nav/Nav";

const Header = () => {
  return <Nav />;
};
export default Header;
