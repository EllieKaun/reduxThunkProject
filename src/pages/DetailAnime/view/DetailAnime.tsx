import { useLocation } from "react-router-dom"
import DetailFeature from "../../../features/detailFeature/view/DetailFeature"

const DetailAnime = () => {

    const location = useLocation()
    const id = location.pathname.split("/").pop()

    return (
        <>
            detail anime
            <DetailFeature type="anime" id={id || ''}/>
        </>
    )
}

export default DetailAnime