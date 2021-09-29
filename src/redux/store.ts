import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const composeEnhancers = ((window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const STORE = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default STORE;
