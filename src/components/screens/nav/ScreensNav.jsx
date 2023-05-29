import Link from "next/link";

const ScreensNav = ({ productPage, page }) => {
  return (
    <div>
      <Link className="text-black hover:text-[#ff0000] transition-all" href="/">
        Home
      </Link>
      <span> &nbsp; - &nbsp; </span>
      {page ? (
        <span className="text-gray-400">{page}</span>
      ) : productPage ? (
        <>
          <Link
            href="/shop"
            className="text-black hover:text-[#ff0000] transition-all"
          >
            Shop
          </Link>
          <span> &nbsp; - &nbsp; </span>
          <span className="text-gray-400">{productPage}</span>
        </>
      ) : (
        <p>""</p>
      )}
    </div>
  );
};
export default ScreensNav;
