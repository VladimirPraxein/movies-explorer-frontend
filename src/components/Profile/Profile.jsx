import React from 'react';

import Header from '../Header/Header';
import styles from './Profile.module.css';

export default function Profile() {
    return (
        <React.Fragment>
            <Header></Header>
            <div className={styles.profile}>
                <h1 className={styles.profile__title}>Привет, Виталий!</h1>
                <form action="#" name='profile' className={styles.profile__form}>
                    <input
                        type="text"
                        className={`${styles.profile__input} ${styles.profile__name}`}
                        name="name"
                        placeholder='Имя'
                        required
                    />
                    <input
                        type="text"
                        className={`${styles.profile__input} ${styles.profile__email}`}
                        name="email"
                        placeholder='E-mail'
                        required
                    />
                </form>
                <button className={styles.profile__edit} type="button">Редактировать</button>
                <button className={styles.profile__exit} type="button">Выйти из аккаунта</button>
            </div>
        </React.Fragment>
    )
}