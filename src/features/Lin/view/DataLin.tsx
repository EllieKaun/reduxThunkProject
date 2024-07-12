import { useDispatch , useSelector} from "react-redux"
import { useEffect } from "react"
import {fetchDataLin} from '../model/dataLinAction'


const DataLin = () => {


    const {items, error , status } = useSelector((state) => state.dataLin)
    


    const dispatch = useDispatch()


    useEffect(() => {
        if(status === 'lina'){
            dispatch(fetchDataLin())
        }
    }, [status, dispatch])




    return (
        <>
            <div>
                {items.name}
            </div>
        </>
    )


}

export default DataLin