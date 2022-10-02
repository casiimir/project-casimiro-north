import styles from './index.module.scss';
import {HiSearch} from 'react-icons/hi';
import { AiFillHome, AiFillCompass, AiOutlineStar, AiFillInfoCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from "next/router"
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Modal from '../Modal/Modal';
import Logo from '../../assets/Logo.png';
import GET from '../../utils/GET/GET';
import { IMPORT_URL } from '../../utils/GET/URL';
// import { POST, GET_CART } from '../../utils/GET/CART_METHOD';

export default function NavBar () {
    const searchRef = useRef(null);

    const {navBarStatus, modalVisibility} = useSelector(state => state)
    const dispatch = useDispatch();
    const router = useRouter();
    const [searchInput, setSearchInpt] = useState("")
    const data = useSelector((state) => state);

    console.log(data.activities.searchResults.data)

    const menu = [
        {
            name: 'Home',
            path: '/',
            icon: <AiFillHome className={styles.icon}/>
        },
        {
            name: 'My Trip',
            path: '/mytrip',
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
        searchRef.current.focus();

        if (navBarStatus.isInputActive === true) {
            dispatch({type: 'SET_INPUT_INACTIVE'})
            setSearchInpt(prev => prev = "")
        }    
    }

    const handleResultLinkClick = () => {
        dispatch({type: 'SET_INPUT_INACTIVE'})
        setSearchInpt(prev => prev = "")
    }

    const handleOverlayClick = () => {
        dispatch({type: 'SET_INPUT_INACTIVE'})
        setSearchInpt(prev => prev = "")
    }

    const handleLogoClick = () => {
        router.push('/');
        dispatch({type: 'SET_CLOSE'})
    }

    const handleOnChangeSearchInput = (e) => {
        setSearchInpt((prev) => prev = e.target.value)
        
    }

    useEffect(() => {
        if (navBarStatus.isActive === true ) {
            window.document.body.style.overflowY = 'hidden'
        } else {
            window.document.body.style.overflowY = 'scroll'
        }

    }, [navBarStatus.isActive])

    useEffect(() => {
        console.log(searchInput)
        console.log(data.activities.searchResults)
        if (searchInput.length > 3) {
            GET(IMPORT_URL.ACTIVITIES, `?text=${searchInput}`, dispatch, "SET_SEARCH_RESULTS")
            } else {
                dispatch({type: "CLEAN_SEARCH_RESULTS"})
            }

    }, [searchInput])

    // useEffect(() => {
    //     if (typeof window !== 'undefined' && !localStorage.getItem('cart_uuid')) {
    //     POST().then(data => {
    //         dispatch({type: "SET_UUID", payload: data.uuid})
    //         if (typeof window !== 'undefined') {
    //             localStorage.setItem('cart_uuid', data.uuid)
    //         }
    //     })
    // } 
    // }, [])

    return (
        <div className={styles.Main_Navbar}>
        <div className={styles.NavBar}>
            {/* <h2 onClick={handleLogoClick}>LOGO</h2> */}
            <img src={Logo.src} onClick={handleLogoClick} className={styles.logo} alt=""/>
            
            
            <div className={`${styles.menu} ${navBarStatus.isActive && styles.active}`}>
                <ul className={styles.navbar_list}>
                    {menu.map((item, index)=> 
                        <Link href={item.path} key={index}>
                            <li onClick={() => dispatch({type: 'SET_CLOSE'})} >
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
                    <input ref={searchRef} type='text' value={searchInput} onChange={(e) => handleOnChangeSearchInput(e)} className={`${styles.search_input} ${navBarStatus.isInputActive ? styles.active : ''}`} placeholder="Search"/>
                    <div className={`${styles.results} ${searchInput ? styles.active : ''}`} >
                        <ul>
                            {data?.activities?.searchResults?.data?.map((item) => <Link key={item.uuid} href={`/../activity/${item.uuid}`}><li  onClick={handleResultLinkClick}>{item.title}</li></Link>)}
                        </ul>
                    </div>
                </div>
                <div onClick={handleHamClick} className={styles.ham_btn}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>
            <div className={styles.overlay} onClick={handleOverlayClick} style={{display: navBarStatus.isInputActive ? 'block': 'none'}}/>
        </div>
        {modalVisibility && <Modal />}
        </div>
    )
}