import styles from "./index.module.scss";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import useFetch from '../../utils/useFetch/useFetch';
import { IMPORT_URL } from "../../utils/useFetch/URL";

const Hero = ({type}) => {
  const [rightValue, setRightValue] = useState(0)
  const dispatch = useDispatch();

  const {cities} = useSelector(state => state);

  const touchStartX = 0;
  let touchEndX = 0;

  const onTouchStart = (e) => {
    touchStartX = e.changedTouches[0].clientX;
  };

  const onTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].clientX;
    change();
  };

  const change = () => {
    if (touchStartX > touchEndX && rightValue < 7) {
      setRightValue((prev) => prev + 1);
    } 
    if (touchStartX < touchEndX && rightValue > 0) {
      setRightValue((prev) => prev - 1);
    }
  };

  const handleRoundButtonClick = (item) => {
    setRightValue(item)
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      setRightValue(prev => prev + 1)
    }, 5000)

    if (rightValue === 7) {
      setTimeout(()=>{
        setRightValue(0)
      }, 5000) 
    }

    return () => clearInterval(interval);
  }, [rightValue])

  useEffect(() => {
    useFetch(IMPORT_URL.CITIES, '?limit=8', dispatch, 'SET_CITY_HERO_LIST')
  },[])

  return (
    <div className={styles.hero}>
      
       { type === "Home" && <>
       <div onTouchStart={(e) => onTouchStart(e)} onTouchEnd={(e) => onTouchEnd(e)} className={styles.slider_container}> 

          {cities?.cityListHero?.map((item, index) =>
            <div style={{right: `${rightValue * 100}vw`}} className={styles.img_container} key={index}>
              <div className={styles.overlay_gradient} />
              <img className={styles.background}
                src={item.cover_image_url}
                alt="heroimg"
              />
            </div>
            )}

        </div>
        <div className={styles.maintexthero}>
          <h1> {cities?.cityListHero[rightValue]?.name} </h1>
          <h2> {cities?.cityListHero[rightValue]?.headline ?? cities?.cityListHero[rightValue]?.meta_description
                .split(',')[0]} </h2>
        </div>
        <div className={styles.buttonslider}>
         
          {cities?.cityListHero?.map((_, index)=> <button onClick={() => handleRoundButtonClick(index)} className={`${styles.button_page} ${(index) === rightValue && styles.active}`} key={index}></button>)}
        </div>
        <button onClick={() => console.log(cities.cityListHero)} className={styles.explorebtn}> EXPLORE </button>
        </> 
        }
        {type === "City" && <div><p>PIPPO</p></div>}
      </div>
   
  );
};

export default Hero;
