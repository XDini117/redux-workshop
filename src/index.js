import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import storeFn from './redux/store';
import App from './App';

const store = storeFn();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
