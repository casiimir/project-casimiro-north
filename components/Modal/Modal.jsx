import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss";
import ModalIcon from "./modalIcon";

const Modal = () => {

  const dispatch = useDispatch();
  const {modalVisibility} = useSelector(state => state)
  const [status, setStatus] = useState("")

  const handleOnOverlayClick = () => {
    dispatch({type: "SET_FALSE"})
  }

  useEffect(()=> {
    setStatus("active")
    if (modalVisibility) {
      setTimeout(() => {
        setStatus("")
      }, 600)

      setTimeout(() => {
        dispatch({type: "SET_FALSE"})
      },800)
    }
  }, [modalVisibility])

  return (
    modalVisibility && (
      <div className={styles.modaloverlay}>
        <div className={styles.overlay} onClick={handleOnOverlayClick}/>
        <div className={`${styles.modal} ${styles[status]}`}>
          <h2 className={styles.mainText}>ADDED TO CART!</h2>
          <div className={styles.cart_icon}>
          <ModalIcon className={styles.carrello}/>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
