import { Link } from 'react-router-dom'
import NavigationMain from '../NavigationMain/NavigationMain';
import Navigation from '../Navigation/Navigation';

import header_logo from '../../images/header_logo.svg'

import styles from './Header.module.css';

export default function Header({loggedIn}) {
    return (
        <header className={`${styles.header} ${loggedIn ? styles.header_active : ''}`}>
            <Link to="/" className={styles.header__logo}>
                <img src={header_logo} alt='Логотип'></img>
            </Link>
            {
                loggedIn ?
                    <Navigation /> :
                    <NavigationMain />
            }
        </header>
    )
}