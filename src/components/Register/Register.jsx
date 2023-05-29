import styles from './Register.module.css';

import header_logo from '../../images/header_logo.svg'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register({ onRegister, errorRegister }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {
        if (errorEmail || errorName || !name || !email || !password) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [name, email, password, errorEmail, errorName])

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(name, password, email);
    }

    function handleChangeEmail(e) {
        if (!/\S+@\S+\.\S+/.test(e.target.value)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        setEmail(e.target.value);
    };

    function handleChangeName(e) {
        if (/[^a-zа-яё\- ]/iu.test(e.target.value)) {
            setErrorName(true);
        } else {
            setErrorName(false);
        }
        setName(e.target.value);
    };

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
                        required
                        value={name}
                        onChange={handleChangeName}
                    />
                    {errorName && <span className={styles.register__err}>Что-то пошло не так...</span>}
                </div>
                <div className={styles.regiser__container}>
                    <span className={styles.regiser__placeholder}>E-mail</span>
                    <input
                        type="text"
                        className={styles.regiser__input}
                        name="email"
                        required
                        value={email}
                        onChange={handleChangeEmail}
                    />
                    {errorEmail && <span className={styles.register__err}>Что-то пошло не так...</span>}
                </div>
                <div className={styles.regiser__container}>
                    <span className={styles.regiser__placeholder}>Пароль</span>
                    <input
                        type="password"
                        className={styles.regiser__input}
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </form>
            {errorRegister && <span className={styles.register__errApi}>{errorRegister}</span>}
            <button
                className={disabledButton
                    ?
                    styles.regiser__submit
                    :
                    styles.regiser__submit_active}
                type="submit"
                onClick={handleSubmit}
                disabled={disabledButton}>
                Зарегистрироваться
            </button>
            <div className={styles.regiser__row}>
                <p className={styles.regiser__text}>Уже зарегистрированы?</p>
                <Link to="/signin">
                    <button className={styles.regiser__login} type="button">Войти</button>
                </Link>
            </div>
        </div>
    )
}