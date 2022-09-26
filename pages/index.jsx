import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'

export default function Home() {

  const {cartData} = useSelector(state => state)

  const dispatch = useDispatch();

  console.log(cartData)

  const handleOnClick = () => {
    console.log('cliccato')
    dispatch({type: "ADD_PRODUCT", payload: "Catania"});
  }

  const deleteTest = (id) => {
    dispatch({type: "REMOVE_PRODUCT", payload: id});
  }

  return (
    <div className={styles.container}>
      <h1>Prova</h1>
      <button onClick={handleOnClick}>Add</button>
      {cartData.cartList.map((el, index) => <li onClick={() => deleteTest(index)}>{el}</li>)}
     
    </div>
  )
}
