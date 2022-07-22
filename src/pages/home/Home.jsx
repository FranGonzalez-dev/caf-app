import { Link } from 'react-router-dom'
import styles from './Home.module.scss'

export const Home = () =>  (
    <section className={styles.home}>
        <h1>Bienvenido @user</h1>
        <ul className={styles.grid}>
            <Link to='/lista'>
                <li className={styles.item}>
                    <i className="fa-solid fa-list"/>
                    <p>Lista de Canciones</p>
                </li>
            </Link>
            <li className={styles.item}>
                <i className="fa-solid fa-calendar-check"/>
                <p>Eventos</p>
            </li>
            <li className={styles.item}>
                <i className="fa-solid fa-clock"/>
                <p>Días de Reunión</p>
            </li>
        </ul>
    </section>
)

