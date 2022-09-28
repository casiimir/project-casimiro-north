import { useRouter } from "next/router";
import Hero from "../../components/Hero/Hero";
import { useEffect } from "react";
import useFetch from "../../utils/useFetch/useFetch";
import styles from "./city.module.scss";
import { IMPORT_URL } from "../../utils/useFetch/URL";
import { useDispatch, useSelector } from "react-redux";
import CityMainSection from "../../components/CityMainSection/CityMainSection";

export default function CityPage() {
  const router = useRouter();
  const { cityname } = router.query;
  const dispatch = useDispatch();

  const data = useSelector((state) => state);

  useEffect(() => {
    cityname?.split("&=")[1] &&
      useFetch(
        IMPORT_URL.CITIES,
        cityname?.split("&=")[1],
        dispatch,
        "SET_CITY"
      );
  }, [cityname?.split("&=")[1]]);

    return (
        <div className={styles.City}>
            <Hero type="CityPage"/>
            <CityMainSection />
        </div>
    )
}
