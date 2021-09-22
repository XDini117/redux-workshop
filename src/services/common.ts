import api from './api';

import { PokemonType } from '../actions/PokemonActionType';

interface PokemonT extends PokemonType {}

export const getPokemon = (pokemon: string) =>
    api.get(`/pokemon/${pokemon}`).then(({ data }): PokemonT => data);
