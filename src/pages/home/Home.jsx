import { Link } from 'react-router-dom'
import styles from './Home.module.scss'



const social = [
    {
        icon : 'facebook',
        url : '#'
    },
    {
        icon : 'tiktok',
        url : '#' 
    },
    {
        icon : 'instagram',
        url : '#' 
    },
    {
        icon : 'telegram',
        url : '#' 
    },
    {
        icon : 'youtube',
        url : '#'
    }
]



export const Home = () =>  (
<>
    <div className={styles.header}>
        <h1>Bienvenido @user</h1>
    </div>
    <div className={styles.container}>
        
        <Link to='/lista' className={styles.item}>
            <h2>Lista de Canciones</h2>
            <button />
        </Link>
        
        <div className={styles.card}>
            <div className={styles.cardBody}>
                No hay eventos disponibles
                <h3>Eventos</h3>
            </div>
            <button/>
        </div>

        <div className={`${styles.card} ${styles.card2}`}>
            <div className={styles.cardBody}>
                <ul>
                    <span>Martes</span>
                    <li>Escuela Bíblica - 19:30h</li>
                    <span>Jueves</span>
                    <li>Reunión General - 19:30h</li>
                    <span>Viernes</span>
                    <li>Ensayos - 19:00h</li>
                    <span>Sábados</span>
                    <li>Jóvenes - 19:00h</li>
                    <span>Domingos</span>
                    <li>Reunión General - 10:00h</li>
                    <li>Reunión General - 19:30h</li>
                </ul>
                <h3>Reuniones</h3>
            </div>
            <button/>
        </div>

        <div className={styles.social}>
            {
                social.map( (s, i) => 
                <a href={s.url} key={i}>
                    <i className={`fa-brands fa-${s.icon}`}/>
                </a>
                )
            }
        </div>
    
        </div>











        
</>
)

