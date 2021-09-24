import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
const middlewares = [thunk];
const composeEnhancers = ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

export const STORE = createStore(rootReducer, {}, enhancers);
