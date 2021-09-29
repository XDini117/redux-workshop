import { defaultState } from '../schema';
import { Action } from '../state/actions';
import { actionTypes } from '../state/action-types';

const initialStates = defaultState;

const usersReducer = (state = initialStates, action: Action) => {
    switch (action.type) {
        case actionTypes.USERS_LOAD_START:
            return { ...state, isLoading: true };
        case actionTypes.USERS_LOAD_SUCCESS:
            return { ...state, isLoading: false, users: action.payload };
        case actionTypes.USERS_LOAD_ERROR:
            return { ...state, isLoading: false, errorMessage: action.payload };
        default:
            return state;
    }
};

export default usersReducer;
