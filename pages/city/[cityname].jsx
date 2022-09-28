import { useRouter } from "next/router"
import { useEffect } from "react";
import useFetch from "../../utils/useFetch/useFetch";
import styles from "./city.module.scss";
import { IMPORT_URL } from "../../utils/useFetch/URL";
import { useDispatch, useSelector } from "react-redux";



export default function CityPage() {
    const router = useRouter();
    const {cityname} = router.query;
    const dispatch = useDispatch();

    const data = useSelector(state => state);
    

    useEffect(() => {
        cityname?.split('&=')[1] &&
        useFetch(IMPORT_URL.CITIES, cityname?.split('&=')[1], dispatch, 'SET_CITY')
    }, [cityname?.split('&=')[1]])

    

    return (
        <div className={styles.City}>
            <h1 style={{color: 'black', fontSize: '4rem'}}>{cityname?.split('&=')[0]}</h1>
            <button onClick={() => console.log(data.cities.cityData)}>città data</button>
        </div>
    )

}