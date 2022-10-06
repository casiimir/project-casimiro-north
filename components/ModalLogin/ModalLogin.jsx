import star from "../../public/star.png";
import polari from "../../public/polari.png";
import styles from "./index.module.scss";
import logo from "../../public/logo_readme.png";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { loginGoogle } from "../../services/firebase";
import { userData } from "../../services/auth_google";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";

const ModalLogin = ({}) => {
  console.log(userData?.user?.displayName);

  const router = useRouter();

  useLayoutEffect(() => {
    if (userData?.user?.displayName) {
      router.push("/");
    }
  }, [userData]);

  return (
    <div className={styles.overlay}>
      <div className={styles.ModalLogin}>
        <div className={styles.logoSection}>
          <div className={styles.logoDiv}>
            <img src={logo.src} className={styles.logo} alt="logoPolarix" />
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
    </div>
  );
};

export default ModalLogin;
