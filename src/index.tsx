import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import STORE from './redux/store';

import UsersPage from './sections/users';

ReactDOM.render(
    <Provider store={STORE}>
        <UsersPage />
    </Provider>,
    document.getElementById('root')
);
