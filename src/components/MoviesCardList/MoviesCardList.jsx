import React, { useEffect } from 'react';
import MoviesCard from '../MoviesCard/MoviesCard';
import styles from './MoviesCardList.module.css';

import { timeResizeScreen } from '../../utils/constants';

export default function MoviesCardList({
    pageMovies,
    isFilteredMovies,
    filteredMovies,
    errorMovies,
    amountMovies,
    onChangeMoviesOnPage,
    onSaveMovie,
    savedMovies,
    isFilteredSavedMovies,
    onDeleteMovie,
    onShowMoreMovies,
    filteredSavedMovies,
}) {
    useEffect(() => {
        if (pageMovies) {
            let timer;
            const handleChangeWidthScreenTimer = () => {
                timer = setTimeout(onChangeMoviesOnPage, timeResizeScreen);
            };
            window.addEventListener("resize", handleChangeWidthScreenTimer);
            return () => {
                window.removeEventListener("resize", handleChangeWidthScreenTimer);
                clearTimeout(timer);
            };
        }
    });
    
    return (
        pageMovies
            ?
            !isFilteredMovies
                ?
                <p className={styles.cards__text}>Начните поиск</p>
                :
                errorMovies
                    ?
                    <p className={styles.cards__text}>{errorMovies}</p>
                    :
                    filteredMovies.length
                        ?
                        < section className={styles.cards} >
                            <ul className={styles.cards__list}>
                                {filteredMovies.slice(0, amountMovies).map((movie) => (
                                    <MoviesCard pageMovies={pageMovies} movie={movie} key={movie.id} onSaveMovie={onSaveMovie} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie}></MoviesCard>
                                ))}
                            </ul>
                            {
                                amountMovies < filteredMovies.length
                                &&
                                <button type='button' className={`${styles.button} ${pageMovies ? styles.button_active : ''}`} onClick={onShowMoreMovies}>Ещё</button>
                            }
                        </section >
                        :
                        <p className={styles.cards__text}>Ничего не найдено</p>
            :
            errorMovies
                ?
                <p className={styles.cards__text}>{errorMovies}</p>
                :
                isFilteredSavedMovies
                    ?
                    filteredSavedMovies.length
                        ?
                        < section className={styles.cards} >
                            <ul className={styles.cards__list}>
                                {filteredSavedMovies.map((savedMovie) => (
                                    <MoviesCard pageMovies={pageMovies} movie={savedMovie} key={savedMovie.id} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie}></MoviesCard>
                                ))}
                            </ul>
                        </section >
                        :
                        <p className={styles.cards__text}>Ничего не найдено</p>
                    :
                    savedMovies.length
                        ?
                        < section className={styles.cards} >
                            <ul className={styles.cards__list}>
                                {savedMovies.map((savedMovie) => (
                                    <MoviesCard pageMovies={pageMovies} movie={savedMovie} key={savedMovie.id} savedMovies={savedMovies} onDeleteMovie={onDeleteMovie}></MoviesCard>
                                ))}
                            </ul>
                        </section >
                        :
                        <p className={styles.cards__text}>Ничего не найдено</p>
    )
}