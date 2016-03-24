
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import todoApp from './todo';

// TODO: How to make below code works?
// const rootReducer = combineReducers({
//     form: formReducer,
//     todoApp
// });

const rootReducer = todoApp;

// const allReducers = Object.assign({}, todoApp, formReducer);
// const rootReducer = combineReducers(allReducers);

// const rootReducer = (state, action) => {
//     const newState = todoApp(state, action);
//     return combineReducers({form: formReducer})(newState, action);
// };

export default rootReducer;