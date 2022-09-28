import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { IMPORT_URL } from "../../utils/useFetch/URL";
import Link from "next/link";
import CityCard from "../../components/CityCard/CityCard";

export default function myTripPage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <div className={YourTrip}>
      <h2 className={styles.Theader}> My trip in Palermo</h2>
      {/* <h2 className={styles.Theader}> Your trip in {city.name}</h2> */}
    </div>
  );
}
