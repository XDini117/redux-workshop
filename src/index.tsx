import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import UsersPage from './sections/users';

ReactDOM.render(
    <Provider store={store}>
        <UsersPage />
    </Provider>,
    document.getElementById('root')
);
