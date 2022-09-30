import styles from './category.module.scss';
import ActivityCardList from '../../../../components/ActivityCardList/ActivityCardList';

export default function CategoryPage () {

    return (
        <div className={styles.CategoryPage}>
            <ActivityCardList />
        </div>
    )
}