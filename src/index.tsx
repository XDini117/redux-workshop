import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';

import UsersPage from './pages/UsersPage';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <UsersPage />
    </Provider>,
    document.getElementById('root')
);
