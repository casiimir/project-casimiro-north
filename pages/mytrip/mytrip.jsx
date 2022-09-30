import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { IMPORT_URL } from "../../utils/GET/URL";
import Link from "next/link";

export default function MyTripPage() {
  // const router = useRouter();
  // const dispatch = useDispatch();
  // const data = useSelector((state) => state);

  return (
    <div className={styles.MyTrip}>
      <div className={styles.container}>
        <h2 className={styles.header}>My trip in <b className={styles.city}>PALERMO</b></h2>
        <div className={styles.row}/> 

        <ul className={styles.activities}>
          <li className={styles.activitiy}> ARTE E CULTURA</li>
          <li className={styles.activitiy}> TOUR</li>
          <li className={styles.activitiy}> BY NIGHT</li>
          <li className={styles.activitiy}> ADVENTURES</li>
        </ul>
      </div>
    </div>
  );
}