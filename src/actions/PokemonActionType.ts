/* Pokemon interfaces */

export interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    };
}

export interface PokemonSprites {
    front_default: string;
}

export interface PokemonStat {
    base_stat: number;
    stat: {
        name: string;
    };
}

export interface PokemonType {
    abilities: Array<PokemonAbility>;
    sprites: PokemonSprites;
    stats: Array<PokemonStat>;
}

export interface DefaultStateI {
    loading: boolean;
    pokemon?: PokemonType;
}

export const defaultState: DefaultStateI = Object.freeze({
    loading: false,
});

/* Unknown */

export const POKEMON_LOADING = 'POKEMON_LOADING';

export const POKEMON_FAIL = 'POKEMON_FAIL';

export const POKEMON_SUCCESS = 'POKEMON_SUCCESS';

export type PokemonDispatchTypesAlter = 'POKEMON_LOADING' | 'POKEMON_FAIL' | 'POKEMON_SUCCESS';

export interface PokemonLoading {
    type: typeof POKEMON_LOADING;
}

export interface PokemonFail {
    type: typeof POKEMON_FAIL;
}

export interface PokemonSuccess {
    type: typeof POKEMON_SUCCESS;
    payload: PokemonType;
}

export type PokemonDispatchTypes = PokemonLoading | PokemonFail | PokemonSuccess;
