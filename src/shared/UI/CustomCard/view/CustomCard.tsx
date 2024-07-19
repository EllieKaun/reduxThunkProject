import { useNavigate } from "react-router-dom"
import { FC } from "react"
import classes from './CustomCard.module.scss'

interface CustomCardProps{ 
    id: number
    img: string
    title_en: string
    title_jp: string
    year: number
    score: number
    type: string
}

const CustomCard:FC<CustomCardProps> = (props) => {

    const navigate = useNavigate()

    const {
        id,
        img,
        title_en,
        title_jp,
        year,
        score,
        type
    } = props


    const handleClick = () => {
        navigate(`/${type}/${id}`)
    }

    return(
        <div className={classes.wrapper} onClick={handleClick}>
            <img className={classes.img} src={img} alt={title_en} />
            <div>
                <p className={classes.title}>{title_en}</p>
                <p className={classes.title}>{title_jp}</p>
            </div>
            <p className={classes.year}>{year}</p>
            <div className={classes.score}>{score}</div>
        </div>
    )
  }

export default CustomCard