import { Link } from 'react-router-dom'
import styles from './ListItem.module.scss';


export const ListItem = ({ id, image, title, author, tone }) =>
<Link to={`/lista/${id}`}>
    <div className={styles.listItem}>
        <div className={styles.image}>
            <img src={image} alt={author}/>
        </div>
        <div className={styles.info}>
            <h4>{title}</h4>
            <p>{author}</p>
        </div>
        <div className={styles.tone}>
            <p>{tone}</p>
        </div>
    </div>
</Link>
