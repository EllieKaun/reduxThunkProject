import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'
import dataReducer from '../features/data/model/dataReducer'
import MSIReducer from '../features/MSI/model/MSIReducer'
import topReducer from '../features/topFeatures/model/topReducer'


const rootReducer = combineReducers({
    counter: counterReducer,
    data: dataReducer,
    data2: MSIReducer,
    top: topReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))