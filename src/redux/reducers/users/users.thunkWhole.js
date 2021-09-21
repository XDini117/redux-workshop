import UsersService from '../../../services/users.service';
import { actionTypes } from '../../index.actionTypes';

const usersLoadStart = () => ({
    type: actionTypes.USERS_LOAD_START,
});

const usersLoadSuccess = users => ({
    type: actionTypes.USERS_LOAD_SUCCESS,
    payload: users,
});

const usersLoadError = errorMessage => ({
    type: actionTypes.USERS_LOAD_ERROR,
    payload: errorMessage,
});

const actions = { usersLoadStart, usersLoadSuccess, usersLoadError };

export const loadUsersAsync = () => dispatch => {
    dispatch(actions.usersLoadStart());

    UsersService.getAllUsers()
        .then(response => dispatch(actions.usersLoadSuccess(response.data)))
        .catch(error => dispatch(actions.usersLoadError(error.message)));
};
