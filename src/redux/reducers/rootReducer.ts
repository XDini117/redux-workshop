import { combineReducers } from 'redux';
import { StoreI } from './users/users.initialStates';

import usersReducer from './users/users.reducer';

const rootReducer = combineReducers<StoreI>({
    usersData: usersReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
