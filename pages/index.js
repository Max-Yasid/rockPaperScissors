import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import GameItem from '../components/gameItem';
import getGameItemProperties from '../utils/gameItemProperties';

export default function Home({ deviceWidth }){
  let pentagonWidth = 300;
  let pentagonHeight = 300;
  if(deviceWidth <= 375){
    pentagonWidth = 200;
    pentagonHeight = 200;
  }
  let scissorsProperties = getGameItemProperties("scissors");
  let papperProperties = getGameItemProperties('papper');
  let rockProperties = getGameItemProperties('rock');
  let lizardProperties = getGameItemProperties('lizard');
  let spockProperties = getGameItemProperties('spock');
    return (
    <div className={`${styles.container} w-100`}>
      <Head>
        <title>Rock, papers, scissors</title>
        <meta name="description" content="Rock, papper, scissors, lizard, spock game. Frontend Mentor challenge." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600;700&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className={`${styles.gameContent}`}>
          <div className={`${styles.pentagonContainer}`}>
            <Image className={styles.pentagon} src="/images/bg-pentagon.svg" width={pentagonWidth} height={pentagonHeight} alt="pentagon"/>
            <div className={`${styles.gameItemContainer} ${styles.scissors}`}>
              <GameItem item={scissorsProperties.item} color={scissorsProperties.color} shadowColor={scissorsProperties.shadowColor} className={styles.gameItem} src={scissorsProperties.src}/>
            </div>
            <div className={`${styles.gameItemContainer} ${styles.papper}`}>
              <GameItem item={papperProperties.item} color={papperProperties.color} shadowColor={papperProperties.shadowColor} className={styles.gameItem} src={papperProperties.src}/>
            </div>
              <div className={`${styles.gameItemContainer} ${styles.rock}`}>
                <GameItem item={rockProperties.item} color={rockProperties.color} shadowColor={rockProperties.shadowColor} className={styles.gameItem} src={rockProperties.src}/>
            </div>
              <div className={`${styles.gameItemContainer} ${styles.lizard}`}>
                <GameItem item={lizardProperties.item} color={lizardProperties.color} shadowColor={lizardProperties.shadowColor} className={styles.gameItem} src={lizardProperties.src}/>
            </div>
              <div className={`${styles.gameItemContainer} ${styles.spock}`}>
                <GameItem item={spockProperties.item} color={spockProperties.color} shadowColor={spockProperties.shadowColor} className={styles.gameItem} src={spockProperties.src}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
