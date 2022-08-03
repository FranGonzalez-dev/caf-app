import { motion } from 'framer-motion'
import { Backdrop } from '../../components';
import styles from './Modal.module.scss';



const dropIn = {
    hidden: {
        y: '-100vh',
        opacity: 0,
    },
    visible: {
        y: '0',
        opacity: 1,
        transition: {
            duration: 0.5,
            type: 'spring',
            damping: 100,
            stiffness: 500,

        }
    },
    exit: {
        y: '100vh',
        opacity: 0,
    },
}

export const Modal = ({ modalTitle, children, handleClose }) => {
    return (

    
    <Backdrop onClick={ handleClose }>
        <motion.div 
            className={styles.modal}
            onClick={ (e)=> e.stopPropagation() }
            variants={ dropIn }
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <div className={styles.modalHeader}>
                <p>{ modalTitle }</p>
                <i 
                    onClick={ handleClose }
                    className='fa-solid fa-xmark'
                    aria-label='Close'
                />
            </div>
            <>
                { children }
            </>
        </motion.div>

    </Backdrop>            
    

    )
}
