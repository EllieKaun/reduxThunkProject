import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from "./infoAction";


const initialState = {
    items: [],
    status: 'idle',
    error: null
}

const infoReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case FETCH_DATA_REQUEST: 
            return {...state, status: 'loading' }
        case FETCH_DATA_SUCCESS: 
            return {...state, status: 'succesed', items: action.payload}
        case FETCH_DATA_FAILURE: 
            return {...state, status: 'error', error: action.payload}
        default: 
            return state
    }
}

export default infoReducer