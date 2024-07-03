import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "./dataAction";

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

const dataReducer =(state = initialState, action: AnyAction) => {
    switch(action.type){
        case FETCH_DATA_REQUEST:
            return {...state, status: 'loading'}
        case FETCH_DATA_SUCCESS:
            return {...state, status: 'success', success: action.payload}
        case FETCH_DATA_ERROR:
            return {...state, status: 'error', error: action.payload}    
    }
}

export default dataReducer