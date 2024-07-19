import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from "./topAction";

const initialState = {
    items: {
        data: [],
        pagination: {
            current_page: 0,
            has_next_page: true,
        }
    },
    status: 'idle',
    error: null
};

const topReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case FETCH_DATA_REQUEST: 
            return { ...state, status: 'loading' };
        case FETCH_DATA_SUCCESS:
            return { 
                ...state,
                status: 'succeeded',
                items: {
                    data: [...state.items.data, ...action.payload.data],
                    pagination: action.payload.pagination,
                }
            };
        case FETCH_DATA_ERROR: 
            return { ...state, status: 'error', error: action.payload };
        default: 
            return state;
    }
};

export default topReducer;
