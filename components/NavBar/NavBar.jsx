import styles from './index.module.scss';
import {HiSearch} from 'react-icons/hi';
import { AiFillHome, AiFillCompass, AiOutlineStar, AiFillInfoCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router"
import Link from 'next/link';

export default function NavBar () {

    const {navBarStatus} = useSelector(state => state)
    const dispatch = useDispatch();
    const router = useRouter();

    console.log(router)

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
            name: 'Cart',
            path: '/cart',
            icon: <FaShoppingCart className={styles.icon}/>
        },
        {
            name: 'About us',
            path: '/aboutus',
            icon: <AiFillInfoCircle className={styles.icon}/>
        },

    ]

    const handleHamClick = () => {
        dispatch({type: 'SET_OPEN'})

        if (navBarStatus.isActive === true) {
            dispatch({type: 'SET_CLOSE'})
        }
    }

    const handleSearchClick = () => {
        dispatch({type: 'SET_INPUT_ACTIVE'})

        if (navBarStatus.isInputActive === true) {
            dispatch({type: 'SET_INPUT_INACTIVE'})
        }    
    }

    const handleOverlayClick = () => {
        dispatch({type: 'SET_INPUT_INACTIVE'})
    }

    const handleLogoClick = () => {
        router.push('/');
    }

    return (
        <div className={styles.Main_Navbar}>
        <div className={styles.NavBar}>
            <h2 onClick={handleLogoClick}>LOGO</h2>
            
            
            <div className={`${styles.menu} ${navBarStatus.isActive && styles.active}`}>
                <ul className={styles.navbar_list}>
                    {menu.map((item, index)=> 
                        <Link href={item.path} key={index}>
                            <li >
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                                <span className={`${styles.circle} ${router.asPath === item.path ? styles.active : ''}`}/>
                            </li>
                        </Link>
                    )}
                    
                    <div className={styles.row} >
        </div>

                </ul>
            </div>
            <div className={styles.navbar_container}>
                <div className={styles.search_container}>
                    <HiSearch onClick={handleSearchClick} className={`${styles.search_icon} ${navBarStatus.isInputActive ? styles.active : ''}`}/>
                    <input type='text' className={`${styles.search_input} ${navBarStatus.isInputActive ? styles.active : ''}`} placeholder="Search"/>
                </div>
                <div onClick={handleHamClick} className={styles.ham_btn}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className={styles.overlay} onClick={handleOverlayClick} style={{display: navBarStatus.isInputActive ? 'block': 'none'}}/>
        </div>
        
        </div>
    )
}