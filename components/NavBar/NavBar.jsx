import styles from "./index.module.scss";
import { HiSearch } from "react-icons/hi";
import { FaShoppingCart } from "react-icons/fa";
import { RiUserSharedLine, RiUserFill } from "react-icons/ri";
import Logo from "../../assets/Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useRef, useState, memo } from "react";
import ArrowUp from "../ArrowUp";
import Link from "next/link";
import Modal from "../Modal/Modal";
import ModalLogin from "../ModalLogin";
import GET from "../../utils/GET/GET";
import { IMPORT_URL } from "../../utils/GET/URL";
import { userData } from "../../services/auth_google";
import {
  AiFillHome,
  AiFillCompass,
  AiOutlineStar,
  AiFillInfoCircle,
} from "react-icons/ai";

export default memo(function NavBar({ lang, currency }) {
  const searchRef = useRef(null);
  const [isScrollDown, setIsScrollDown] = useState(false);

  const {
    navBarStatus,
    modalVisibility,
    cartData,
    activities,
    loginModalVisibility,
    user_data,
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();
  const [searchInput, setSearchInpt] = useState("");
  const data = useSelector((state) => state);

  const menu = [
    {
      name: "Home",
      path: "/",
      icon: <AiFillHome className={styles.icon} />,
    },
    {
      name: "My Trip",
      path: "/mytrip",
      icon: <AiFillCompass className={styles.icon} />,
    },
    {
      name: "Favorites",
      path: "/favorites",
      icon: <AiOutlineStar className={styles.icon} />,
      quantity: activities.favorites?.length,
    },
    {
      name: "Cart",
      path: "/cart",
      icon: <FaShoppingCart className={styles.icon} />,
      quantity: cartData.cartList?.length,
    },
    {
      name: "About us",
      path: "/aboutus",
      icon: <AiFillInfoCircle className={styles.icon} />,
    },
  ];

  const eventScrollDown = () => {
    if (window.scrollY > 400) {
      setIsScrollDown(true);
    } else if (window.scrollY < 400) {
      setIsScrollDown(false);
    }
  };

  const handleHamClick = () => {
    dispatch({ type: "SET_OPEN" });

    if (navBarStatus.isActive === true) {
      dispatch({ type: "SET_CLOSE" });
    }
  };

  const handleSearchClick = () => {
    dispatch({ type: "SET_INPUT_ACTIVE" });
    searchRef.current.focus();

    if (navBarStatus.isInputActive === true) {
      dispatch({ type: "SET_INPUT_INACTIVE" });
      setSearchInpt((prev) => (prev = ""));
    }
  };

  const handleResultLinkClick = () => {
    dispatch({ type: "SET_INPUT_INACTIVE" });
    setSearchInpt((prev) => (prev = ""));
  };

  const handleOverlayClick = () => {
    dispatch({ type: "SET_INPUT_INACTIVE" });
    setSearchInpt((prev) => (prev = ""));
  };

  const handleLogoClick = () => {
    router.push("/");
    dispatch({ type: "SET_CLOSE" });
  };

  const handleOnChangeSearchInput = (e) => {
    setSearchInpt((prev) => (prev = e.target.value));
  };

  const handleOnClickLog = () => {
    dispatch({ type: "SET_CLOSE" });
    dispatch({ type: "SET_LOGIN_TRUE" });
  };

  useEffect(() => {
    if (navBarStatus.isActive === true) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [navBarStatus.isActive]);

  useEffect(() => {
    if (searchInput.length >= 3) {
      GET(
        IMPORT_URL.SEARCH,
        `?activity_limit=10&text=${searchInput}`,
        dispatch,
        "SET_SEARCH_RESULTS",
        lang,
        currency
      );
    } else {
      dispatch({ type: "CLEAN_SEARCH_RESULTS", lang, currency });
    }
  }, [searchInput, lang, currency]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => eventScrollDown());
    }
    return removeEventListener("scroll", () => eventScrollDown());
  }, []);

  useEffect(() => {
    userData &&
      dispatch({
        type: "SET_USERNAME",
        payload: userData.user.displayName.split(" ")[0],
      });
  }, [userData]);

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      dispatch({
        type: "RESTORE_CART",
        payload: JSON.parse(localStorage.getItem("cart")),
      });
    }

    if (localStorage.getItem("favorites")) {
      dispatch({
        type: "RESTORE_FAVORITE",
        payload: JSON.parse(localStorage.getItem("favorites")),
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(activities.favorites));
  }, [activities.favorites]);

  return (
    <>
      <div
        className={`${styles.Main_Navbar} ${isScrollDown ? styles.active : ""}`}
      >
        <div className={styles.NavBar}>
          <img
            src={Logo.src}
            onClick={handleLogoClick}
            className={styles.logo}
            alt=""
          />
          <div
            className={`${styles.menu} ${
              navBarStatus.isActive && styles.active
            }`}
          >
            <ul className={styles.navbar_list}>
              {menu.map((item, index) => (
                <Link href={item.path} key={index}>
                  <li onClick={() => dispatch({ type: "SET_CLOSE" })}>
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                    <span
                      style={
                        item.name === "Cart" && cartData.cartList?.length === 0
                          ? { background: "none" }
                          : {} &&
                            item.name === "Favorites" &&
                            activities.favorites?.length === 0
                          ? { background: "none" }
                          : {}
                      }
                      className={styles.quantity}
                    >
                      {item.quantity ? item.quantity : null}
                    </span>
                    <span
                      className={`${styles.circle} ${
                        router.asPath === item.path ? styles.active : ""
                      }`}
                    />
                  </li>
                </Link>
              ))}
              <div onClick={handleOnClickLog} className={styles.user_box}>
                {!user_data.userName.length ? (
                  <>
                    <RiUserSharedLine className={styles.user_icon} />
                    <span className={styles.user_name}>Login</span>
                  </>
                ) : (
                  <>
                    <RiUserFill className={styles.user_icon} />
                    <span className={styles.user_name}>
                      {user_data.userName}
                    </span>
                  </>
                )}
              </div>

              <div className={styles.row}></div>
            </ul>
          </div>
          <div className={styles.navbar_container}>
            <div className={styles.search_container}>
              <HiSearch
                onClick={handleSearchClick}
                className={`${styles.search_icon} ${
                  navBarStatus.isInputActive ? styles.active : ""
                }`}
              />
              <input
                ref={searchRef}
                type="text"
                value={searchInput}
                onChange={(e) => handleOnChangeSearchInput(e)}
                className={`${styles.search_input} ${
                  navBarStatus.isInputActive ? styles.active : ""
                }`}
                placeholder="Search"
              />
              <div
                className={`${styles.results} ${
                  searchInput ? styles.active : ""
                }`}
              >
                <ul>
                  {data?.activities?.searchResults[0]?.items?.map((item) => (
                    <Link key={item.uuid} href={`/../activity/${item.id}`}>
                      <li onClick={handleResultLinkClick}>{item.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div onClick={handleHamClick} className={styles.ham_btn}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.overlay}
        onClick={handleOverlayClick}
        style={
          navBarStatus.isInputActive
            ? { display: "block" }
            : { display: "none", pointerEvents: "none" }
        }
      />
      <ArrowUp />
      {modalVisibility && <Modal />}
      {loginModalVisibility && <ModalLogin />}
    </>
  );
});
