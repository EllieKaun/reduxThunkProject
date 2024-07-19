import { FC } from "react"

interface DetailInfoProps{
    img: string
    title: string
    status: string
    description: string

}

const DetailInfo:FC<DetailInfoProps> = (props) => {

    const {img, title, description,status} = props

    return(
        <>
        <div>
            <img src={img} alt={title} />
            <div>
                <p>{title}</p>
                <p>{description}</p>
                <p>{status}</p>
            </div>
        </div>
        
        </>
    )
}

export default DetailInfo