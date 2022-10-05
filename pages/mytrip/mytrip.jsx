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
      <img className={styles.background} src="https://images.unsplash.com/photo-1496950866446-3253e1470e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"/>
      <div className={styles.background_overlay}/>
      <div className={styles.container}>
        <h2 className={styles.header}>My trip:</h2>
      </div>
      <div className={styles.activity_container}>
        <div className={styles.row}/> 
      </div>
    </div>
  );
}