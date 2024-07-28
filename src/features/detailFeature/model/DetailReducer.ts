
import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR } from "./DeatailAction";


interface InitialInterface {
    items: any
    status: 'idle' | 'loading' | 'succsess' | 'error'
    error: any
}

const initialState:InitialInterface = {
    items: [],
    status: 'idle',
    error: null
}

export const detailReducer = (state=initialState, action: AnyAction) => {
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