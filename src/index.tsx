import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store/configureStore';

import UsersPage from './pages/UsersPage';

ReactDOM.render(
    <Provider store={store}>
        <UsersPage />
    </Provider>,
    document.getElementById('root')
);
