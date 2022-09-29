import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IMPORT_URL } from "../../utils/GET/URL";
import Link from "next/link";
import CityCard from "../../components/CityCard/CityCard";

export default function MyCartPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className={styles.MyCart}>
      <h2 className={styles.title}> My cart yuppi!!</h2>
    </div>
  );
}
