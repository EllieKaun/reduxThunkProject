import DetailFeature from "../../../features/detailFeature/view/DetailFeature"
import { useLocation } from "react-router-dom"


const DetailManga = () => {

    const location = useLocation()
    const id = location.pathname.split("/").pop()

    return(
        <>
        detail manga
        <DetailFeature type="manga" id={id ? id : ''}/>
        </>
    )
}

export default DetailManga