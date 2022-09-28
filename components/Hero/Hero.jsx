import styles from "./index.module.scss";
import { useState, useEffect } from 'react';

const Hero = () => {
  const [rightValue, setRightValue] = useState(0)

  const buttons = [1,2,3,4,5,6,7,8]

  const images = [
    { 
      url: "https://img.freepik.com/premium-photo/haew-narok-chasm-hell-waterfall-kao-yai-national-park-thailand_109643-40.jpg?w=1060",
      title: 'Palermo'
    },
    { 
      url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      title: 'Catania'
    },
    {
      url:"https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      title: 'Napoli'
    },
    {
      url: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80",
      title: 'Milano'
    }
  ]

  useEffect(() => {
    
    const interval = setInterval(() => {
      setRightValue(prev => prev + 1)
    }, 4000)

    if (rightValue === 3) {
      setTimeout(()=>{
        setRightValue(0)
      }, 4000) 
    }

    return () => clearInterval(interval);
  }, [rightValue])

  return (
    <div className={styles.hero}>
      
        <div className={styles.slider_container}> 

          {images.map((item, index) =>
            <div style={{right: `${rightValue * 100}vw`}} className={styles.img_container} key={index}>
              <div className={styles.overlay_gradient} />
              <img className={styles.background}
                src={item.url}
                alt="heroimg"
              />
            </div>
            )}

        </div>
        <div className={styles.maintexthero}>
          <h1> {images[rightValue].title} </h1>
          <h2> Empty description </h2>
        </div>
        <div className={styles.buttonslider}>
          {/*VVV TEST BUTTON VIEWS VVV*/}
          {buttons.map((item)=> <button onClick={() => setRightValue(item - 1)} className={`${styles.button_page} ${(item - 1) === rightValue && styles.active}`} key={item}></button>)}
        </div>
        <button className={styles.explorebtn}> EXPLORE </button>
      </div>
   
  );
};

export default Hero;
