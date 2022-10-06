import styles from './index.module.scss';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

export default function NavigatorLink() {

    const {activities} = useSelector(state => state);

    const router = useRouter();

    const handleOnHomeClick = () => {
        router.push("/");
    }

    const handleOnCityClick = () => {
        router.push(`/city/${activities.activityData.city.name}&=${activities.activityData.city.id}`);
    }

    console.log(activities.activityData.city.name)

    return (
        <div className={styles.NavigatorLink}>
            <span onClick={handleOnHomeClick}>Home</span><span>{">"}</span><span onClick={handleOnCityClick}>{activities.activityData.city.name}</span><span>{">"}</span>
        </div>
    );
}