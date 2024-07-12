import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchData } from "../model/MSIAction"



const MSI = () => {

    const {items, status} = useSelector((state: any) => state.data2)

    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchData())
        }
    }, [status, dispatch])

    
    return(
        <>
            
           {items.title}
        </>

    )
}
export default MSI