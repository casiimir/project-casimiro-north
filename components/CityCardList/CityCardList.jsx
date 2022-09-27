import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";
import { useState, useEffect } from "react";

const CityCardList = () => {
  return (
    <div className={styles.CityCardList}>
      <h2 className={styles.Header}>Top Cities</h2>
      <div className={styles.List}>
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </div>
  );
};

export default CityCardList;
