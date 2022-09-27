import styles from "./index.module.scss";

const MiniCard = ({ cardData }) => {
  const { id, url } = cardData;
  return (
    <div className={styles.miniCard}>
      <img src={url} key={id} id={id} />
    </div>
  );
};

export default MiniCard;
