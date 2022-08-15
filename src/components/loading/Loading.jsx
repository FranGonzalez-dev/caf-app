import styles from './Loading.module.scss'

export const Loading = () => (
    <div className={styles.container}>
        <div className={styles.ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>    
)

