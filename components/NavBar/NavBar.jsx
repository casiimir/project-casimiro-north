import styles from './index.module.scss';
import {HiSearch} from 'react-icons/hi';

export default function NavBar () {

    return (
        <div className={styles.NavBar}>
            <h2>LOGO</h2>
            <div className={styles.navbar_container}>
                <HiSearch className={styles.search_icon}/>
                <div className={styles.ham_btn}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>
    )
}