import styles from './index.module.scss';
import ActivityCard from "../ActivityCard/ActivityCard";

const ActivityCardList = () => {
  return (
    <div className={styles.ActivityCardList}>
        <h2 className={styles.Title}>ACTIVITIES</h2>
        <div className={styles.Sublist}> 
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
          <ActivityCard />
        </div>
    </div>
  );
};

export default ActivityCardList;



