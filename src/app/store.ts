import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'
import dataReducer from '../features/data/model/dataReducer'
import contactReducer from '../features/contact/model/contactReducer'
import topReducer from '../features/topFeature/model/topReducer'
import infoReducer from '../features/info/model/infoReducer'


const rootReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer,
    contact: contactReducer,
    info: infoReducer,
    top: topReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))