import { INCREMENT, DECREMENT } from "./counterAction"
import { AnyAction } from "redux"


interface CounterState{           
    countValue: number
}

const initialState: CounterState = { //изначальное значение 
    countValue: 0 //значение
}

const counterReducer = (state = initialState, action: AnyAction) => { // функция меняющая значение
    switch (action.type){
        case INCREMENT: // если инкременет то значение + 1
            return {...state, countValue: state.countValue + 1}
        case DECREMENT:  // если декремент то значение - 1
            return {...state, countValue: state.countValue - 1}
        default: // значние по умолчанию
            return state
    }
}

export default counterReducer