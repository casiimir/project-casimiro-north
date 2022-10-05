import styles from "./category.module.scss";
import ActivityCardList from "../../../../components/ActivityCardList";
import Hero from "../../../../components/Hero/Hero";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import GET from "../../../../utils/GET/GET";
import { IMPORT_URL } from "../../../../utils/GET/URL";
import { useRouter } from "next/router";

export default function CategoryPage({lang, currency}) {
  const dispatch = useDispatch();
  const router = useRouter();

  const {cityname} = router.query

  useEffect(() => {
    cityname?.split("&=")[1] &&
      GET(
        IMPORT_URL.CITIES,
        `${cityname?.split("&=")[1]}/categories`,
        dispatch,
        "SET_CATEGORY_LIST", lang, currency
      );
  }, [cityname, dispatch]);

  return (
    <div className={styles.CategoryPage}>
      <Hero type="ActivityPage" />

      <ActivityCardList lang={lang} currency={currency} />
    </div>
  );
}
