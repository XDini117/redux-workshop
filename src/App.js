import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchPokemons } from './redux/store/actions/pokemons';

export default function App(props) {
    const dispatch = useDispatch();
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (pokemons.length === 0) {
            dispatch(fetchPokemons());
            setPokemons([{}, {}]);
        }
    });

    return (
        <div>
            <p>Redux - Workshop</p>
        </div>
    );
}
