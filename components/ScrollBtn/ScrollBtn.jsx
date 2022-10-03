import styles from './index.module.scss';

export default function ScrollBtn ({itemRef}) {

    // let timer;

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
      itemRef.current.scrollTo({
        top: 0,
        left: itemRef.current.scrollLeft + 1000,
        behavior: "smooth"
      })
    };
  
    const onPrevClick = () => {
      itemRef.current.scrollTo({
        top: 0,
        left: itemRef.current.scrollLeft - 1000,
        behavior: "smooth"
      })
    };

    return (
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
    )
}