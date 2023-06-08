import styles from './Techs.module.css';

export default function Techs() {
    return (
        <section className={styles.techs} id='techs'>
            <h2 className={styles.techs__title}>Технологии</h2>
            <div className={styles.container}>
                <h3 className={styles.container__title}>7 технологий</h3>
                <p className={styles.container__text}>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <ul className={styles.container__list}>
                    <li className={styles.container__item}>HTML</li>
                    <li className={styles.container__item}>CSS</li>
                    <li className={styles.container__item}>JS</li>
                    <li className={styles.container__item}>React</li>
                    <li className={styles.container__item}>Git</li>
                    <li className={styles.container__item}>Express.js</li>
                    <li className={styles.container__item}>mongoDB</li>
                </ul>
            </div>
        </section>
    )
}