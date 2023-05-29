import loaderImg from "./spinner.svg";
const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 h-full flex items-center justify-center pb-[100px]">
      <img src={loaderImg.src} alt="loading" width={200} />
    </div>
  );
};
export default Loader;
