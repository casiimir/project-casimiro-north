import CartSectionItem from "../CartSectionItem/CartSectionItem";
import { BsPaypal, BsFillCreditCard2BackFill } from "react-icons/bs";
import { AiOutlineGooglePlus } from "react-icons/ai";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { GET_CART } from "../../utils/GET/CART_METHOD";

const CartSection = () => {

  const [paymentMethod, setPaymentMethod] = useState();

  const {cartData} = useSelector(state => state);
  // const dispatch = useDispatch();

  console.log(cartData.cartList);

  // useEffect(() => {

  //   if (typeof window !== 'undefined' && localStorage.getItem('cart_uuid')) {
  //     dispatch({type: "SET_UUID", payload: localStorage.getItem('cart_uuid')})
  //     GET_CART(localStorage.getItem('cart_uuid'))
  //   }

  // }, [])

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
          {cartData.cartList.map((data, index) => (
            <CartSectionItem cartData={data} id={index} key={index}/>
          ))}
        </ul>
        <div className={styles.cartTotal}>
          <h3 className={styles.cartTotalText}>TOT</h3>
          <h3 className={styles.cartTotalText}>{cartData.cartList.reduce((a, b) => a + Number(b.retail_price.formatted_value.split("€")[1]), 0 )}</h3>
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
