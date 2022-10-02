import styles from './index.module.scss';
import Logo from '../../assets/Logo.png';
import { AiFillTwitterCircle, AiFillGithub } from 'react-icons/ai';
import { MdFacebook } from 'react-icons/md';

export default function Footer() {

    return (
        <div className={styles.Footer}>
            <div className={styles.FooterContainer}>
                <img className={styles.logo} src={Logo.src} alt="logo"/>
                <div className={styles.icon_container}>
                    <MdFacebook className={styles.icon}/>
                    <AiFillTwitterCircle className={styles.icon}/>
                    <AiFillGithub className={styles.icon}/>
                </div>
            </div> 
            <p>Built with Next.js ❤️</p>    
        </div>
    )
}