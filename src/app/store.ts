import {createStore, combineReducers, applyMiddleware} from 'redux'
import counterReducer from '../features/counter/model/counterReducer'
import { thunk } from 'redux-thunk'
import dataReducer from '../features/data/model/dataReducer'
import contactReducer from '../features/contact/model/contactReducer'



const rootReducer = combineReducers({
    counter: counterReducer,
  data: dataReducer,
  contact: contactReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))