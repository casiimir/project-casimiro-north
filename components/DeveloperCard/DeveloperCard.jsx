import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const DeveloperCard = ({ data }) => {
  const {
    personalImg,
    name,
    description,
    fbprofile,
    liprofile,
    ghprofile,
    igprofile,
  } = data;

  return (
    <div className={styles.DeveloperCard}>
      <img
        src={personalImg}
        alt={`${name} personal image`}
        className={styles.personalImg}
      />
      <h1>{name}</h1>
      <p>{description}</p>
      <div className={styles.socials}>
        <Link href={fbprofile} alt={name}>
          <span alt="FacebookIcon">
            <MdFacebook className={styles.icon} />
          </span>
        </Link>
        <Link href={igprofile} alt={name}>
          <span alt="InstagramIcon">
            <AiFillInstagram className={styles.icon} />
          </span>
        </Link>
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
