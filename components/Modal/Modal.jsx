import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import ModalIcon from "./modalIcon";

const Modal = () => {

  const dispatch = useDispatch();
  const {modalVisibility} = useSelector(state => state)
  const [status, setStatus] = useState("")

  const router = useRouter();

  const handleOnOverlayClick = () => {
    dispatch({type: "SET_FALSE"})
  }

  useEffect(()=> {
    setStatus("active")
    if (modalVisibility) {
      

      if (router.pathname === "/cart") {
        setTimeout(() => {
          dispatch({type: "SET_FALSE"})
        },2000);

        setTimeout(() => {
          setStatus("")
        }, 1500)
      }
      else {
        setTimeout(() => {
        dispatch({type: "SET_FALSE"})
      },800);
      
      setTimeout(() => {
        setStatus("")
      }, 600)
    }
    }
  }, [modalVisibility])

  return (
    modalVisibility && (
      <div className={styles.modaloverlay}>
        <div className={styles.overlay} onClick={handleOnOverlayClick}/>
        <div className={`${styles.modal} ${styles[status]}`}>
          <h2 className={styles.mainText}>{router.pathname === "/cart" ? "Thanks for purchasing!" : "ADDED TO CART!"}</h2>
          <div className={styles.cart_icon}>
          {router.pathname === "/cart" ? <p className={styles.purchase}>"Check your Trip List!"</p> : <ModalIcon className={styles.carrello}/>}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
