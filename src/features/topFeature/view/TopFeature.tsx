import { useDispatch, useSelector } from 'react-redux';
import { useEffect, FC, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTopData, clearTopData } from '../model/topAction';
import CustomCard from '../../../shared/UI/CustomCard/view/CustomCard';
import classes from './TopFeature.module.scss';

interface TopFeatureProps {
  type: string;
}

const TopFeature: FC<TopFeatureProps> = ({ type }) => {
  const dispatch = useDispatch();
  const { data, pagination, status } = useSelector((state) => state.top);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTopData(`top/${type}?page=1`));
    }
  }, [dispatch, type, status]);

  const [searchData, setSearchData] = useState<string>('')
  const [isSearchActive, setIsSearchActive] = useState(false)

  const fetchMoreData = () => {
    const nextPage = pagination.current_page + 1;
    if(isSearchActive){
      dispatch(fetchTopData(`${type}?=${searchData}&page=${nextPage}`))
    }
    dispatch(fetchTopData(`top/${type}?page=${nextPage}`));
  };

  const handleSearch = () => {
    dispatch(clearTopData())
    setIsSearchActive(true)
    dispatch(fetchTopData(`${type}?=${searchData}`))
  }

  const handleRemoveSearch = () => {
    dispatch(clearTopData())
    setIsSearchActive(false)
    dispatch(fetchTopData(`${type}?page=1`))
  }

  return (
    <>
      <div>
        <input type="text" name="" id="" onChange={(e)=> setSearchData(e.target.value)}/>
        <button onClick={handleSearch}>Поиск</button>
        {isSearchActive && <button onClick={handleRemoveSearch} >Сбросить</button>}
      </div>
      <InfiniteScroll
        dataLength={data?.length} // текущая длинна массива !динамическая
        next={fetchMoreData}
        hasMore={pagination.has_next_page}
        loader={<h4>Loading...</h4>}
      >
      <div className={classes.wrapper}>
          {data.map((item) => (
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
      </div>
      </InfiniteScroll>
    </>
  );
};

export default TopFeature;
