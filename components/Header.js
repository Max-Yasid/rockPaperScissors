import styles from '../styles/header.module.css';

export default function Header(props){
    return (
        <header className={`${styles["header-container"]}`}>
            <div className={`${styles.content}`}>
                <section className={`${styles.listContainer}`}>
                    <ul className={styles.list}>
                        <li className={styles.itemList}>ROCK</li>
                        <li className={styles.itemList}>PAPER</li>
                        <li className={styles.itemList}>SCISSORS</li>
                        <li className={styles.itemList}>LIZARD</li>
                        <li className={styles.itemList}>SPOCK</li>
                    </ul>
                </section>
                <section>
                    <div className={styles.scoreBox}>
                        <section className={`${styles.scoreTitle}`}>SCORE</section>
                        <section className={`${styles.score} d-flex align-items-end justify-content-center`}>{props.score}</section>
                    </div>
                </section>
            </div>
        </header>
    );
}