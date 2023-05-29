const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import styles from "./Product.module.scss";

const ProductItem = ({ product }) => {
  return (
    <Link
      className={
        (styles.item,
        `grid grid-rows-[300px] border border-gray-200 rounded-lg items-center p-4 bg-white gap-3 shadow-xl hover:shadow-2xl transition-all`)
      }
      href={`/shop/${product.id}`}
    >
      <Image
        src={product.image}
        alt={product.title}
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
        className="object-contain w-auto h-full mb-2 justify-self-center"
      />
      <div className="flex flex-col gap-2 items-center">
        <h2>{product.title}</h2>
        <p>
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
          }).format(product.price)}
        </p>
      </div>
    </Link>
  );
};
export default ProductItem;
