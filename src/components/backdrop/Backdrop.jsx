import { motion } from 'framer-motion';
import styles from './Backdrop.module.scss'

export const Backdrop = ( {children, onClick}) => (
    <motion.div
        className={styles.backdrop}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        { children }
    </motion.div>
)

