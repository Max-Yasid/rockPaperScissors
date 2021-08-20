import styles from '../styles/footer.module.css';

export default function Footer(props){
    return (
        <footer className={styles.footerContainer}>
            <button onClick={props.toggleModal} className={styles.rulesButton}>RULES</button>
        </footer>
    );
}