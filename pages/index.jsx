import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState} from 'react';
import useFetch  from '../utils/useFetch/useFetch';
import { IMPORT_URL } from '../utils/useFetch/URL';
import NavBar from '../components/NavBar';

export default function Home() {
  // const dispatch = useDispatch();
  // const {cartData, cities} = useSelector(state => state)

  // useEffect(() => {
  //     useFetch(IMPORT_URL.CITIES, 1, dispatch, "SET_CITY" )
  // }, [])

  // console.log(cartData)
  // const handleOnClick = () => {
  //   console.log('cliccato')
  //   dispatch({type: "ADD_PRODUCT", payload: cities.cityData.name});
  //   console.log(cities.cityData)
  // }

  // const deleteTest = (id) => {
  //   dispatch({type: "REMOVE_PRODUCT", payload: id});
  // }

  return (
    <div className={styles.container}>
      <NavBar />
      {/* <h1>Prova</h1>
      <button onClick={handleOnClick}>Add</button>
      {cartData.cartList.map((el, index) => <li onClick={() => deleteTest(index)}>{el}</li>)} */}
      <CityCardList />
    </div>
  );
}
