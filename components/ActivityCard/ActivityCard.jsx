import styles from "./index.module.scss";

const ActivityCard = () => {
    
    return (
      <div className={styles.ActivityCard}>
        <img className={styles.img} src="https://images-sandbox.musement.com/cover/0024/83/thumb_2382476_cover_header.jpeg?w=540?fit=crop&h=225" alt="Activity photo" />
        <div className={styles.overlay} /> 
        <h5 className={styles.title}>EVERGLADES</h5>
      </div>
    );
  };
  
  export default ActivityCard;
  