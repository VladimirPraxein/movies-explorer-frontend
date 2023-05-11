import styles from './FilterCheckbox.module.css';

export default function FilterCheckbox() {
    return (
        <div className={styles.filter}>
            <input type="checkbox" id="switch" />
            <label htmlFor="switch">Toggle</label>
            <p className={styles.filter__text}>Короткометражки</p>
        </div>
    )
}