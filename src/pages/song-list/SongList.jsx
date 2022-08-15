import { useState, useEffect } from 'react';

import { motion }from 'framer-motion'

import { ListItem, Loading } from '../../components';
import { api } from '../../helpers';
import axios from 'axios';

import styles from './SongList.module.scss';

export const SongList = () => {

    // Fetching API proveniente de Strapi
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        axios
            .get(`${ api }/api/songs?populate=*`)
            .then(({ data }) => setSongs( data ))
    }, []);
    const { data } = songs;

    
    // Framer motion variant
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05
          }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }

return (
<div className={styles.songsList}>
    <h1>Lista de canciones</h1>
    <motion.div 
        className={styles.grid}
        variants={container}
        initial='hidden'
        animate='show'
    >


    {
        data && data.length 
        ? data
        .sort(( a,b ) => a.attributes.title.localeCompare( b.attributes.title )) // Sorting alphabetically
        .map( song => (
            <motion.div variants={item} key={song.id}>
                <ListItem
                    id={song.id}
                    image={`${api}${song.attributes.image.data.attributes.url}`}
                    title={song.attributes.title}
                    author={song.attributes.author}
                    tone={song.attributes.tone.data.attributes.tone}
                    tempo={song.attributes.tempo}
                    lyric={song.attributes.lyric}
                    url={song.attributes.url}
                />
            </motion.div>
        )) : <Loading />
    }
    </motion.div>
</div>
)}
