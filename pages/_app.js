import 'animate.css';
import '../styles/globals.css'
import Script from "next/script";
import { useEffect } from "react";
import 'material-icons/iconfont/material-icons.css';

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

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8EHNRT07YZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-8EHNRT07YZ');
        `}
      </Script>
      <Component {...pageProps} />
    </>)
}

export default MyApp
