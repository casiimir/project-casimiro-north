import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IMPORT_URL } from "../../utils/GET/URL";
import Link from "next/link";
import CartSection from "../../components/CartSection/CartSection";

export default function CartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className={styles.cart}>
      <CartSection />
    </div>
  );
}
