import { combineReducers } from 'redux'
import { todos } from './todo'
import { filter } from './filter'

const todoApp = combineReducers({
    todos,
    filter
});

export default todoApp
