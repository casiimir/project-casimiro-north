import styles from "./index.module.scss";
import Logo from "../../assets/Logo.png";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { useRouter } from "next/router";

export default function Footer({lang, currency, setLang, setCurrency}) {
  const router = useRouter();

  const handleLogoClick = () => {
    router.push("/");
  };
  const handleIconClick = () => {
    router.push("/aboutus");
  };

  const handleOnSelectionLangChange = (e) => {
      setLang(e.target.value);
      localStorage.setItem('lang', e.target.value);
      location.reload();
  }

  const handleOnSelectionCurrencyChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem('currency', e.target.value);
    location.reload();
}

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

      <div className={styles.zoneSelector}>
        <select onChange={(e) => handleOnSelectionLangChange(e)} className={styles.lang}>
          <option value="en-US" selected={lang === "en-US"}>En</option>
          <option value="es-ES" selected={lang === "es-ES"}>Sp</option>
          <option value="fr-FR" selected={lang === "fr-FR"}>Fr</option>
          <option value="it-IT" selected={lang === "it-IT"}>It</option>
        </select>
        <select onChange={(e) => handleOnSelectionCurrencyChange(e)} className={styles.currency}>
          <option value="GBP" selected={currency === "GBP"}>£</option>
          <option value="EUR" selected={currency === "EUR"}>€</option>
          <option value="USD" selected={currency === "USD"}>$</option>
        </select>
      </div>

      <p>Built with Next.js ❤️</p>
    </div>
  );
}
