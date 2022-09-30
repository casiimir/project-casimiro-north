import CartSectionItem from "../CartSectionItem/CartSectionItem";
import { BsPaypal, BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import styles from "./index.module.scss";
import { useState } from "react";

const CartSection = () => {

  const [paymentMethod, setPaymentMethod] = useState();

  const arrayitem = [
    {
      id: 1,
      obj: "museo",

      luogo: "barcellona",
      prezzo: "1",
      pezzi: "x4",
      tot: "4",
    },
    {
      id: 2,
      obj: "giro turistico",

      luogo: "londra",
      prezzo: "2",
      pezzi: "x15",
      tot: "30 cents",
    },
    {
      id: 3,
      obj: "aperitivo",

      luogo: "parigi",
      prezzo: "150.000",
      pezzi: "x2",
      tot: "300.000",
    },
    {
      id: 4,
      obj: "ODIO",
      type: "",
      luogo: "roma",
      prezzo: "c'è mastercard",
      pezzi: "x2",
      tot: "ci sono 2 mastercard",
    },
  ];

  const paymentmethods = [
    {
      name: "CREDIT CARD / DEBIT CARD",
      icon: <BsFillCreditCard2BackFill className={styles.icon} />,
    },
    {
      name: "PAYPAL",
      icon: <BsPaypal className={styles.icon} />,
    },
    {
      name: "G-PAY",
      icon: <AiOutlineGooglePlus className={styles.icon} />,
    },
  ];

  const handleOnClickPay = () => {
    console.log(paymentMethod);
  }

  return (
    <div className={styles.cartSection}>
      <div className={styles.one_side}>
        <h1 className={styles.title}>
          Join your <span>CART</span>
        </h1>
        <ul className={styles.cartList}>
          {arrayitem.map((data, index) => (
            <CartSectionItem cartData={data} key={index}/>
          ))}
        </ul>
        <div className={styles.cartTotal}>
          <h3 className={styles.cartTotalText}>TOT</h3>
          <h3 className={styles.cartTotalText}>millemila euri</h3>
        </div>
      </div>
      <span className={styles.row}/>

      <div className={styles.two_side}>
        <div className={styles.paymentDiv}>
          <h4>PAYMENT METHOD</h4>
          <div className={styles.paymentChoices}>
            {paymentmethods.map((item, index) => (
              <div className={styles.paymentChoice} key={index}>
                <span>{item.icon}</span>
                <span onClick={() => setPaymentMethod(item.name)} className={`${styles.paymentMethod} ${paymentMethod === item.name && styles.active}`}>{item.name}</span>
              </div>
            ))}
          </div>
          <button onClick={handleOnClickPay} className={styles.paymentBtn}>PAY</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartSection;
