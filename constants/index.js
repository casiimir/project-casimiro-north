// export const pippo = "ciao";    ---sample of variables
import MarcoImg from "../assets/marco.jpg";
import MartinaImg from "../assets/martina.jpg";
import NoemiImg from "../assets/noemi.jpg";
import RichardImg from "../assets/richard.jpg";
import EleonoraImg from "../assets/eleonora.jpg";
import { AiFillHome, AiFillCompass, AiOutlineStar, AiFillInfoCircle } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import styles from '../components/NavBar/index.module.scss';

export const developersData = [
  {
    personalImg: NoemiImg.src,
    name: "Noemi Fazio",
    description: "Front-end Developer",
    liprofile: "https://www.linkedin.com/in/noemi-fazio/",
    ghprofile: "https://github.com/Waterlilyrr",
  },
  {
    personalImg: MarcoImg.src,
    name: "Marco Guglielmino",
    description: "Front-end Developer",
    liprofile: "https://www.linkedin.com/in/marco-guglielmino/",
    ghprofile: "https://github.com/marco94gug",
  },
  {
    personalImg: RichardImg.src,
    name: "Richard Mangano",
    description: "Front-end Developer",
    liprofile: "https://www.linkedin.com/in/drichard-mangano/",
    ghprofile: "https://github.com/SeferMetatron",
  },

  {
    personalImg: MartinaImg.src,
    name: "Martina Venasco",
    description: "Front-end Developer, Visual Designer",
    liprofile: "https://www.linkedin.com/in/martina-venasco/",
    ghprofile: "https://github.com/MartinaVenasco",
  },
  {
    personalImg: EleonoraImg.src,
    name: "Eleonora Rizzitello",
    description: "Front-end Developer",
    liprofile: "https://www.linkedin.com/in/eleonora-rizzitello/",
    ghprofile: "https://github.com/elerizz",
  },
];

export const menu = [
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
