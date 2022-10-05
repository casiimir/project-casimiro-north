import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import ScrollBtn from "../ScrollBtn";

const CityCardList = ({lang, currency}) => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state);
  const cityListRef = useRef(null);

  useEffect(() => {
    GET(IMPORT_URL.CITIES, '?limit=30', dispatch, 'SET_CITY_LIST', lang, currency)
  }, [dispatch]);

  return (
    <div className={styles.CityCardList}>
      <div className={styles.Header}>
        <h2>Top Cities</h2>
        <ScrollBtn itemRef={cityListRef} />
      </div>
      <div ref={cityListRef} className={styles.List}>
        {cities.cityList.filter((city) => city.list_count > 0).map((city, index) => <CityCard data={city} key={index}/>)}
      </div>
    </div>
  );
};

export default CityCardList;
