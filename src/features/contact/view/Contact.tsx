import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchContact } from "../model/contactAction" 



const Contact = () => {

const {items, error, status} = useSelector((state) => state.contact)

const dispatch = useDispatch()
useEffect(() => {
    if(status === 'idle') {
        dispatch(fetchContact())
    }
}, [status, dispatch])
    return (
        <></>
    )
}

export default Contact