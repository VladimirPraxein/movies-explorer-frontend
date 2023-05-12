import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.footer__title}>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className={styles.container}>
                <p className={styles.container__year}>© 2020</p>
                <ul className={styles.container__list}>
                    <li className={styles.container__item}>
                        <a className={styles.container__link} href='https://practicum.yandex.ru/' target='_blank'>Яндекс.Практикум</a>
                    </li>
                    <li className={styles.container__item}>
                        <a className={styles.container__link} href='https://github.com/VladimirPraxein' target='_blank'>Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}