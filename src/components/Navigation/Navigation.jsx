import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import profile from '../../images/profile.svg'

import styles from './Navigation.module.css';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    function openNavigation() {
        setIsOpen(!isOpen)
    }
    return (
        <React.Fragment>
            <div className={`${styles.background} ${isOpen ? styles.background_active : ''}`}>
                <div className={styles.navigation}>
                    <ul className={styles.navigation__container}>
                        <li className={styles.navigation__item}>
                            <Link to="/" className={location.pathname === '/' ? styles.navigation__main_active : styles.navigation__main}>
                                Главная
                            </Link>
                        </li>
                        <li className={styles.navigation__item}>
                            <Link to="/movies" className={location.pathname === '/movies' ? styles.navigation__films_active : styles.navigation__films}>
                                Фильмы
                            </Link>
                        </li>
                        <li className={styles.navigation__item}>
                            <Link to="/saved-movies" className={location.pathname === '/saved-movies' ? styles.navigation__savedFilms_active : styles.navigation__savedFilms}>
                                Сохранённые фильмы
                            </Link>
                        </li>

                    </ul>
                    <Link to="/profile" className={styles.navigation__profile}>
                        <p className={styles.navigation__account}>Аккаунт</p>
                        <img src={profile} className={styles.navigation__icon} alt='Иконка головы'></img>
                    </Link>
                </div>
            </div>
            <div className={`${styles.container} ${isOpen ? styles.container_active : ''}`} onClick={() => openNavigation()}>
                <div className={`${styles.burger} ${isOpen ? styles.burgerActive : ''}`} ></div>
            </div>
        </React.Fragment>
    )
}