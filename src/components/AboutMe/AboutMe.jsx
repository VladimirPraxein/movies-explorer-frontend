import author from '../../images/author.png'

import styles from './AboutMe.module.css';

export default function AboutMe() {
    return (
        <section className={styles.aboutMe} id='aboutMe'>
            <h2 className={styles.aboutMe__title}>Студент</h2>
            <div className={styles.container}>
                <div className={styles.container__info}>
                    <h3 className={styles.container__name}>Виталий</h3>
                    <p className={styles.container__work}>Фронтенд-разработчик, 30 лет</p>
                    <p className={styles.container__text}>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                        Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                    </p>
                    <a className={styles.container__link} href='https://github.com/VladimirPraxein'>Github</a>
                </div>
                <img className={styles.container__image} src={author} alt="Фото автора" />
            </div>
        </section>
    )
}