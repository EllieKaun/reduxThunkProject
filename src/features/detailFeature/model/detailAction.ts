

// actions - send req, get success, get error
import { Dispatch } from "redux"
import { fetcher } from "../../../shared/lib/fetcher"

export const FETCH_DATA_REQUEST = 'FETCH_DETAIL_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DETAIL_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DETAIL_DATA_ERROR'

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

export const fetchDetailData = (endpoint: string) => {
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