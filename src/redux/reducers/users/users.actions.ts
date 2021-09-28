// import { Dispatch } from 'redux';

import { actionTypes } from './users.actionTypes';

// Actions (types?)

export interface UsersLoadStartAction {
    type: actionTypes.USERS_LOAD_START;
}

interface UsersLoadSuccessAction {
    type: actionTypes.USERS_LOAD_SUCCESS;
    payload: any;
}

interface UsersLoadErrorAction {
    type: actionTypes.USERS_LOAD_ERROR;
    payload: any;
}

export type Action = UsersLoadStartAction | UsersLoadSuccessAction | UsersLoadErrorAction;

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
