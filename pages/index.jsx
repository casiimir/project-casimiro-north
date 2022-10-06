import styles from "../styles/Home.module.scss";
import Hero from "../components/Hero";
import MiniCarousel from "../components/MiniCarousel";
import CityCardList from "../components/CityCardList";
import ActivityCardList from "../components/ActivityCardList";
import Newsletter from "../components/Newsletter";
import ModalLogin from "../components/ModalLogin";

export default function Home({ lang, currency }) {
  return (
    <div className={styles.Home}>
      {/* <ModalLogin /> */}
      <div className={styles.section}>
        <Hero type="Home" lang={lang} currency={currency} />
        <MiniCarousel lang={lang} currency={currency} />
      </div>
      <CityCardList lang={lang} currency={currency} />
      <ActivityCardList lang={lang} currency={currency} />
      <Newsletter />
    </div>
  );
}
