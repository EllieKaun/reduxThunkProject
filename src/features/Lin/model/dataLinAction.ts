import { Dispatch } from "redux"

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR'

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

export const fetchDataLin = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchDataRequest())
        try{
            const response = await fetch('/src/features/Lin/model/dataLin.json')
            const resp = await response.json()
            dispatch(fetchDataSuccess(resp))
        }catch(error) {
            dispatch(fetchDataError(error as string))
        }
    }
}