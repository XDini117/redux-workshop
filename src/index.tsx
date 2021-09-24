import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { STORE } from './state';
import App from './App';

ReactDOM.render(
    <Provider store={STORE}>
        <App />
    </Provider>,

    document.getElementById('root')
);
