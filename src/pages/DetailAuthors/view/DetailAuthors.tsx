import DetailFeature from "../../../features/detailFeature/view/DetailFeature"
import { useLocation } from "react-router-dom"

const DetailAuthors = () => {

    const location = useLocation()
    const id = location.pathname.split("/").pop()

    return (
        <>
        detail people
        <DetailFeature type="people" id={id ? id : ''}/>
        </>
    )
}

export default DetailAuthors