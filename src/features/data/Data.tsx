import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "./model/dataAction"


const Data = () => {

    const {items, error, status} = useSelector((state) => state.data)
    console.log(status)

    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchData())
        }
    }, [status, dispatch])

    return(
        <>
        
        </>
    )

}


export default Data