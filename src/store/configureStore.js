import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState);

    // Enable Webpack hot module replacement for reducers
    if(module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}