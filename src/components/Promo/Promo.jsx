import promo_logo from '../../images/promo_logo.svg'

import styles from './Promo.module.css';

export default function Promo() {
    return (
        <section className={styles.promo}>
            <img src={promo_logo} className={styles.promo__logo}></img>
            <h1 className={styles.promo__title}>Учебный проект студента факультета Веб-разработки.</h1>
        </section>
    )
}