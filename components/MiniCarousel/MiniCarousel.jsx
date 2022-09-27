import MiniCard from "../MiniCard/MiniCard";
import styles from "./index.module.scss";

const MiniCarousel = () => {
  const arrayProva = [
    { id: 1, url: "https://picsum.photos/100/100" },
    { id: 2, url: "https://picsum.photos/100/100" },
    { id: 3, url: "https://picsum.photos/100/100" },
    { id: 4, url: "https://picsum.photos/100/100" },
    { id: 5, url: "https://picsum.photos/100/100" },
    { id: 6, url: "https://picsum.photos/100/100" },
    { id: 7, url: "https://picsum.photos/100/100" },
    { id: 8, url: "https://picsum.photos/100/100" },
    { id: 9, url: "https://picsum.photos/100/100" },
    { id: 10, url: "https://picsum.photos/100/100" },
    { id: 11, url: "https://picsum.photos/100/100" },
    { id: 12, url: "https://picsum.photos/100/100" },
  ];

  return (
    <div className={styles.miniCarousel}>
      <h3 className={styles.title}>Voucher for you</h3>
      <div className={styles.voucherDiv}>
        {arrayProva.map((cardData) => (
          // <div>
          //   <img src={cardData.url} key={cardData.id} id={cardData.id} />
          // </div>
          <MiniCard cardData={cardData} key={cardData.id} />
        ))}
      </div>
    </div>
  );
};

export default MiniCarousel;
