import styles from './Login.module.css';

import header_logo from '../../images/header_logo.svg'

export default function Login() {
    return (
        <div className={styles.login}>
            <img src={header_logo} className={styles.login__logo} alt="" />
            <h2 className={styles.login__title}>Рады видеть!</h2>
            <form action="#" name='register' className={styles.login__form}>
                <div className={styles.login__container}>
                    <span className={styles.login__placeholder}>E-mail</span>
                    <input
                        type="text"
                        className={styles.login__input}
                        name="email"
                    />
                    <span className={styles.register__err_email}></span>
                </div>
                <div className={styles.login__container}>
                    <span className={styles.login__placeholder}>Пароль</span>
                    <input
                        type="password"
                        className={styles.login__input}
                        name="password"
                    />
                    <span className={styles.register__err_password}>Что-то пошло не так...</span>
                </div>
            </form>
            <button className={styles.login__submit} type="submit">Войти</button>
            <div className={styles.login__row}>
                <p className={styles.login__text}>Ещё не зарегистрированы?</p>
                <button className={styles.login__register} type="submit">Регистрация</button>
            </div>
        </div>
    )
}