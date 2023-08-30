import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'

const URL = 'https://rym2-production.up.railway.app/api/characters';
const KEY = '?key=henrym-NelsonQuillay'

const Detail = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios(`${URL}/${id}${KEY}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return(
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <image src={character?.image} alt={character?.name} />
        </div>
    )
}

export default Detail 