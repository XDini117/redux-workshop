import {
    DefaultStateI,
    defaultState,
    PokemonDispatchTypes,
    POKEMON_LOADING,
    POKEMON_FAIL,
    POKEMON_SUCCESS,
} from '../actions/PokemonActionType';

const initialState = defaultState;

const pokemonReducer = (state: DefaultStateI = initialState, action: PokemonDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading: false,
            };
        case POKEMON_LOADING:
            return {
                loading: true,
            };
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload,
            };
        default:
            return state;
    }
};

export default pokemonReducer;
