import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootStoreType } from '../../redux/store';
import { populatePokemon } from '../../redux/PokemonActions';

const Pokemon = () => {
    //redux constants
    const dispatch = useDispatch();
    const pokemonState = useSelector((state: RootStoreType) => state.pokemon);
    // component state constants
    const [pokemonName, setPokemonName] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);
    const handleSubmit = () => dispatch(populatePokemon(pokemonName));

    return (
        <div>
            <input type='text' onChange={handleChange}></input>
            <button onClick={handleSubmit}>Search</button>
            {pokemonState.pokemon && (
                <div>
                    <img alt='' src={pokemonState.pokemon?.sprites.front_default} />
                    {pokemonState.pokemon.abilities.map(ability => {
                        return <p key={ability.ability.name}>{ability.ability.name}</p>;
                    })}
                </div>
            )}
        </div>
    );
};

export default Pokemon;
