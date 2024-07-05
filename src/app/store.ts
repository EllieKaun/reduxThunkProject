import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'


const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))