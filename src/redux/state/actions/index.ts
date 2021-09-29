import { actionTypes } from '../action-types';

// Users

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
