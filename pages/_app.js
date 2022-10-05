import Head from "next/head";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/app.module.scss";
import star from "../public/star.png";
import polari from "../public/polari.png";
import { useAmp } from "next/amp";

// console.log(Router.router.state.pathname)
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [lang, setLang] = useState('en-US');
  const [currency, setCurrency] = useState('EUR');

  const [loadVisible, setLoadVisible] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus("disactive");
    if (loadVisible) {
      setTimeout(() => {
        setLoadVisible(false);
      }, 3500);
    }
  }, [loadVisible]);

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem('lang')) {
      setLang(localStorage.getItem('lang'))
    }

    if (typeof window !== "undefined" && localStorage.getItem('currency')) {
      setCurrency(localStorage.getItem('currency'))
    }
  })

  return (
    <Provider store={store}>
      <Head>
        <title>Polarix</title>
        <meta name="Polarix" content="Experience, travel,  e-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="e-commerce, experience, travel, musement, edgemony"></meta>
        <meta name="dc.language" content="ita" scheme="RFC1766"></meta>
        <meta name="author" content="Fazio N., Gugliemino M., Mangano R., Rizzitello E., Venasco M."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {router.pathname === "/"
        ? loadVisible && (
            <div className={`${styles.overlayanimation} ${styles[status]}`}>
              <img src={star.src} className={styles.star} alt="starX" />{" "}
              <img src={polari.src} className={styles.polari} alt="polari" />{" "}
            </div>
          )
        : ""}
      {(router.pathname !== "/404") && "/login" ? <NavBar lang={lang} currency={currency}/> : ""}
      <Component {...pageProps} 
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
      />
      {(router.pathname !== "/404") && "/login" ? <Footer lang={lang} currency={currency} setLang={setLang} setCurrency={setCurrency}/> : ""}
    </Provider>
  );
}

export default MyApp;
