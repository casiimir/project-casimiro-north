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

// console.log(Router.router.state.pathname)
function MyApp({ Component, pageProps }) {

  const router = useRouter();

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

  return (
    <Provider store={store}>
      <Head>
        <title>Polarix</title>
        <meta name="Polarix" content="Experience, travel,  e-commerce" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="keywords" content="e-commerce, experience, travel, musement, edgemony"></meta>
        <meta name="author" content="Fazio N., Gugliemino M., Mangano R., Rizzitello E., Venasco M."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      {router.pathname === "/" ? loadVisible && (
        <div
          className={`${styles.overlayanimation} ${styles[status]}`}
        >
          <img src={star.src} className={styles.star} alt="starX" />{" "}
          <img src={polari.src} className={styles.polari} alt="polari" />{" "}
        </div>
      ) : ""}
      {router.pathname !== "/404" ? <NavBar /> : ""}
      <Component {...pageProps} />
      {router.pathname !== "/404" ? <Footer /> : ""}
    </Provider>
  );
}

export default MyApp;
