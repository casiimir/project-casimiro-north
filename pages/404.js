import styles from "../styles/404.module.scss";
import router from "next/router";
import { useRouter } from "next/router";

export default function Custom404() {
    const goHome = () => {
        // router.push(`/../city/${cityname.split('&=')[0]}`)
        router.push("/");
      }

  return (
    <div className={styles.page404}>
      <h1 className={styles.maintext}>
        <span>Lost </span> <span>your </span> <span>way? </span> <br></br>{" "}
        <br></br>
        <span>Look</span> <span>back at</span> <span>your</span>{" "}
        <span>guiding</span> <span>star!</span>
      </h1>
      <button className={styles.btn} onClick={goHome}> GO HOME</button>
    </div>
  );
}
