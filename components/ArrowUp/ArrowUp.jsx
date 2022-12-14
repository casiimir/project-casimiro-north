import styles from './index.module.scss';
import {IoMdArrowDropupCircle} from 'react-icons/io';
import { useEffect, useState, memo} from 'react';

export default memo(function ArrowUp() {

    const [isVisible, setIsVisible] = useState(false)

    const eventScrollUp = () => {
        
        if (window.scrollY > 400) {
            setIsVisible(true);
        } else if (window.scrollY === 0){
            setIsVisible(false);
        }  
    }

    const handleOnArrowClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => eventScrollUp())
        }
    return removeEventListener('scroll', () => eventScrollUp())
    },[])

    return (
        
        <div className={`${styles.arrow} ${isVisible ? styles.active : ''}`}>
            <IoMdArrowDropupCircle onClick={handleOnArrowClick} className={styles.icon}/>
            <div className={styles.overlay} />
        </div>

    )
})