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
import { useDispatch } from "react-redux";

const ModalLogin = ({}) => {
  console.log(userData?.user?.displayName);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => { 
    console.log('ciao')
    loginGoogle()

  }

  const handleOnOverlayClick = () => {
    dispatch({type: "SET_LOGIN_FALSE"});
  }

  useLayoutEffect(() => {
    if (userData?.user?.displayName) {
      router.push("/");
    }
  }, [userData]);

  return (
    <div className={styles.overlay}>
      <div className={styles.overlay_close} onClick={handleOnOverlayClick}/>
      <div className={styles.ModalLogin}>
        <div className={styles.logoSection}>
          <div className={styles.logoDiv}>
            <img src={logo.src} className={styles.logo} alt="logoPolarix" />
            <p>Polarix, your stellar portal to discover the world.</p>
          </div>
        </div>
        <div className={styles.row} />
        <div className={styles.loginSection}>
          <div className={styles.loginDiv}>
            <div className={styles.loginTextContainer}>
              <h2>login</h2>
              <div className={styles.loginIconDiv}>
                <AiOutlineUser className={styles.icon} />
              </div>
            </div>
          </div>
          <div className={styles.login_icons}>
            <FcGoogle className={styles.icon} onClick={handleLogin} />
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
