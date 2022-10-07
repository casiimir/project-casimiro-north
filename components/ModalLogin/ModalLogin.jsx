import star from "../../public/star.png";
import polari from "../../public/polari.png";
import styles from "./index.module.scss";
import logo from "../../public/logo_readme.png";
import { AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
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
          <div className={styles.loginDiv}>
            <h2>login</h2>
            <div className={styles.loginIconDiv}>
              <AiOutlineUser className={styles.icon} />
            </div>
          </div>
          <div className={styles.login_icons}>
            <FcGoogle className={styles.icon} onClick={loginGoogle} />
            <div className={styles.fb} >
              <BsFacebook className={styles.icon} />
              <div className={styles.background} />
            </div>
            <BsApple className={styles.icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogin;
