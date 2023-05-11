import MoviesCard from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.css';

export default function MoviesCardList({ pageMovies }) {
    return (
        <section className={styles.cards}>
            <ul className={styles.cards__list}>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
                <MoviesCard pageMovies={pageMovies}></MoviesCard>
            </ul>
            <button type='button' className={`${styles.button} ${pageMovies ? styles.button_active : ''}`}>Ещё</button>
        </section>
    )
}