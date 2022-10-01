import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IMPORT_URL } from "../../utils/GET/URL";
import Link from "next/link";

export default function AboutUsPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.mainSection}>
        <div className={styles.infoSection}>
          <div className={styles.title}>
            <h1 className={styles.titleText}>ABOUT US</h1>
          </div>
          <p className={styles.description}>
            breve descrizione di quanto siamo bravi ❤️
          </p>
          <div className={styles.info}>
            <span className={styles.logoForse}>logo(credo)</span>
            <span className={styles.githubLink}>Github repository link</span>
          </div>
        </div>
        <div className={styles.swiper}>qui andrebbe lo swiper</div>

        <div className={styles.creditsSection}>
          <img src="" alt="logoPolarix" className={styles.logo} />
          <h4 className={styles.creditsText}>made to always be with you</h4>
        </div>
      </div>
    </div>
  );
}
