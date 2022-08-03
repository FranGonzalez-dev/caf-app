import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { actionTypes } from '../../helpers/reducer';
import { useStateValue } from '../../helpers/Provider';


import styles from './ListItem.module.scss';


export const ListItem = ({ 
    id,
    image, 
    title, 
    author, 
    tone, 
    tempo,
    lyric,
    url
}) => { 
    const [ { song }, dispatch ] = useStateValue();
    const linkToSong = () => {
        dispatch({
            type: actionTypes.LINK_TO_SONG,
            item: {
                id,
                image, 
                title, 
                author, 
                tone, 
                tempo,
                lyric,
                url
            }
        })
    }
    const resetSong = () => dispatch({
        type: actionTypes.RESET_SONG,
        id
    })
    useEffect(()=> {
        resetSong();
    }, []);
return (
    <Link to={ '/lista/' + title }>
        <div className={styles.listItem} onClick={linkToSong}>
            <div className={styles.image}>
                <img src={image} alt={author} />
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
)}
