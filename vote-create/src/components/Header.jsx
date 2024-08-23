import styles from "./Header.module.css";
import "../index.css";

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <h1>
                    <span className="a-color">Vote</span> Create
                </h1>
                <h2>Инструмент для проведения опросов</h2>
            </header>
        </div>
    );
}
