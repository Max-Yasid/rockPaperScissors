import Head from 'next/head';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import RulesModal from '../components/modal';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  let [deviceWidth, setdeviceWidth] = useState();
  let [isModalShowing, setModalStatus] = useState(true);
  let [score, setScore] = useState(0);
  useEffect(() => {
    setdeviceWidth(screen.width);
    let storedScore = parseInt(localStorage.getItem('score'));
    if(storedScore){
      setScore(storedScore);
    }
  }, []);
  let toggleModal = () => {
    setModalStatus(!isModalShowing);
  }
  let closeModal = () => {
    setModalStatus(false);
  }
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header  score={score}/>
      <Component {...pageProps} score={score} setScore={setScore} deviceWidth={deviceWidth} />
      <Footer toggleModal={toggleModal}/>
      <RulesModal closeModal={closeModal} isModalShowing={isModalShowing}></RulesModal>
    </>
  )
};

export default MyApp;
