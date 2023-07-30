import React from 'react';
import { Link } from 'react-router-dom'

import styles from './NavigationMain.module.css';

export default function NavigationMain() {
    return (
        <React.Fragment>
            <Link to="/signup" className={styles.header__register}>
                Регистрация
            </Link>
            <Link to="/signin" className={styles.header__login}>
                Войти
            </Link>
        </React.Fragment>
    )
}