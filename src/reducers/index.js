
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { visibilityFilter, todos } from './todo';

const rootReducer = combineReducers({
    form: formReducer,
    visibilityFilter,
    todos
});

export default rootReducer;