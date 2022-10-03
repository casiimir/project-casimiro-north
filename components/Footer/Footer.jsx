import styles from "./index.module.scss";
import Logo from "../../assets/Logo.png";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };
  const handleIconClick = () => {
    router.push("/aboutus");
  };

  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <img
          className={styles.logo}
          src={Logo.src}
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className={styles.icon_container}>
          <MdFacebook className={styles.icon} onClick={handleIconClick} />
          <AiFillTwitterCircle
            className={styles.icon}
            onClick={handleIconClick}
          />
          <AiFillGithub className={styles.icon} onClick={handleIconClick} />
        </div>
      </div>
      <p>Built with Next.js ❤️</p>
    </div>
  );
}
