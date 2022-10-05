import { useRouter } from "next/router";
import Hero from "../../../components/Hero/Hero";
import { useEffect } from "react";
import GET from "../../../utils/GET/GET";
import styles from "./city.module.scss";
import { IMPORT_URL } from "../../../utils/GET/URL";
import { useDispatch } from "react-redux";
import CityMainSection from "../../../components/CityMainSection/CityMainSection";

export default function CityPage({lang, currency}) {
  const router = useRouter();
  const { cityname } = router.query;
  const dispatch = useDispatch();

  useEffect(() => {
    cityname?.split("&=")[1] &&
      GET(
        IMPORT_URL.CITIES,
        cityname?.split("&=")[1],
        dispatch,
        "SET_CITY", lang, currency
      );
  }, [cityname, dispatch, lang, currency]);

    return (
        <div className={styles.City}>
            <Hero type="CityPage" lang={lang} currency={currency}/>
            <CityMainSection lang={lang} currency={currency} />
        </div>
    )
}
