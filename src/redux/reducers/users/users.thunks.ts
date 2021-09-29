import { Dispatch } from 'redux';

import { getAllUsers } from '../../../services/users.service';
import { Action, usersLoadError, usersLoadSuccess } from './users.actions';
import { actionTypes } from './users.actionTypes';

export const loadUsersAsync = () => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: actionTypes.USERS_LOAD_START,
    });

    return getAllUsers()
        .then(data => dispatch(usersLoadSuccess(data)))
        .catch(error => dispatch(usersLoadError(error.message)));
};
