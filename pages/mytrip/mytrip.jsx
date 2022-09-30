import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { IMPORT_URL } from "../../utils/GET/URL";
import Link from "next/link";

export default function MyTripPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className={styles.MyTrip}>
      <h2 className={styles.header}> My trip in <h2 className={styles.city}>Palermo</h2></h2>
    </div>
  );
}