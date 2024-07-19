import { FC, useEffect } from "react"
import { useDispatch, UseDispatch, useSelector } from "react-redux"
import { fetchDetailData } from "../model/DeatailAction"
import DetailInfo from "../../../shared/UI/DetailInfo"

interface DetailFeatureProps{
    type: string
    id: string

}

const DetailFeature:FC<DetailFeatureProps> = (props) => {
    const {type, id} = props

    const {items, status}=useSelector((state) => state.detail)

    const dispatch = useDispatch()

    useEffect(() => {
        // if(status==='idle'){
            dispatch(fetchDetailData(`${type}/${id}/full`))

        // }

    }, [])

    console.log(items, status)

    return(
        <>
            <div>
                <DetailInfo
                img={items?.data?.images?.jpg?.image_url}
                title={items?.data?.title || items?.data?.name}
                status={items?.data?.status || items?.data?.birthday}
                description={items?.data?.synopsis || items?.data?.about}
                  />
            </div>
        </>
    )

}

export default DetailFeature