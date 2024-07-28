import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'
import dataReducer from '../features/data/model/dataReducer'
import contactReducer from '../features/contact/model/contactReducer'
import topReducer from '../features/topFeature/model/topReducer'
import infoReducer from '../features/info/model/infoReducer'
import { detailReducer } from '../features/detailFeature/model/detailReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer,
    contact: contactReducer,
    info: infoReducer,
    top: topReducer,
    detail: detailReducer


})

export const store = createStore(rootReducer, applyMiddleware(thunk))
