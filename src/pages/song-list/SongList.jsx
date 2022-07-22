import { useState, useEffect } from 'react';
import { ListItem } from '../../components/list-item/ListItem';
import { api } from '../../helpers';
import axios from 'axios';

import styles from './SongList.module.scss';

export const SongList = () => {

    // Fetching API_REST proveniente de Strapi
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        axios
            .get(`${ api }/api/songs?populate=*`)
            .then(({ data }) => setSongs( data ))
    }, []);
    const { data } = songs;

return (
    <div className={styles.songsList}>
        <h1>Lista de canciones</h1>
        <div className={styles.grid}>
            {
                data && data.length ?
                data.map( song => (
                    <ListItem 
                        key={song.id}
                        id={song.id}
                        image={`${api}${song.attributes.image.data.attributes.url}`}
                        title={song.attributes.title}
                        author={song.attributes.author}
                        tone={song.attributes.tone.data.attributes.tone}
                    />
                )) : <p>Cargando...</p>
            }
        </div>
    </div>
)}
