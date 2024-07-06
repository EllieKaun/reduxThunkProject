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

export const fetchData = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchDataRequest())
        try{
            const response = await fetch('/src/features/data/model/data.json')
            dispatch(fetchDataSuccess(response))
        }catch(error) {
            dispatch(fetchDataError(error as string))
        }
    }
}