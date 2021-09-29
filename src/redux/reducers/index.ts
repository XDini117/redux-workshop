import { combineReducers } from 'redux';
import { StoreI } from '../schema';

import usersReducer from './usersReducer';

const rootReducer = combineReducers<StoreI>({
    usersData: usersReducer,
});

export default rootReducer;
