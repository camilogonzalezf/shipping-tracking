import "@/styles/globals.css";
import type { AppProps } from "next/app";
/* Redux Provider - Store */
import { Provider } from "react-redux";
import { store } from "@/store";

import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}
