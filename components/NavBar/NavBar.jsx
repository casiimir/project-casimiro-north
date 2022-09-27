import styles from './index.module.scss';
import {HiSearch} from 'react-icons/hi';
import { AiFillHome, AiFillCompass, AiOutlineStar, AiFillInfoCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

export default function NavBar () {

    const {navBarStatus} = useSelector(state => state)
    const dispatch = useDispatch();

    const menu = [
        {
            name: 'Home',
            path: '/',
            icon: <AiFillHome className={styles.icon}/>
        },
        {
            name: 'Discover',
            path: '/discover',
            icon: <AiFillCompass className={styles.icon}/>
        },
        {
            name: 'Favorites',
            path: '/favorites',
            icon: <AiOutlineStar className={styles.icon}/>
        },
        {
            name: 'About us',
            path: '/aboutus',
            icon: <AiFillInfoCircle className={styles.icon}/>
        },
        {
            name: 'Cart',
            path: '/cart',
            icon: <FaShoppingCart className={styles.icon}/>
        }
    ]

    const handleHamClick = () => {
        dispatch({type: 'SET_OPEN'})

        if (navBarStatus.isActive === true) {
            dispatch({type: 'SET_CLOSE'})
        }
    }

    return (
        <div className={styles.NavBar}>
            <h2>LOGO</h2>
            <div className={styles.navbar_container}>
                <HiSearch className={styles.search_icon}/>
                <div onClick={handleHamClick} className={styles.ham_btn}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className={`${styles.menu} ${navBarStatus.isActive && styles.active}`}>
                <ul className={styles.navbar_list}>
                    {menu.map((item, index)=> <li key={index}><span>{item.icon}</span><span>{item.name}</span></li>)}
                </ul>
            </div>
        </div>
    )
}