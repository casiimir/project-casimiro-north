import styles from "./index.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
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

  const socialsIcons = [
    {
      name: "Facebook",
      path: { fbprofile },
      icon: <MdFacebook className={styles.icon} />,
    },
    {
      name: "Github",
      path: { ghprofile },
      icon: <AiFillGithub className={styles.icon} />,
    },
  ];

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
        {socialsIcons.map((social, index) => (
          <Link href={social.path} key={index}>
            <span>{social.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
