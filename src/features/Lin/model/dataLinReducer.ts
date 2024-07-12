import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./dataLinAction";


const initialState = {
    items: [],
    status: 'lina',
    error: null
}

const dataLinReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case FETCH_DATA_REQUEST: 
            return {...state, status: 'loading' }
        case FETCH_DATA_SUCCESS: 
            return {...state, status: 'succesed', items: action.payload}
        case FETCH_DATA_ERROR: 
            return {...state, status: 'error', error: action.payload}
        default: 
            return state
    }
}

export default dataLinReducer