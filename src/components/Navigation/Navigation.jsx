import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../images/profile.svg'

import styles from './Navigation.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    function openNavigation() {

        setIsOpen(!isOpen)
    }
    return (
        <React.Fragment>
            <div className={`${styles.background} ${isOpen ? styles.background_active : ''}`}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation__container}>
                        <li className={styles.navigation__item}>
                            <Link to="/" className={styles.navigation__main}>
                                Главная
                            </Link>
                        </li>
                        <li className={styles.navigation__item}>
                            <Link to="/movies" className={styles.navigation__films}>
                                Фильмы
                            </Link>
                        </li>
                        <li className={styles.navigation__item}>
                            <Link to="/saved-movies" className={styles.navigation__savedFilms}>
                                Сохранённые фильмы
                            </Link>
                        </li>

                    </ul>
                    <Link to="/profile" className={styles.navigation__profile}>
                        <p className={styles.navigation__account}>Аккаунт</p>
                        <img src={profile} className={styles.navigation__icon}></img>
                    </Link>
                </div>
            </div>
            <div className={`${styles.container} ${isOpen ? styles.container_active : ''}`} onClick={() => openNavigation()}>
                <div className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} ></div>
            </div>
        </React.Fragment>
    )
}