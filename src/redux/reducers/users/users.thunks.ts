import { Dispatch } from 'redux';

import UsersService from '../../../services/users.service';
import { Action, usersLoadError, usersLoadSuccess } from './users.actions';
import { actionTypes } from './users.actionTypes';

export const loadUsersAsync = () => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: actionTypes.USERS_LOAD_START,
    });

    UsersService.getAllUsers()
        .then(response => dispatch(usersLoadSuccess(response.data)))
        .catch(error => dispatch(usersLoadError(error.message)));
};
