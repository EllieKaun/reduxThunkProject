import { useDispatch, useSelector } from 'react-redux';
import { useEffect, FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTopData } from '../model/topAction';
import CustomCard from '../../../shared/UI/CustomCard/view/CustomCard';
import classes from './TopFeature.module.scss';

interface TopFeatureProps {
  type: string;
}

const TopFeature: FC<TopFeatureProps> = ({ type }) => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.top);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopData(`top/${type}?page=1`));
    }
  }, [dispatch, type, status]);

  const fetchMoreData = () => {
    const nextPage = items.pagination.current_page + 1;
    dispatch(fetchTopData(`top/${type}?page=${nextPage}`));
  };

  return (
    <div className={classes.wrapper}>
      <InfiniteScroll
        dataLength={items.data.length} // This is important field to render the next data
        next={fetchMoreData}
        hasMore={items.pagination.has_next_page}
        loader={<h4>Loading...</h4>}
      >
        {items.data.map((item) => (
          <CustomCard
            key={item.mal_id}
            id={item.mal_id}
            img={item.images.jpg.image_url}
            title_en={item.title_english || item.name}
            title_jp={item.title_japanese || item.given_name}
            year={item.year || item.birthday}
            score={item.score || item.favorites}
            type={type}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default TopFeature;
