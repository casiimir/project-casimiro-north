import styles from "../styles/404.module.scss";
import router from "next/router";
import star from '../public/star.png';

export default function Custom404() {
    const goHome = () => {
        router.push("/");
      }

  return (
    <div className={styles.page404}>
    <div className={styles.maincontent}>
      <h1 className={styles.maintext}>
        <span>Lost </span> <span>your </span> <span>way? </span> <br></br>{" "}
        <br></br>
        <span>Look</span> <span>back at</span> <span>your</span>{" "}
        <span>guiding</span> <span>star!</span>
      </h1>
      <button className={styles.btn} onClick={goHome}> GO HOME</button></div>
      <img  className={styles.starx} src={star.src} alt="star"></img>
    </div>
  );
}
