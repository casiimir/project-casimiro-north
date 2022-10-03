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
            <h1 className={styles.titleText}>ABOUT US</h1> </div>
            <div className={styles.fullText}> 
              <h3 className={styles.mission}>Polarix is the travel portal to book and manage your experiences worldwide.</h3>
              <p className={styles.description}>
                Polarix is a <b className={styles.bold}>mobile-first</b>, responsive experience e-commerce developed in <b className={styles.bold}>Next.js</b>. 
                Our <b className={styles.bold}>user-friendly</b> app has been created by a <b className={styles.bold}>team of 5</b> on GitHub, and managed with <b className={styles.bold}>SCRUM agile</b> framework. 
              </p>
                <h6>Latest technology used include:</h6>
                <ul className={styles.tech}>  
                  <li>Framework: Next.js built in React</li>
                  <li>Style: Sass, node modules</li>
                  <li>Database: Firebase</li>
                </ul>
            </div>
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
          <h4 className={styles.creditsText}>made to always be with you</h4>
        </div>
      </div>
    </div>
  );
}
