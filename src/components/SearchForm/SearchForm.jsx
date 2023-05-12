import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

import styles from './SearchForm.module.css';

import search from '../../images/search.svg';
import search_white from '../../images/search_white.svg';

export default function SearchForm() {
    return (
        <section className={styles.search}>
            <form action="#" name='search' className={styles.search__form}>
                <img src={search} className={styles.search__icon}></img>
                <input
                    type="text"
                    className={styles.search__input}
                    name="search"
                    required
                />
                <button className={styles.search__button} type="submit">
                    <img src={search_white} className={styles.search__icon_white}></img>
                </button>
                <FilterCheckbox></FilterCheckbox>
            </form>
        </section>
    )
}