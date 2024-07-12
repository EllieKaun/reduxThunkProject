import { useDispatch, useSelector } from "react-redux"
import { useEffect, FC } from "react"
import { fetchTopData } from "../model/topAction"
import CustomCard from "../../../shared/UI/CustomCard"
import classes from './TopFeature.module.scss'

interface TopFeatureProps{
    type: string
}

const TopFeature:FC<TopFeatureProps> = (props) => {
    
    const {type} = props
    const dispatch = useDispatch()

    const {items} = useSelector((state) => state.top)
    console.log(items.data)

    useEffect(() => {
        dispatch(fetchTopData(`top/${type}`))
    }, [])

    return(
        <div className={classes.wrapper}>
            {items?.data?.map((item) => (
                <CustomCard 
                    id={item?.mal_id}
                    img={item?.images.jpg.image_url}
                    title_en={item?.title_english}
                    title_jp={item?.title_japanese}
                    year={item?.year}
                    score={item?.score}
                    />
            ))}
        </div>
    )
}

export default TopFeature