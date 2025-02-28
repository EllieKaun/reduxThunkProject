import { Dispatch } from "redux"
import { fetcher } from "../../../shared/lib/fetcher"


export const FETCH_DATA_REQUEST = 'FETCH_TOP_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_TOP_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_TOP_DATA_ERROR'
export const CLEAR_DATA = 'CLEAR_TOP_DATA'

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST 
})

const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

const fetchDataError = (error: string) => ({
    type: FETCH_DATA_ERROR,
    payload: error
})

export const clearTopData = () => ({
    type: CLEAR_DATA
})

export const fetchTopData = (endpoint: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchDataRequest())
        try{
            const response = await fetcher(endpoint)
            dispatch(fetchDataSuccess(response))
        }catch(error) {
            dispatch(fetchDataError(error as string))
        }
    }
}