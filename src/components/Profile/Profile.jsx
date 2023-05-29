import React, { useContext, useEffect, useState } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext'

import Layout from '../Layout/Layout';
import styles from './Profile.module.css';
import { Link } from 'react-router-dom';

export default function Profile({ loggedIn, onUpdateUser, errorUpdateUser, setErrorUpdateUser, succesUpdateUser, setSuccesUpdateUser, signOut }) {
    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorName, setErrorName] = useState(false);
    const [disabledButton, setDisabledButton] = useState(true);

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
        if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(e.target.value)) {
            setErrorEmail(true);
        } else {
            setErrorEmail(false);
        }
        setSuccesUpdateUser('');
        setErrorUpdateUser('');
        setEmail(e.target.value);
    };

    function handleChangeName(e) {
        if (/[^a-zа-яё\- ]/iu.test(e.target.value)) {
            setErrorName(true);
        } else {
            setErrorName(false);
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
                    />
                    {errorName && <span className={styles.profile__err}>Что-то пошло не так...</span>}
                    <input
                        type="text"
                        className={`${styles.profile__input} ${styles.profile__email}`}
                        name="email"
                        placeholder='E-mail'
                        required
                        onChange={handleChangeEmail}
                    />
                    {errorEmail && <span className={styles.profile__err}>Что-то пошло не так...</span>}
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