import { Dispatch } from 'redux';

import { getPokemon } from '../services';

import {
    PokemonDispatchTypes,
    POKEMON_LOADING,
    POKEMON_SUCCESS,
    POKEMON_FAIL,
} from '../actions/PokemonActionType';

export const populatePokemon = (pokemon: string) => async (dispatch: Dispatch<PokemonDispatchTypes>) => {
    try {
        dispatch({
            type: POKEMON_LOADING,
        });

        return getPokemon(pokemon).then(data => {
            dispatch({ type: POKEMON_SUCCESS, payload: data });
            console.log(data);
        });
    } catch (error) {
        dispatch({ type: POKEMON_FAIL });
    }
};
