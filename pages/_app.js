import Head from 'next/head'
import '../styles/globals.css'
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import store from '../store';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
  <ParallaxProvider>
    <Provider store={store}>
      <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </ParallaxProvider>
  )
}

export default MyApp
