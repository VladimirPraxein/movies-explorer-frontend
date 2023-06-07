import styles from './MoviesCard.module.css'
import delete_icon from '../../images/delete_icon.svg';
import ok from '../../images/ok.svg';
import { useEffect, useState } from 'react';

export default function MoviesCard({ pageMovies, movie, onSaveMovie, savedMovies, onDeleteMovie }) {
    const [isSaved, setIsSaved] = useState(false);

    useEffect(() => {
        if (pageMovies) {
            setIsSaved(savedMovies.some((savedMovie) => savedMovie.movieId === movie.id))
        }
    }, [savedMovies, movie.id, pageMovies])

    function saveMovie(e) {
        e.preventDefault();
        onSaveMovie(movie);
        setIsSaved(true);
    }

    function deleteMovie(e) {
        e.preventDefault();
        if (pageMovies) {
            onDeleteMovie(savedMovies.filter((saveMovie) => saveMovie.movieId === movie.id).shift());
        } else {
            onDeleteMovie(savedMovies.filter((saveMovie) => saveMovie.movieId === movie.movieId).shift());
            console.log(movie)
        }

        setIsSaved(false);
    }
    console.log(movie.trailerLink)
    return (
        <li className={styles.card}>
            <div className={styles.card__header}>
                <h3 className={styles.card__name}>{movie.nameRU}</h3>
                <p className={styles.card__time}>{movie.duration}</p>
            </div>
            <a className={styles.card__link} href={movie.trailerLink} target='_blank'>
                <img className={styles.card__image} src={pageMovies ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image} alt='Постер фильма'></img>
            </a>
            {pageMovies ?
                !isSaved ?
                    <button className={styles.card__save} type='submit' onClick={saveMovie}>Сохранить</button>
                    :
                    <button className={styles.card__save_active} type='submit' onClick={deleteMovie}>
                        <img src={ok} alt='Фильм сохранен'></img>
                    </button>
                :
                <button className={styles.card__delete} type='submit' onClick={deleteMovie}>
                    <img src={delete_icon} alt="Удалить фильм" />
                </button>
            }

        </li >
    )
}