import { actionTypes } from './users.actionTypes';
import { defaultState } from './users.initialStates';

const initialStates = defaultState;

const usersReducer = (state = initialStates, { type, payload }) => {
    switch (type) {
        case actionTypes.USERS_LOAD_START:
            return { ...state, isLoading: true, users: null, errorMessage: null };
        case actionTypes.USERS_LOAD_SUCCESS:
            return { ...state, isLoading: false, users: payload };
        case actionTypes.USERS_LOAD_ERROR:
            return { ...state, isLoading: false, errorMessage: payload };
        default:
            return state;
    }
};

export default usersReducer;
