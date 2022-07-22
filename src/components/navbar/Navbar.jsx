import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export const Navbar = () => (
    <div className={styles.navbar}>
        <div className={styles.container}>
            <Link to='/'>
                <p className={styles.navItem}>Inicio</p>
            </Link>
            <Link to='/lista'>
                <p className={styles.navItem}>Lista de canciones</p>
            </Link>
        </div>
    </div>
)
  
    
  

