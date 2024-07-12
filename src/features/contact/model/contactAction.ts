import { Dispatch } from "redux"

export const FETCH_CONTACT_REQUEST = 'FETCH_CONTACT_REQUEST'
export const FETCH_CONTACT_SUCCESS = 'FETCH_CONTACT_SUCCESS'
export const FETCH_CONTACT_ERROR = 'FETCH_CONTACT_ERROR'

const fetchContactRequest = () => ({
    type: FETCH_CONTACT_REQUEST 
})

const fetchContactSuccess = (contact: any) => ({
    type: FETCH_CONTACT_SUCCESS,
    payload: contact
})

const fetchContactError = (error: string) => ({
    type: FETCH_CONTACT_ERROR,
    payload: error
})

export const fetchContact = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchContactRequest())
        try{
            const response = await fetch('/src/features/contact/model/contact.json')
            dispatch(fetchContactSuccess(response))
        }catch(error) {
            dispatch(fetchContactError(error as string))
        }
    }
}