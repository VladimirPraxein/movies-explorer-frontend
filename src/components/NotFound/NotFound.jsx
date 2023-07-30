import { Link } from 'react-router-dom';

import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <h2 className={styles.notFound__title}>404</h2>
            <span className={styles.notFound__label}>Страница не найдена</span>
            <Link to="/" className={styles.notFound__back}>
                Назад
            </Link>
        </div >
    )
}