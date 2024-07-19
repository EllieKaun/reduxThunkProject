import { INCREMENT, DECREMENT } from "./counterAction"
import { AnyAction } from "redux"


interface CounterState{           
    countValue: number
}

const initialState: CounterState = {
    countValue: 0
}

const counterReducer = (state = initialState, action: AnyAction) => {
    switch (action.type){
        case INCREMENT:
            return {...state, countValue: state.countValue + 1}
        case DECREMENT: 
            return {...state, countValue: state.countValue - 1}
        default: 
            return state
    }
}

export default counterReducer