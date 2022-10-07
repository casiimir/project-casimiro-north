import styles from "./index.module.scss";
import Logo from "../../assets/Logo.png";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Footer({lang, currency, setLang, setCurrency}) {
  const router = useRouter();

  const handleIconClick = () => {
    router.push("/aboutus");
  };

  const handleOnSelectionLangChange = (e) => {
      setLang(e.target.value);
      localStorage.setItem('lang', e.target.value);
  }

  const handleOnSelectionCurrencyChange = (e) => {
    setLang(e.target.value);
    localStorage.setItem('currency', e.target.value);
}

  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <Image 
          src={Logo.src}
          alt="logo"
          width={100} height={36}
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
        <select value={lang} onChange={(e) => handleOnSelectionLangChange(e)} className={styles.lang}>
          <option value="en-US" >En</option>
          <option value="es-ES" >Sp</option>
          <option value="fr-FR" >Fr</option>
          <option value="it-IT" >It</option>
        </select>
        <select defaultValue={currency} onChange={(e) => handleOnSelectionCurrencyChange(e)} className={styles.currency}>
          <option value="GBP" >£</option>
          <option value="EUR" >€</option>
          <option value="USD" >$</option>
        </select>
      </div>

      <p>Built with Next.js ❤️</p>
    </div>
  );
}
