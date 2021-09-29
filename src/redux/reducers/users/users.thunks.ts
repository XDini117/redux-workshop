import { Dispatch } from 'redux';

import { getAllUsers } from '../../../services/users.service';
import { Action, usersLoadError, usersLoadSuccess } from './users.actions';
import { actionTypes } from './users.actionTypes';

export const loadUsersAsync = () => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: actionTypes.USERS_LOAD_START,
    });

    try {
        const response = await getAllUsers();
        return dispatch(usersLoadSuccess(response.data));
    } catch (error: any) {
        return dispatch(usersLoadError(error.message));
    }
};
