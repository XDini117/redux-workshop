import { Dispatch } from 'redux';

import { getAllUsers } from '../../../services/common';
import { actionTypes } from '../action-types';
import { Action } from '../actions';

// Actions creators

export const usersLoadStart = () => ({
    type: actionTypes.USERS_LOAD_START,
});

export const usersLoadSuccess = (users: any) => ({
    type: actionTypes.USERS_LOAD_SUCCESS,
    payload: users,
});

export const usersLoadError = (errorMessage: any) => ({
    type: actionTypes.USERS_LOAD_ERROR,
    payload: errorMessage,
});

// Thunks

export const loadUsersAsync = () => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: actionTypes.USERS_LOAD_START,
    });

    return getAllUsers()
        .then(data => dispatch(usersLoadSuccess(data)))
        .catch(error => dispatch(usersLoadError(error.message)));
};
