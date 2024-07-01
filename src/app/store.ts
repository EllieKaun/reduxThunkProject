import {createStore, combineReducers} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'


const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer)