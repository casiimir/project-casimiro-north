import styles from "./index.module.scss";

export default function ScrollBtn({ itemRef }) {
  const onNextClick = () => {
    itemRef.current.scrollTo({
      top: 0,
      left: itemRef.current.scrollLeft + 1000,
      behavior: "smooth",
    });
  };

  const onPrevClick = () => {
    itemRef.current.scrollTo({
      top: 0,
      left: itemRef.current.scrollLeft - 1000,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.button_container_scroll}>
      <button onClick={onPrevClick} className={styles.button_prev}>
        {"<"}
      </button>
      <button onClick={onNextClick} className={styles.button_next}>
        {">"}
      </button>
    </div>
  );
}
