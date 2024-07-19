import { FC } from "react"
interface DetailInfoProps {
    img: string
    title: string
    status: string
    description: string
}

const DetailInfo:FC<DetailInfoProps> = (props) => {

    const { img, title, status, description } = props

    return (
        <div>
            <img src={img} alt={title}/>
            <div>
                <p>{title}</p>
                <p>{status}</p>
                <p>{description}</p>              
            </div>
        </div>
    )
}

export default DetailInfo