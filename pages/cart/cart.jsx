import styles from "./index.module.scss";
import CartSection from "../../components/CartSection/CartSection";

export default function CartPage() {

  return (
    <div className={styles.cart}>
      <CartSection />
    </div>
  );
}
