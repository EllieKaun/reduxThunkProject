import { AnyAction } from "redux";
import { FETCH_CONTACT_REQUEST, FETCH_CONTACT_SUCCESS, FETCH_CONTACT_ERROR } from "./contactAction"

const initialState = {
    items: [],
    status: 'idle',
    error: null
}

const contactReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case FETCH_CONTACT_REQUEST: 
            return {...state, status: 'loading' }
        case FETCH_CONTACT_SUCCESS: 
            return {...state, status: 'success', items: action.payload}
        case FETCH_CONTACT_ERROR: 
            return {...state, status: 'error', error: action.payload}
        default: 
            return state
    }
}

export default contactReducer