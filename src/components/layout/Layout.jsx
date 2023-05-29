import Meta from "../seo/Meta";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = ({ children, title, description }) => {
  return (
    <>
      <Meta title={title} description={description} />
      <div className="max-w-[1220px] mx-auto relative flex flex-col justify-between gap-[175px] px-[10px] min-h-[100vh]">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default Layout;
