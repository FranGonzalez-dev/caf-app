import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import ReactMarkdown from 'react-markdown';

import { api, getSongData } from '../../helpers';
import { Loading, Modal } from '../../components';

import styles from './SongDetails.module.scss';


export const SongDetails = () => {

    const [song, setSong] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const getSong = async( id ) => {
        const details = await getSongData( id );
        setSong( details.data )
        setIsLoading( false )
    }

    useEffect(() => {
        getSong( id )
    }, [id]);

    const [modalOpen, setModalOpen] = useState(false);
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

return <> { 
    isLoading ? <Loading /> : (
        <div className={styles.container}>
            <header>
                <img 
                    src={ api + song.data.attributes.image.data.attributes.url } 
                    alt={song.data.attributes.author} 
                />
                <div className={styles.header}>
                    <h1> {song.data.attributes.title} </h1>
                    <p className={styles.author}>
                        {song.data.attributes.author}
                    </p>
                    <nav className={styles.nav}>
                        <button className={styles.navItem}>
                            <i className="fa-regular fa-heart"/>
                        </button>
                        <a 
                            href={`https://www.youtube.com/${song.data.attributes.url}`}
                            className={styles.navItem}
                        >
                            <i className="fa-brands fa-youtube"/>
                        </a>
                        <button 
                            onClick={() => (modalOpen ? close() : open())}
                            className={styles.navItem}
                        >
                            <i className="fa-solid fa-ellipsis-vertical" />
                        </button>
                    </nav>
                </div>
            </header>
            <div className={styles.lyricsContainer}>
                <ReactMarkdown children={song.data.attributes.lyric}/>
            </div>

            <AnimatePresence
                initial={ false }
                exitBeforeEnter={ true }
                onExitComplete={ () => null }
            >
                { 
                modalOpen && 
                <Modal 
                    modalOpen={modalOpen} 
                    handleClose={close} 
                    modalTitle={song.data.attributes.title}
                >
                    <div className={styles.modalBody}>
                        <p>Tono: <span>{song.data.attributes.tone.data.attributes.tone}</span></p>
                        <p>Tiempo: <span>{song.data.attributes.tempo}</span></p>
                    </div>
                </Modal>
                }
                
            </AnimatePresence>
        </div>
    )
} </>
}