import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./MSIAction";

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

const MSIReducer =(state = initialState, action: AnyAction) => {
    console.log(action.payload)
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {...state, status: 'loading'}
        case FETCH_DATA_SUCCESS:
            return {...state, status: 'success', items: action.payload}
        case FETCH_DATA_ERROR:
            return {...state, status: 'error', error: action.payload}    
        default:
            return state
    }
}

export default MSIReducer