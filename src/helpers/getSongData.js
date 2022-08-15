import axios from 'axios'
import { api } from '../helpers';

export const getSongData = async( id ) => {
    const res = await axios.get(`${ api }/api/songs/${ id }?populate=*`)
    return res;
}