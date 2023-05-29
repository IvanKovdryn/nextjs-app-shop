import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import { useState } from "react";
import Router from "next/router";
import Loader from "@/components/ui/product/loader/Loader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  return (
    <>
      {loading && <Loader />}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
