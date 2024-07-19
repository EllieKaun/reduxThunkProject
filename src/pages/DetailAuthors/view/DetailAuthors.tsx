
import { useLocation } from "react-router-dom"
import DetailFeature  from "../../../features/detailFeature"



const DetailAuthors = () => {

    const location = useLocation()
    const id = location.pathname.split("/").pop()
    
    return(
        <>
        <div>
                <DetailFeature type="people" id={id ? id : ''}/>
                
            </div>
        </>
    )
}

export default DetailAuthors