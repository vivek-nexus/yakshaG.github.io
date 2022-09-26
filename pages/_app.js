import '../styles/globals.css'
import 'animate.css';
import { useEffect } from "react";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window._mfq = window._mfq || [];
    (function () {
      var mf = document.createElement("script");
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/d650c614-2064-44cc-804a-54644c37dd52.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  })

  return <Component {...pageProps} />
}

export default MyApp
