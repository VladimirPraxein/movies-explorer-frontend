import styles from './Login.module.css';

import header_logo from '../../images/header_logo.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Login({ onLogin, errorLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        if (errorEmail || !email || !password) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [email, password, errorEmail])

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(password, email);
    }

    function handleChangeEmail(e) {
        if (!/\S+@\S+\.\S+/.test(e.target.value)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        setEmail(e.target.value);
    };

    return (
        <div className={styles.login}>
            <Link to="/" className={styles.login__logo}>
                <img src={header_logo} alt="" />
            </Link>
            <h2 className={styles.login__title}>Рады видеть!</h2>
            <form action="#" name='login' className={styles.login__form}>
                <div className={styles.login__container}>
                    <span className={styles.login__placeholder}>E-mail</span>
                    <input
                        type="text"
                        className={styles.login__input}
                        name="email"
                        required
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    {errorEmail && <span className={styles.login__err_email}>Что-то пошло не так...</span>}
                </div>
                <div className={styles.login__container}>
                    <span className={styles.login__placeholder}>Пароль</span>
                    <input
                        type="password"
                        className={styles.login__input}
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            {errorLogin && <span className={styles.login__errApi}>{errorLogin}</span>}
            <button
                className={disabledButton
                    ?
                    styles.login__submit
                    :
                    styles.login__submit_active}
                type="submit"
                onClick={handleSubmit}
                disabled={disabledButton}>
                Войти
            </button>
            <div className={styles.login__row}>
                <p className={styles.login__text}>Ещё не зарегистрированы?</p>
                <Link to="/signup">
                    <button className={styles.login__register} type="button">Регистрация</button>
                </Link>
            </div>
        </div>
    )
}