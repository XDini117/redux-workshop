import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DefaultStateI } from '../redux/reducers/users/users.initialStates';

import { loadUsersAsync } from '../redux/reducers/users/users.thunks';

function UsersPage() {
    const dispatch = useDispatch();
    const { isLoading, users, errorMessage } = useSelector((state: DefaultStateI) => state.users);

    useEffect(() => {
        dispatch(loadUsersAsync());
    }, []);

    return (
        <div>
            <h1>Users List </h1>
            {isLoading && <h3>Loading...</h3>}
            {errorMessage && <h3>{errorMessage}</h3>}
            {users && users.map((user: any) => <h5 key={user.id}>{user.name}</h5>)}
        </div>
    );
}

export default UsersPage;
