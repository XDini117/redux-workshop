import { actionTypes } from './users.actionTypes';
import { defaultState } from './users.initialStates';
import { Action } from './users.actions';

const initialStates = defaultState;

const usersReducer = (state = initialStates, action: Action) => {
    switch (action.type) {
        case actionTypes.USERS_LOAD_START:
            return { ...state, isLoading: true, users: null, errorMessage: null };
        case actionTypes.USERS_LOAD_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        case actionTypes.USERS_LOAD_ERROR:
            return { ...state, isLoading: false, errorMessage: action.payload };
        default:
            return state;
    }
};

export default usersReducer;
