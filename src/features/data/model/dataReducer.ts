import { AnyAction } from "redux";
import { FETCH_DATA_REQUEST ,FETCH_DATA_SUCCESS, FETCH_DATA_ERROR} from './dataActiondate'

const initialState = {
    items : {} ,
    status: 'idle' ,
    error : null
}

const dataReducer = ( state = initialState , action : AnyAction )