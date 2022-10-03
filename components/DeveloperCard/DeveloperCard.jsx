import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const DeveloperCard = ({ data }) => {
  const { personalImg, name, description, liprofile, ghprofile } = data;

  return (
    <div className={styles.DeveloperCard}>
      <img
        src={personalImg}
        alt={`${name} personal image`}
        className={styles.personalImg}
      />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className={styles.socials}>
        <Link href={liprofile} alt={name}>
          <span alt="LinkedinIcon">
            <AiFillLinkedin className={styles.icon} />
          </span>
        </Link>
        <Link href={ghprofile} alt={name}>
          <span alt="GithubIcon">
            <AiFillGithub className={styles.icon} />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default DeveloperCard;
