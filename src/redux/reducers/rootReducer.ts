import { combineReducers } from 'redux';

import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
    usersData: usersReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
