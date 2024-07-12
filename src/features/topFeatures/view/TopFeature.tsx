import { useDispatch} from 'react-redux'
import {FC, useEffect } from 'react'
import { fetchTopData} from '../model/topAction'


interface TopFeatureProps{
    type:string
}


const TopFeature:FC<TopFeatureProps> = (props) => {

    const {type} = props
    const dispatch = useDispatch()



useEffect(() => {
    dispatch(fetchTopData(`top/${type}`))
}, [])

    return(
        <>
            <div>
                111
            </div>
        </>
    )
}

export default TopFeature