import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchTopData } from "../model/topAction"
import { FC } from "react"

interface TopFeatureProps{
    type: string
}

const TopFeature:FC<TopFeatureProps> = (props) => {

    const {type} = props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchTopData(`top/${type}`))
    }, [])

    return(
        <>
        1
        </>
    )
}


export default TopFeature