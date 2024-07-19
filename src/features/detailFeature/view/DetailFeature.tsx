import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDetailData } from "../model/detailAction"
import DetailInfo from "../../../shared/UI/DetailInfo"


interface DetailFeatureProps{
    type: string
    id: string
}

const DetailFeature:FC<DetailFeatureProps> = (props) => {

    const {type, id} = props

    const dispatch = useDispatch()
    const {items, status} = useSelector((state) => state.detail)
    useEffect(() => {
        // if(status === 'idle'){
            console.log(`${type}/${id}/full`)
            dispatch(fetchDetailData(`${type}/${id}/full`))
        // }
    }, [])
    console.log(items, status)



    console.log(true || 'hello')
    return (
        <>
            <DetailInfo 
                img={items?.data?.images?.jpg?.image_url}
                title={items?.data?.title || items?.data?.name}
                status={items?.data?.status || items?.data?.birthday} 
                description={items?.data?.synopsis ||  items?.data?.about}
            />
        </>
    )
}

export default DetailFeature