import styles from './MainHeader.module.css';
import logo from '../assets/logo.svg'

export function MainHeader() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logotipo do ToDo" />
        </header>
    );
}