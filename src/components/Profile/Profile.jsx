import React, { useContext, useEffect, useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import Layout from '../Layout/Layout';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

export default function Profile({ loggedIn, onUpdateUser, errorUpdateUser, setErrorUpdateUser, succesUpdateUser, setSuccesUpdateUser, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
    const [disabledButton, setDisabledButton] = useState(true);
    console.log(currentUser)
    useEffect(() => {
        if (errorEmail || errorName || !name || !email || (name === currentUser.name && email === currentUser.email)) {
            setDisabledButton(true)
        } else {
            setDisabledButton(false)
        }
    }, [name, email, errorEmail, errorName, currentUser])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(name, email);
    }

    function handleChangeEmail(e) {
        if (!/\S+@\S+\.\S+/.test(e.target.value)) {
            setErrorEmail('Введите корректный email');
        } else {
            setErrorEmail('');
        }
        setSuccesUpdateUser('');
        setErrorUpdateUser('');
        setEmail(e.target.value);
    };

    function handleChangeName(e) {
        if (/[^a-zа-яё\- ]/iu.test(e.target.value)) {
            setErrorName('Можно использовать только латиницу, кириллицу, пробел или дефис');
        } else if (e.target.value.length < 2) {
            setErrorName('Минимальная длина 2 символа');
        } else if (e.target.value.length > 30) {
            setErrorName('Максимальная длина 30 символов');
        } else {
            setErrorName('');
        }
        setSuccesUpdateUser('');
        setErrorUpdateUser('');
        setName(e.target.value);
    };

    return (
        <Layout loggedIn={loggedIn} available={false}>
            <div className={styles.profile}>
                <h1 className={styles.profile__title}>Привет, {currentUser.name}!</h1>
                <form action="#" name='profile' className={styles.profile__form}>
                    <input
                        type="text"
                        className={`${styles.profile__input} ${styles.profile__name}`}
                        name="name"
                        placeholder='Имя'
                        required
                        onChange={handleChangeName}
                        defaultValue={currentUser.name}
                    />
                    {errorName && <span className={styles.profile__err}>{errorName}</span>}
                    <input
                        type="text"
                        className={`${styles.profile__input} ${styles.profile__email}`}
                        name="email"
                        placeholder='E-mail'
                        required
                        onChange={handleChangeEmail}
                        defaultValue={currentUser.email}
                    />
                    {errorEmail && <span className={styles.profile__err}>{errorEmail}</span>}
                </form>
                {errorUpdateUser && <span className={styles.profile__errApi}>{errorUpdateUser}</span>}
                {succesUpdateUser && <span className={styles.profile__success}>{succesUpdateUser}</span>}
                <button
                    className={disabledButton
                        ?
                        styles.profile__edit
                        :
                        styles.profile__edit_active}
                    type="submit"
                    onClick={handleSubmit}
                    disabled={disabledButton}>
                    Редактировать
                </button>
                <Link to="/">
                    <button className={styles.profile__exit} type="button" onClick={signOut}>Выйти из аккаунта</button>
                </Link>
            </div>
        </Layout>
    )
}