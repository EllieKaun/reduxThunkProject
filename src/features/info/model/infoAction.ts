import { Dispatch } from "redux"

export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST'
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS'
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE'

const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST 
})

const fetchDataSuccess = (data: any) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data
})

const fetchDataFailure = (error: string) => ({
    type: FETCH_DATA_FAILURE,
    payload: error
})

export const fetchData = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchDataRequest())
        try{
            const response = await fetch('/src/features/info/model/info.json')
            const res = await response.json()
            dispatch(fetchDataSuccess(res))
        }catch(error) {
            dispatch(fetchDataFailure(error as string))
        }
    }
}