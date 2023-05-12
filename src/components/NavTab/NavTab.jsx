import styles from './NavTab.module.css';

export default function NavTab() {
    return (
        <section className={styles.navTab}>
            <ul className={styles.navTab__list}>
                <li className={styles.navTab__item}>
                    <a className={styles.navTab__link} href='#aboutProject'>О проекте</a>
                </li>
                <li className={styles.navTab__item}>
                    <a className={styles.navTab__link} href='#techs'>Технологии</a>
                </li>
                <li className={styles.navTab__item}>
                    <a className={styles.navTab__link} href='#aboutMe'>Студент</a>
                </li>
            </ul>
        </section>
    )
}