import styles from "./index.module.scss";

const CityCard = () => {
  return (
  
    <div className={styles.CityCard}>
      <img src="https://picsum.photos/200/300" alt="CityPhoto" />
      <h3>Nomi</h3>
      <p>Cose</p>
      <button>Città</button>
    </div>
  );
};

export default CityCard;
