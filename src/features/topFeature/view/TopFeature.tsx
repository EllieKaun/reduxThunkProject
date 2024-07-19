import { useDispatch, useSelector } from "react-redux"
import { useEffect, FC } from "react"
import { fetchTopData } from "../model/topAction"
import CustomCard from "../../../shared/UI/CustomCard"
import classes from './TopFeature.module.scss'
import InfiniteScroll from "react-infinite-scroll-component"

interface TopFeatureProps{
    type: string
}

const TopFeature:FC<TopFeatureProps> = (props) => {
    
    const {type} = props
    const dispatch = useDispatch()

    const {items, status} = useSelector((state) => state.top)

    useEffect(() => {
        if(status === 'idle'){
            dispatch(fetchTopData(`top/${type}?page=1`))
        }
    }, [])

    return(
        <div className={classes.wrapper}>
            <InfiniteScroll>
            {items?.data?.map((item) => (
                <CustomCard 
                    id={item?.mal_id}
                    img={item?.images?.jpg?.image_url}
                    title_en={item?.title_english || item?.name}
                    title_jp={item?.title_japanese || item?.given_name}
                    year={item?.year || item?.birthday} 
                    score={item?.score || item?.favorites}
                    type={type}
                    />
            ))}
            </InfiniteScroll>
        </div>
    )
}

export default TopFeature