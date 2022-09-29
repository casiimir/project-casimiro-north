import styles from "./index.module.scss";

const MiniCard = ({ cardData }) => {
  const { id, discount, cover_image_url, city } = cardData;

  return (
    <div className={styles.miniCard}>
      <img src={cover_image_url} key={id} id={id} />
      <p>{discount}</p>
      <span>{city.name}</span>
    </div>
  );
};

export default MiniCard;
