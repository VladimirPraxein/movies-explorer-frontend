import styles from './MoviesCard.module.css'
import card_image from '../../images/card_image.png';
import delete_icon from '../../images/delete_icon.svg';

export default function MoviesCard({ pageMovies }) {
    return (
        <li className={styles.card}>
            <div className={styles.card__header}>
                <h3 className={styles.card__name}>В погоне за Бенкси</h3>
                <p className={styles.card__time}>27 минут</p>
            </div>
            <img className={styles.card__image} src={card_image}></img>
            {pageMovies ?
                <button className={styles.card__save} type='button'>Сохранить</button>
                :
                <button className={styles.card__delete} type='button'>
                    <img src={delete_icon} alt="" />
                </button>
            }

        </li >
    )
}