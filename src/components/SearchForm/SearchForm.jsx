import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import styles from './SearchForm.module.css';

import search from '../../images/search.svg';
import search_white from '../../images/search_white.svg';
import { useState, useEffect } from 'react';

export default function SearchForm({ onSearchMovies, onChangeMoviesOnPage, pageMovies }) {
    const [nameMovie, setNameMovie] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        if (pageMovies) {
            if (localStorage.getItem('nameMovie')) {
                setNameMovie(JSON.parse(localStorage.getItem('nameMovie')));
            }
            if (localStorage.getItem('checkbox')) {
                setCheckbox(JSON.parse(localStorage.getItem('checkbox')));
            }
        }
    }, [])

    function handleSubmit(e) {
        e.preventDefault();
        if (pageMovies) {
            onChangeMoviesOnPage()
        }
        onSearchMovies(nameMovie, checkbox);
    }

    return (
        <section className={styles.search}>
            <form action="#" name='search' className={styles.search__form}>
                <img src={search} className={styles.search__icon} alt='Иконка поиска'></img>
                <input
                    type="text"
                    className={styles.search__input}
                    name="search"
                    required
                    value={nameMovie}
                    onChange={(e) => setNameMovie(e.target.value)}
                />
                <button className={styles.search__button} type="submit" onClick={handleSubmit}>
                    <img src={search_white} className={styles.search__icon_white} alt='Кнопка поиска'></img>
                </button>
                <FilterCheckbox checkbox={checkbox} setCheckbox={setCheckbox}></FilterCheckbox>
            </form>
        </section>
    )
}