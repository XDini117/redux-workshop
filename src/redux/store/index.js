import { createStore } from 'redux';

function reducers() {
    return {
        testing: '',
    };
}

export default () => {
    return {
        ...createStore(reducers),
    };
};
