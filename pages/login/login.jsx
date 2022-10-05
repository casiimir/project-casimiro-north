import star from "../../public/star.png";
import polari from "../../public/polari.png";
import styles from "./index.module.scss";
import { AiOutlineUser } from "react-icons/ai";

export default function LoginPage() {
  return (
    <div className={styles.login}>
      <div className={styles.logoSection}>
        <div className={styles.logo}>
          <img src={star.src} className={styles.star} alt="starX" />{" "}
          <img src={polari.src} className={styles.polari} alt="polari" />{" "}
        </div>
      </div>
      <div className={styles.loginSection}>
        <div className={styles.iconDiv}>
          <h2>login</h2> <AiOutlineUser className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
