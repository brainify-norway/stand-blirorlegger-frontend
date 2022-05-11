import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

import { createElement } from "react";
import { setup } from "goober";
import { prefix } from "goober/prefixer";

setup(createElement, prefix);

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
