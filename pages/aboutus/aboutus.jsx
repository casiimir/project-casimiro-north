import styles from "./index.module.scss";
import { AiFillGithub } from "react-icons/ai";
import Logo from "../../assets/Logo.png";
import ActivitySwiper from "../../components/ActivitySwiper";
import DeveloperCard from "../../components/DeveloperCard/DeveloperCard";
import {developersData} from "../../constants";
import Link from "next/link";

export default function AboutUsPage() {
  const githubRepositoryLink =
    "https://github.com/casiimir/project-casimiro-north";

  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.mainSection}>
        <div className={styles.infoSection}>
          <div className={styles.title}>

            <h2 className={styles.titleText}>ABOUT US</h2>
          </div>
          <p className={styles.description}>
            {/* breve descrizione di quanto siamo bravi ❤️ */}
            Polarix is the stellar portal to discover, book and manage your
            travel experiences around the world.
            </p>
            <p className={styles.description}>
            Polarix is a <span className={styles.bold}> mobile-first</span>, user friendly travel app developed with
            <span className={styles.bold}> Next.js</span> . It was created by a <span className={styles.bold}> team of five</span> enthusiastic people in a
            <span className={styles.bold}> SCRUM agile framework.</span>
            </p>
            <p className={styles.description}>
            Languages and technologies used include:
            </p>
            <ul >
              <li>Next.js</li>
              <li>React.js</li>
              <li>Redux</li>
              <li>Sass</li>
              <li>Firebase</li>
            </ul>
          
          <div className={styles.info}>
            <span className={styles.iconSpan}>
              <AiFillGithub className={styles.icon} />
            </span>
            <Link href={githubRepositoryLink}>
              <span className={styles.githubLink}>Github repository link</span>
            </Link>
          </div>
        </div>
        <div className={styles.swiper}>
          <ActivitySwiper type="aboutUs" />
        </div>
        <div className={styles.profilesDiv}>
          {developersData?.map((data, i) => (
            <DeveloperCard data={data} key={i} />
          ))}
        </div>

        <div className={styles.creditsSection}>
          <img src={Logo.src} alt="logoPolarix" className={styles.logo} />
          <h4 className={styles.creditsText}>Made to always be with you</h4>
        </div>
      </div>
    </div>
  );
}
