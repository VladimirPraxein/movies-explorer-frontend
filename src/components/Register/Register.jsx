import styles from './Register.module.css';

import header_logo from '../../images/header_logo.svg'

export default function Register() {
    return (
        <div className={styles.regiser}>
            <img src={header_logo} className={styles.regiser__logo} alt="" />
            <h2 className={styles.regiser__title}>Добро пожаловать!</h2>
            <form action="#" name='register' className={styles.regiser__form}>
                <div className={styles.regiser__container}>
                    <span className={styles.regiser__placeholder}>Имя</span>
                    <input
                        type="text"
                        className={styles.regiser__input}
                        name="name"
                    />
                    <span className={styles.register__err_name}></span>
                </div>
                <div className={styles.regiser__container}>
                    <span className={styles.regiser__placeholder}>E-mail</span>
                    <input
                        type="text"
                        className={styles.regiser__input}
                        name="email"
                    />
                    <span className={styles.register__err_email}></span>
                </div>
                <div className={styles.regiser__container}>
                    <span className={styles.regiser__placeholder}>Пароль</span>
                    <input
                        type="password"
                        className={styles.regiser__input}
                        name="password"
                    />
                    <span className={styles.register__err_password}>Что-то пошло не так...</span>
                </div>
            </form>
            <button className={styles.regiser__submit} type="submit">Зарегистрироваться</button>
            <div className={styles.regiser__row}>
                <p className={styles.regiser__text}>Уже зарегистрированы?</p>
                <button className={styles.regiser__login} type="submit">Войти</button>
            </div>
        </div>
    )
}