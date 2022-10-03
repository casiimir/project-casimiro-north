import styles from "./index.module.scss";
import CityCard from "../CityCard/CityCard";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";

const CityCardList = () => {
  const dispatch = useDispatch();
  const { cities } = useSelector((state) => state);
  const cityListRef = useRef(null);

  let i = 0
  let timer;

  // const increment = () => {
  //   i = i + 1;
  //   console.log(i)
  //   timer = setTimeout(increment, 100)
  // }

  // const decrement = () => {
  //   i = i - 1;
  //   console.log(i)
  //   timer = setTimeout(decrement, 100)
  // }

  // const handleOnClickNextScrollButton = () => { 
  //   increment();  
  // }

  // const handleOnClickPrevScrollButton = () => {
  //   decrement();
  // }

  // const handleOnMouseUp = () => {
  //   clearTimeout(timer);
  // }

  const onNextClick = () => {
    cityListRef.current.scrollTo({
      top: 0,
      left: cityListRef.current.scrollLeft + 1000,
      behavior: "smooth"
    })
  };

  const onPrevClick = () => {
    cityListRef.current.scrollTo({
      top: 0,
      left: cityListRef.current.scrollLeft - 1000,
      behavior: "smooth"
    })
  };

  useEffect(() => {
    GET(IMPORT_URL.CITIES, '', dispatch, 'SET_CITY_LIST')
  }, [dispatch]);

  return (
    <div className={styles.CityCardList}>
      <div className={styles.Header}>
        <h2>Top Cities</h2>
        <div className={styles.button_container_scroll}>
          <button 
            onClick={onPrevClick}
            // onMouseDown={handleOnClickPrevScrollButton} 
            // onMouseUp={handleOnMouseUp} 
            className={styles.button_prev}>
              {"<"}
          </button>
          <button 
            onClick={onNextClick}
            // onMouseDown={handleOnClickNextScrollButton} 
            // onMouseUp={handleOnMouseUp} 
            className={styles.button_next}>
              {">"}
          </button>
        </div>
      </div>
      <div ref={cityListRef} className={styles.List}>
        {cities.cityList.filter((city) => city.list_count > 0).filter((_, index) => index <= 9).map((city, index) => <CityCard data={city} key={index}/>)}
      </div>
    </div>
  );
};

export default CityCardList;
