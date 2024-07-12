import { useDispatch, useSelector } from "react-redux"
import { useEffect, FC } from "react"
import { fetchTopData } from "../model/topAction"

interface TopFeatureProps{
    type: string
}

const TopFeature:FC<TopFeatureProps> = (props) => {
    
    const {type} = props
    const dispatch = useDispatch()

    const data = useSelector((state) => state.top)
    console.log(data)

    useEffect(() => {
        dispatch(fetchTopData(`top/${type}`))
    }, [])

    return(
        <></>
    )
}

export default TopFeature