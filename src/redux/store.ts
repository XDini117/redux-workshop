import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import pokemonReducer from '../reducers/PokemonReducer';

// combine reducers
const rootReducer = combineReducers({
    pokemon: pokemonReducer,
});

const composeEnhancers = ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const STORE = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export type RootStoreType = ReturnType<typeof rootReducer>;

export default STORE;
