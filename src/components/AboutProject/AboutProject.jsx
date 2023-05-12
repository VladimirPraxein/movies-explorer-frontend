import styles from './AboutProject.module.css';

export default function AboutProject() {
    return (
        <section className={styles.aboutProject} id='aboutProject'>
            <h2 className={styles.aboutProject__title}>О проекте</h2>
            <ul className={styles.info}>
                <li className={styles.info__item}>
                    <h3 className={styles.info__title}>Дипломный проект включал 5 этапов</h3>
                    <p className={styles.info__text}>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </li>
                <li className={styles.info__item}>
                    <h3 className={styles.info__title}>На выполнение диплома ушло 5 недель</h3>
                    <p className={styles.info__text}>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </li>
            </ul>
            <div className={styles.aboutProject__container}>
                <div className={styles.aboutProject__backend}>
                    <p className={styles.aboutProject__time_backend}>1 неделя</p>
                    <p className={styles.aboutProject__label}>Back-end</p>
                </div>
                <div className={styles.aboutProject__frontend}>
                    <p className={styles.aboutProject__time_frontend}>4 недели</p>
                    <p className={styles.aboutProject__label}>Front-end</p>
                </div>
            </div>
        </section>
    )
}