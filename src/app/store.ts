import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'
import dataReducer from '../features/data/model/dataReducer'
import dataLinReducer from '../features/Lin/model/dataLinReducer'
import topReducer from '../features/topFeatures/model/topReducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    data:dataReducer,
    dataLin: dataLinReducer,
    top:topReducer

})

export const store = createStore(rootReducer, applyMiddleware(thunk))