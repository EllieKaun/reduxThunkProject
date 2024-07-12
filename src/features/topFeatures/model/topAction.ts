import { Dispatch } from "redux"
import { fetcher } from "../../../shared/lib/fetcher"

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

const fetchDataRequest = () => ({
    type:FETCH_DATA_REQUEST
})

const fetchDataSuccess = (data: any) => ({
    type:FETCH_DATA_SUCCESS,
    payload: data

})

const fetchDataError =  (error: string) => ({
    type:FETCH_DATA_ERROR,
    payload: error
})

export const fetchTopData = (endPoint: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchDataRequest())
        try{
            const response = await fetcher(endPoint)
            dispatch(fetchDataSuccess(response))
        }catch(error){
            dispatch(fetchDataError(error as string))
        }
    }
}