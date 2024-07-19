import { FETCH_DATA_REQUEST, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "./detailAction"
interface InitialState {
    items: any
    status: 'idle' | 'loading' | 'succes' | 'error'
    error: any
}

const initialState: InitialState = {
    items: [],
    status: 'idle',
    error: null
}

export const detailReducer = (state = initialState, action) => {
    switch(action.type){
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
