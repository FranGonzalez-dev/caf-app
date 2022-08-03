import { useState } from 'react';
import { useStateValue } from '../../helpers/Provider';

import { AnimatePresence } from 'framer-motion'

import ReactMarkdown from 'react-markdown';

import { Modal } from '../../components';
import styles from './SongDetails.module.scss';

export const SongDetails = () => {

    const [ { song }, dispatch ] = useStateValue();

    const [modalOpen, setModalOpen] = useState(false);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    

return <> { song?.map( item => (

    <div key={item.id} className={styles.container}>
        <header>
            <img src={item.image} alt={item.author} />

            <div className={styles.header}>
                <h1> {item.title} </h1>

                <p className={styles.author}>
                    {item.author}
                </p>
                <nav className={styles.nav}>
                    <button className={styles.navItem}>
                        {/* <i className="fa-solid fa-plus"/> */}
                        <i className="fa-regular fa-heart"/>
                    </button>
                    <a 
                        href={`https://www.youtube.com/${item.url}`}
                        target='blank'
                        className={styles.navItem}
                    >
                        <i className="fa-brands fa-youtube"/>
                    </a>
                    
                    <button 
                        className={styles.navItem}
                        onClick={() => ( modalOpen ? close() : open() )}
                    >
                        <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </nav>

                

            </div>
        </header>
        <div className={styles.lyricsContainer}>
            <ReactMarkdown children={ item.lyric } />
        </div>
        <AnimatePresence
            initial={ false }
            exitBeforeEnter={ true }
            onExitComplete={ () => null }
        > 
        {
            modalOpen &&
            <Modal modalOpen={modalOpen} handleClose={close} modalTitle='Información'>
                <div className={styles.modalBody}>
                    <p>Autor: <span> {item.author} </span></p>
                    <p>Tono: <span> {item.tone} </span></p>
                    <p>Tiempo: <span> {item.tempo} bpm </span></p>
                </div>
            </Modal>
        }
        </AnimatePresence>
    </div>
))} </> }