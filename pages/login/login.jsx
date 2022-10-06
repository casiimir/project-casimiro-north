import star from "../../public/star.png";
import polari from "../../public/polari.png";
import styles from "./index.module.scss";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';
import { loginGoogle } from "../../services/firebase";
import { userData } from "../../services/auth_google";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";

export default function LoginPage() {

  console.log(userData?.user?.displayName)

  const router = useRouter();

  useLayoutEffect(() => {
    if (userData?.user?.displayName) {
      router.push('/')
    }

  },[userData])

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
        <div className={styles.login_icons}>
          <FcGoogle className={styles.icons} onClick={loginGoogle} />
        </div>       
      </div>
    </div>
  );
}
