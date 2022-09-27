import styles from "./index.module.scss";

const Hero = () => {

  return (
    <div className={styles.hero}>
      <div className={styles.overlay_gradient} />
        <img className={styles.background}
          src="https://img.freepik.com/premium-photo/haew-narok-chasm-hell-waterfall-kao-yai-national-park-thailand_109643-40.jpg?w=1060"
          alt="heroimg"
        />
        <div className={styles.maintexthero}>
          <h1> Palermo </h1>
          <h2> Empty description </h2>
        </div>
        <div className={styles.buttonslider}>
          <button ></button>
          <button ></button>
          <button ></button>
		  <button ></button>
		  <button ></button>
          <button ></button>
		  <button ></button>
        </div>
        <button className={styles.explorebtn}> EXPLORE </button>
      </div>
   
  );
};

export default Hero;
