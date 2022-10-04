import Image from "next/image";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { toBase64, shimmer } from "../../utils/shimmer";

const MiniCard = ({ cardData }) => {
  const { id, discount, cover_image_url, city, uuid } = cardData;
  const router = useRouter();

  const handleOnDiscountClick = () => {
    router.push("/activity/"+uuid)
  }

  return (
    <div onClick={handleOnDiscountClick} className={styles.miniCard}>
      {/* <img src={cover_image_url} key={id} id={id} alt="discount"/> */}
      <Image src={cover_image_url} key={id} id={id} alt="discount" layout="fill" placeholder="blur" blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}/>
      <p>{discount}</p>
      <span>{city.name}</span>
    </div>
  );
};

export default MiniCard;
