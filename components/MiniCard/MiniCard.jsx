import { useRouter } from "next/router";
import styles from "./index.module.scss";

const MiniCard = ({ cardData }) => {
  const { id, discount, cover_image_url, city, uuid } = cardData;
  const router = useRouter();

  const data = cardData

  console.log(data)

  const handleOnDiscountClick = () => {
    router.push("/activity/"+uuid)
  }

  return (
    <div onClick={handleOnDiscountClick} className={styles.miniCard}>
      <img src={cover_image_url} key={id} id={id} />
      <p>{discount}</p>
      <span>{city.name}</span>
    </div>
  );
};

export default MiniCard;
