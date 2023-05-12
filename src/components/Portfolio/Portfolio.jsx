import arrow from '../../images/arrow.svg'

import styles from './Portfolio.module.css';

export default function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <h2 className={styles.portfolio__title}>Портфолио</h2>
            <ul className={styles.portfolio__list}>
                <li className={styles.portfolio__item}>
                    <a className={styles.portfolio__text} href='https://github.com/VladimirPraxein/how-to-learn' target='_blank'>Статичный сайт</a>
                    <img className={styles.portfolio__icon} src={arrow}></img>
                </li>
                <li className={styles.portfolio__item}>
                    <a className={styles.portfolio__text} href='https://github.com/VladimirPraxein/russian-travel' target='_blank'>Адаптивный сайт</a>
                    <img className={styles.portfolio__icon} src={arrow}></img>
                </li>
                <li className={styles.portfolio__item}>
                    <a className={styles.portfolio__text} href='https://github.com/VladimirPraxein/react-mesto-api-full-gha' target='_blank'>Одностраничное приложение</a>
                    <img className={styles.portfolio__icon} src={arrow}></img>
                </li>
            </ul>
        </section>
    )
}