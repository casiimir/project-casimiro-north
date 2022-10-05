import styles from "./index.module.scss";
import { useSelector } from "react-redux";

import ItemCard from "../../components/ItemCard/ItemCard";

export default function MyTripPage() {
  const {cartData} = useSelector((state) => state);

  console.log(cartData.purchasedList)

  return (
    <div className={styles.MyTrip}>
      <img className={styles.background} src="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className={styles.background_overlay}/>
      <div className={styles.container}>
        <h2 className={styles.header}>My trip:</h2>
      </div>
      <div className={styles.activity_container}>
        <div className={styles.row}/> 
        <ul className={styles.trip_list}>
          {cartData?.purchasedList?.map((item, index) => <ItemCard cardData={item} key={index}/>)}
        </ul>
      </div>
    </div>
  );
}