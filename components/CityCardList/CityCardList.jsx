import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useFetch from "../../utils/useFetch/useFetch";
import { IMPORT_URL } from "../../utils/useFetch/URL";

const CityCardList = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state);
  useEffect(() => {
    useFetch(IMPORT_URL.CITIES, '', dispatch, 'SET_CITY_LIST')
  }, []);
  return (
    <div className={styles.CityCardList}>
      <h2 className={styles.Header}>Top Cities</h2>
      <div className={styles.List}>
        {cities.cityList.map((city, index) => <CityCard data={city} key={index}/>)}
      </div>
    </div>
  );
};

export default CityCardList;
