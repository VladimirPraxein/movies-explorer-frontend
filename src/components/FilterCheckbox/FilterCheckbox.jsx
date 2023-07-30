import styles from './FilterCheckbox.module.css';

export default function FilterCheckbox({ checkbox, setCheckbox }) {
    return (
        <div className={styles.filter}>
            <input type="checkbox" id="switch" />
            <label className={checkbox ? styles.checkbox_active : ''} onClick={() => setCheckbox(!checkbox)}>Toggle</label>
            <p className={styles.filter__text}>Короткометражки</p>
        </div>
    )
}