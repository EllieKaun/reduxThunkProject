import { useLocation } from "react-router-dom"
import DetailFeature  from "../../../features/detailFeature"


const DetailManga =() => {

    const location = useLocation()
    const id = location.pathname.split("/").pop()
    console.log(location.pathname.split("/").pop())


    return(
        <>
        <div>
            <DetailFeature type="manga" id={id ? id : ''}/>
            
                
        </div>
        </>
    )
}

export default DetailManga