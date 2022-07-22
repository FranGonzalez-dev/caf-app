import styles from './ListItem.module.scss';

export const ListItem = ({ 
    image, 
    title, 
    author, 
    tone, 
    id
}) => (
    <div className={styles.listItem}>
        <div className={styles.imageContainer}>
            <img src={image} alt={author} />
        </div>
        <div className={styles.infoContainer}>
            <div className={styles.info}>
                <h4>{title}</h4>
                <p>{author}</p>
            </div>
            <div className={styles.tone}>
                <p>{tone}</p>
            </div>
        </div>
    </div>
)
