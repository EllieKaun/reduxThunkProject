import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTopData } from "../model/topAction"
import { FC } from "react"
import CustomCard from "../../../shared/UI/CustomCard"
import classes from "./TopFeatures.module.scss"
import InfiniteScroll from "react-infinite-scroll-component"
import { fetcher } from "../../../shared/lib/fetcher"

interface TopFeatureProps{
    type: string
}

const TopFeature:FC<TopFeatureProps> = (props) => {

    const {type} = props
    const dispatch = useDispatch()

    const {items, status} = useSelector((state) => state.top)

    // console [items, setItems] = useState([])

    // const currentPage = {items?.}

    useEffect(() => {
        if(status=='idle'){
            dispatch(fetchTopData(`top/${type}`))
        }
        
    }, [])

    // const fetchData = async () => {
    //     const dataFromFetch = await fetcher

    //     // setItems([...items, ...dataFromFetch])



    // }


    return(
        <>
            <div className={classes.wrapper}>
                <InfiniteScroll
                dataLength={items.data.length} //This is important field to render the next data
                next={items}
                hasMore={items.pagination.has_next_page}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
                // below props only if you need pull down functionality
                refreshFunction={this.refresh}
                pullDownToRefresh
                pullDownToRefreshThreshold={50}
                pullDownToRefreshContent={
                  <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                }
                releaseToRefreshContent={
                  <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                }
                >

                {items?.data?.map((item) => (
                    <CustomCard
                        id={item?.mal_id}
                        img={item.images?.jpg?.image_url}
                        title_en={item?.title_english || item?.name}
                        title_jp={item?.title_japanese || item?.given_name}
                        year={item?.year || item?.birthday}
                        score={item?.score || item?.favorites}
                        type={type}
                    />
                ))}
                </InfiniteScroll>
            </div>
        </>
    )
}


export default TopFeature