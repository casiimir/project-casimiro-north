import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";

const CityCardList = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state);
  useEffect(() => {
    GET(IMPORT_URL.CITIES, '', dispatch, 'SET_CITY_LIST')
  }, []);
  return (
    <div className={styles.CityCardList}>
      <h2 className={styles.Header}>Top Cities</h2>
      <div className={styles.List}>
        {cities.cityList.filter((city) => city.list_count > 0).filter((_, index) => index <= 9).map((city, index) => <CityCard data={city} key={index}/>)}
      </div>
    </div>
  );
};

export default CityCardList;
